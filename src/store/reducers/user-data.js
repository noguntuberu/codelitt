/** */
import { ADD_USER_DATA } from '../actions/user-data';

export const user_data = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_USER_DATA:
            return {
                ...payload,
            };
        default:
            return state;
    }
}