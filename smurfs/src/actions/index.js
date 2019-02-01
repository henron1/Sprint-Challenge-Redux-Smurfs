import axios from 'axios';

export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_FETCH_SUCESS = "SMURF_FETCH_SUCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";

export const SMURF_ADD = "SMURF_ADD";
export const SMURF_ADD_SUCCESS = "SMURF_ADD_SUCCESS";
export const SMURF_ADD_ERROR = "SMURF_ADD_ERROR";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  dispatch({type: SMURF_FETCH});
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => dispatch({type:SMURF_FETCH_SUCESS, payload: res.data}))
  .catch(err => dispatch({type:SMURF_FETCH_ERROR, payload: err.data}))
}

export const addSmurf = () => dispatch => {
  dispatch({type:SMURF_ADD});
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => dispatch({type:SMURF_ADD_SUCCESS, payload: res.data}))
  .catch(err => dispatch({type:SMURF_ADD_ERROR, payload: res.data}))
}


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
