import { createStore } from 'vuex';

export default createStore({
  state: {
		token: null,
  },
  getters: {
		authorized: state => {
			return state.token != null
		},
		token: state => {
			return state.token;
		}
  },
  mutations: {
		LOGIN: (state, token) => {
			state.token = token;
		},
		LOGOUT: (state) => {
			state.token = null;
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
    login: async (context, token) => {
      context.commit("LOGIN", token);
    },
  },
  modules: {
  }
});
