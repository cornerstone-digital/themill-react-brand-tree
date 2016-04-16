import {ADD_ITEM} from './../const';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
