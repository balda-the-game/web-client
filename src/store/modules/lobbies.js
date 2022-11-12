import { getLobbies, createLobby, joinLobby } from "@/lib/api/supabase.js";

const state = () => ({
	lobbies: [],
	error: null,
});

const getters = {
	failure: (state) => {
		return state.error != null;
	},
	failureMessage: (state, getters) => {
		return getters.failure ? state.error.message : "";
	},
	lobbies: (state) => {
		return state.lobbies;
	},
};

const actions = {
	updateLobbiesList: async ({ commit }) => {
		try {
			const lobbies = await getLobbies();
			console.log(lobbies);
			commit("UPDATE_LOBBIES_LIST", lobbies);
			commit("SUCCESS");
		} catch (e) {
			console.log(e);
			commit("FAILURE", e);
		}
	},
	createLobby: async ({ commit }, payload) => {
		try {
			await createLobby(payload);
			commit("SUCCESS");
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},
	joinLobby: async ({ commit }, payload) => {
		console.log("join lobby", payload.id, " with code ", payload.key);
		try {
			await joinLobby(payload);
			commit("SUCCESS");
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},
};

const mutations = {
	FAILURE: (state, { message, status }) => {
		state.error = {
			status: status,
			message: message,
		};
	},
	SUCCESS: (state) => {
		state.error = null;
	},
	UPDATE_LOBBIES_LIST: (state, lobbies) => {
		state.lobbies = lobbies;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
