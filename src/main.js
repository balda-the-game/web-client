import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import socketio from 'socket.io-client'
// import VueSocketIO from 'vue-socket.io'

import "@/assets/scss/main.scss";

store.subscribe((mutation, state) => {
	if (!["LOAD_STORE", "auth/SUCCESS", "auth/FAILURE"].includes(mutation.type)) {
		store.commit("auth/SUCCESS");
		localStorage.setItem("balda-state", JSON.stringify(state));
	}
});

createApp(App)
	.use(router)
	.use(store)
	/*.use(new VueSocketIO({
		debug: true,
		connection: socketio('ws://localhost:3000'),
		vuex: {
			store,
			actionPrefix: 'SOCKET_',
			mutationPrefix: 'SOCKET_'
		}
	}))*/
	.mount("#app");
