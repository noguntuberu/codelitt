/** */
import { createStore } from 'redux';
import reducer from './_reducer';
import persister from './_persister';

const initial_store_state = persister.initializeStore();
const store = createStore(reducer, initial_store_state);

store.subscribe(() => {
    const state = store.getState();
    const keys = ['reminders', 'user_data'];
    persister.saveStoreState(state, keys);
});

export default store;