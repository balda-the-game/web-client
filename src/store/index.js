import { createStore } from 'vuex';

export default createStore({
  state: {
		logedIn: false,
  },
  getters: {
    notes: state => {
      return state.notes;
    },
  },
  mutations: {
		LOGIN: (state) => {
			state.logedIn = false;
		},
    LOAD_STORE: (state) => {
      if (localStorage.getItem("balda-state")) {
        try {
          Object.assign(state, JSON.parse(localStorage.getItem("balda-state")));
        }
        catch (e) {
          console.error("ERR: Could not initialize store.", e);
        }
      }
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("LOGOUT");
    },
    login: async (context) => {
      context.commit("LOGIN");
    },
  },
  modules: {
  }
});
