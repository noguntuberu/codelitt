/** */
export const ADD_REMINDER = 'add REMINDER to store.';
export const DEL_REMINDER = 'remove REMINDER from store.';
export const UPD_REMINDER = 'update REMINDER in store.';

/** */
export const addReminder = (payload) => ({
    type: ADD_REMINDER,
    payload,
});

export const deleteReminder = (payload) => ({
    type: DEL_REMINDER,
    payload,
})

export const updateReminder = (payload) => ({
    type: UPD_REMINDER,
    payload,
})