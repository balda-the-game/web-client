import {
	login,
	logout,
	register,
	update,
	sendResetPasswordEmail,
	getUserProfile,
} from "@/lib/api/supabase";

const state = () => ({
	user: null,
	error: null,
});

const getters = {
	authorized: (state) => {
		return !!state.user;
	},
	user: (state) => {
		return state.user;
	},
	failure: (state) => {
		return state.error != null;
	},
	failureMessage: (state, getters) => {
		return getters.failure ? state.error.message : "";
	},
};

const actions = {
	login: async ({ commit }, payload) => {
		try {
			const user = await login(payload);
			const { username, avatar_url } = await getUserProfile(
				user.user_metadata.username
			);
			commit("LOGIN", { email: payload.email, username, avatar_url });
			commit("SUCCESS");
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},

	logout: ({ commit }) => {
		try {
			logout();
			commit("LOGOUT");
			commit("SUCCESS");
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},

	register: async ({ commit, dispatch }, payload) => {
		try {
			await register(payload);
			commit("SUCCESS");
			await dispatch("login", payload);
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},

	update: async ({ commit }, payload) => {
		try {
			await update(payload);
			commit("SUCCESS");
		} catch (e) {
			console.error(e);
			commit("FAILURE", e);
		}
	},

	sendResetPasswordEmail: async ({ commit }, email) => {
		try {
			await sendResetPasswordEmail(email);
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
	LOGIN: (state, user) => {
		state.user = user;
	},
	LOGOUT: (state) => {
		state.user = null;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
