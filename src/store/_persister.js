/** */

const store_name = 'codelitt-store';
const store_persister = {
    clearStore: () => {
        localStorage.removeItem(store_name);
    },

    initializeStore: () => {
        const store = localStorage.getItem(store_name);
        if (store) {
            return {
                ...JSON.parse(store)
            };
        }

        return {};
    },

    saveStoreState: (store, keys = []) => {
        let portion_of_state_to_store = keys.reduce((sac, key) => ({
            ...sac,
            [key] : store[key],
        }), {});

        localStorage.setItem(store_name, JSON.stringify(portion_of_state_to_store));
    }
};

export default store_persister;