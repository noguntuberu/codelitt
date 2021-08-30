/** */
import { ADD_REMINDER, DEL_REMINDER, UPD_REMINDER } from '../actions/reminder';

export const reminders = (state = {}, action) => {
    const { type, payload } = action;
    let old_state = { ...state };
    switch (type) {
        case ADD_REMINDER:
            return {
                ...state,
                [payload.date]: {
                    ...state[payload.date],
                    [payload.id]: payload,
                },
            };
        case DEL_REMINDER:
            delete old_state[payload.date][payload.id];
            return {
                ...old_state
            }
        case UPD_REMINDER:
            const { old, edited } = payload;
            old_state[old.date][old.id] = { ...edited };
            return { ...old_state };
        default:
            return state;
    }
}