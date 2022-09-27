import { createStore } from 'vuex';

export default createStore({
  state: {
		userData: {
			id: null,
			name: null,
			email: null,
			token: null,
		}
  },
  getters: {
		authorized: state => {
			return state.userData.token != null
		},
		userData: state => {
			return state.userData;
		},
		id: state => {
			return state.userData.id;
		},
		name: state => {
			return state.userData.name;
		},
		email: state => {
			return state.userData.email;
		},
		token: state => {
			return state.userData.token;
		},
  },
  mutations: {
		LOGIN: (state, userData) => {
			state.userData = userData;
		},
		LOGOUT: (state) => {
			state.userData = null;
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
    login: async (context, userData) => {
      context.commit("LOGIN", userData);
    },
  },
  modules: {
  }
});
