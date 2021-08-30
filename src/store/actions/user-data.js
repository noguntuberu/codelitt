/** */

export const ADD_USER_DATA = 'add credentials to store.';
export const LOG_OUT = 'logout of application';

//
export const addDataToStore = data => ({
    type: ADD_USER_DATA,
    payload: data,
});