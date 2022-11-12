const state = () => ({
	gamefield: {},
	dimention: null,
	players: [],
	error: null,
});

const getters = {
	failure: (state) => {
		return state.error != null;
	},
	failureMessage: (state, getters) => {
		return getters.failure ? state.error.message : "";
	},
};

const actions = {};

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
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
