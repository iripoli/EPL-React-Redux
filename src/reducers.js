import { CHANGE_SEARCH_BOX } from './constants'

const initialState = {
  searchBox: ''
}

export const searchTeams = (state = initialState, action = {})=>{
  switch (action.type) {
    case CHANGE_SEARCH_BOX: 
      return Object.assign({}, state, { searchBox: action.payload })
    default: return state
  }
}