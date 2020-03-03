import { CHANGE_SEARCH_BOX } from './constants';

export const setSearchBox = (text)=>{
  return{
    type: CHANGE_SEARCH_BOX,
    payload: text

}

  }
