"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {createTypes, actionCreator} from 'redux-action-creator';
const typescript_fsa_1 = require("typescript-fsa");
const redux_1 = require("redux");
var uniqid = require('uniqid');
const utils_1 = require("../lib/utils");
const actionCreator = typescript_fsa_1.default();
exports.ActionTypes = {
    PLAYER_START: 'PLAYER_START',
    PLAYER_ATTACK: 'PLAYER_ATTACK',
};
exports.Actions = {
    playerStart: actionCreator(exports.ActionTypes.PLAYER_START),
    playerAttack: actionCreator(exports.ActionTypes.PLAYER_ATTACK),
};
exports.InitialState = {
    players: new Map(),
};
function reducers(state = exports.InitialState, action) {
    switch (action.type) {
        case exports.ActionTypes.PLAYER_START:
            let newPlayer = {
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
        case exports.ActionTypes.PLAYER_ATTACK:
            let otherPlayers = new Map(state.players), newPlayersList = new Map(state.players);
            otherPlayers.delete(action.payload.attackerID);
            let keys = Array.from(otherPlayers.keys()), unfortunatePlayer = utils_1.randomItem(keys);
            newPlayersList.delete(unfortunatePlayer);
            return Object.assign(state, {
                players: newPlayersList
            });
        default:
            return state;
    }
}
exports.store = redux_1.createStore(reducers);
//# sourceMappingURL=store.js.map