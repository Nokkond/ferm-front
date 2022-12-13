import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isPopupActive: false,
    },
    getters: {
        getPopup(currentState) {
            return currentState.isPopupActive;
        },
    },
    mutations: {
        setPopup(state) {
            console.log(state.isPopupActive);
            state.isPopupActive = !state.isPopupActive;
            console.log(state.isPopupActive);
        },
    }
});
