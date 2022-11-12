import { createStore, createLogger } from "vuex";
import auth from "./modules/auth";
import lobbies from "./modules/lobbies";
import game from "./modules/game";

const debug = import.meta.env.NODE_ENV !== "production";

export default createStore({
	// All modules use namespaced: true flag
	// States: $store.auth.user
	// Getters: $state.getters['moduleName/getterName']
	// Actions: $state.dispatch('moduleName/actionName')
	// Mutations: commit('moduleName/MUTATION_NAME') /* Don't do this that way, use actions */
	modules: {
		auth: auth,
		game: game,
		lobbies: lobbies,
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],

	mutations: {
		LOAD_STORE: (state) => {
			if (localStorage.getItem("balda-state")) {
				try {
					Object.assign(state, JSON.parse(localStorage.getItem("balda-state")));
				} catch (e) {
					console.group();
					console.error("Could not initialize store.");
					console.error(e);
					console.groupEnd();
				}
			}
		},
	},
});
