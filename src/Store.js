//import {createStore} from "redux";
import Dispatcher from "./Dispatcher";

export default class {
  constructor(initialState) {
    //let reduxStore = createStore(this.reducer, initialState);

    //reduxStore.dispatch = this.dispatch;

    // poor man's "extend" since Redux builds the store on the fly
    //Object.assign(this, reduxStore);

    this.state = initialState;

    Dispatcher.register((action) => {
      this.dispatch(action);
    });
  }

  listeners = []

  get state() {
    return this._state;
  }

  set state(newState) {
    if(newState !== this.state) {
      this._state = newState;

      this.listeners.forEach((listener) => {
        listener(this._state);
      });
    }

    return this._state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }

  subscribe(listener) {
    this.listeners.push(listener);

    return () => {
      let index = this.listeners.indexOf(listener);

      this.listeners.splice(index, 1);
    };
  }

  reducer(state, action) {
    throw "You need to implement this on your subclass.";
  }
}
