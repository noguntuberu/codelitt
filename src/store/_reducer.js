/** */
import { combineReducers } from 'redux';

import { reminders } from './reducers/reminder';
import { user_data } from './reducers/user-data';
import { LOG_OUT } from './actions/user-data';

const appReducer = combineReducers({
    reminders,
    user_data,
});

const rootReducer = (state, action) => {
    if (action === LOG_OUT) return null;
    return appReducer(state, action);
};

export default rootReducer;