// import {createTypes, actionCreator} from 'redux-action-creator';
import actionCreatorFactory from 'typescript-fsa';
import {Action} from 'typescript-fsa';
import { createStore } from 'redux'
var uniqid = require('uniqid');

import {Player} from "../models/player";
import {randomItem} from "../lib/utils";
const actionCreator = actionCreatorFactory();

export const ActionTypes = {
  PLAYER_START: 'PLAYER_START',
  PLAYER_ATTACK: 'PLAYER_ATTACK',
};

export const Actions = {
  playerStart: actionCreator<{id: string, name: string}>(ActionTypes.PLAYER_START),
  playerAttack: actionCreator<{attackerID: string}>(ActionTypes.PLAYER_ATTACK),
};


export interface StateInterface {
  players: Map<string, Player>,
}

export const InitialState: StateInterface = {
  players: new Map(),
}


function reducers(state: StateInterface = InitialState, action: any) {

  switch (action.type) {
    case ActionTypes.PLAYER_START:
      let newPlayer: Player = {
        id: action.payload.id,
        name: action.payload.name,
        startDate: '',
        kills: 0,
      };

      let newMap = state.players;
      newMap.set(action.payload.id, newPlayer);

      return Object.assign(state, {
        players: newMap
      });


    case ActionTypes.PLAYER_ATTACK:
      let otherPlayers = new Map(state.players),
        newPlayersList = new Map(state.players);

      otherPlayers.delete(action.payload.attackerID);

      let keys = Array.from(otherPlayers.keys()),
        unfortunatePlayer = randomItem(keys);
      newPlayersList.delete(unfortunatePlayer);

      return Object.assign(state, {
        players: newPlayersList
      });

    default:
      return state;
  }

}



export const store = createStore(reducers);

