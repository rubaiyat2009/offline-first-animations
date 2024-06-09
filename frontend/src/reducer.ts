// src/reducer.ts
import { AnyAction } from 'redux';

const initialState = {};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

export default reducer;