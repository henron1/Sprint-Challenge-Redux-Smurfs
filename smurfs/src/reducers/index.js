/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  SMURF_FETCH,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_ERROR,
  SMURF_ADD,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_ERROR
} from "../Actions"


//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState= {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURF_FETCH:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true,
      }
    case SMURF_FETCH_SUCCESS:
      return {
        ...state,
        error: '',
        smurfs: action.payload,
        fetchingSmurfs: false,
      }
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload,
        error: '',

      }
  }
}

export default smurfReducer;