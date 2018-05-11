import { expect } from 'chai';
import 'mocha';
import {store, Actions} from '../server/store';
var uniqid = require('uniqid');

describe('Server code', () => {

  it('should add a new player', () => {
    store.dispatch(Actions.playerStart({id: uniqid(), name: 'Player 1'}));
    let state = store.getState();
    expect(state.players.size).to.equal(1);

    for (var [key, value] of state.players) {
      expect(value.name).to.equals('Player 1');
      expect(key).to.equals(value.id);
    }
  });


  it('should attack a player', () => {
    store.dispatch(Actions.playerStart({id: uniqid(), name: 'Player 2'}));
    store.dispatch(Actions.playerStart({id: uniqid(), name: 'Player 3'}));
    store.dispatch(Actions.playerStart({id: uniqid(), name: 'Player 4'}));
    store.dispatch(Actions.playerStart({id: uniqid(), name: 'Player 5'}));

    let state = store.getState();
    expect(state.players.size).to.equal(5);

    let keys = Array.from(state.players.keys()),
      attackerID = keys[0];

    store.dispatch(Actions.playerAttack({attackerID}));

    state = store.getState();
    expect(state.players.size).to.equal(4);
    expect(state.players.get(attackerID)).not.to.equal(undefined);

  });


  it('player should get status', () => {

  });

});