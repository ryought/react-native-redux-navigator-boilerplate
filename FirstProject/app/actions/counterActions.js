import * as types from './actionTypes';

// connected component can use this function to make change in store
export function increment() {
  return {
    type: types.INCREMENT
  };
}
