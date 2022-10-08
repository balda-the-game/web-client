<template>
	<CreateLobbyModal
		:is-active="modalIsActive"
		@confirm="createLobbySubmit"
		@cancel="this.modalIsActive = false"
	/>
	<div class="lobbies box hero is-fullheight-with-navbar is-primary">
		<div class="hero-body is-block p-0">
			<div class="container">
				<LobbyListControls
					class="box"
					@createLobby="modalIsActive = true"
					@refreshList="loadLobbies"
					@search="search"
					@joinWithCode="joinLobbyWithCode"
				/>
				<div class="columns">
					<section class="column block pr-0 mb-0">
						<div class="table-container mb-3">
							<table class="table is-fullwidth is-striped">
								<tbody>
									<LobbyListEntry
										v-for="lobby in lobbies"
										:key="lobby.id"
										:id="lobby.id"
										:title="lobby.title"
										:slots="lobby.slots"
										:free-slots="lobby.free_slots"
										:dimention="lobby.dimention"
										:locked="lobby.locked"
										:language="lobby.language"
										@join="joinLobby"
									/>
								</tbody>
							</table>
						</div>
					</section>
					<section class="column is-one-third mb-0">
						<div class="box chat">Chat will be here</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import LobbyListControls from "@/components/LobbyListView/LobbyListControls.vue";
import LobbyListEntry from "@/components/LobbyListView/LobbyListEntry.vue";
import CreateLobbyModal from "@/components/LobbyListView/CreateLobbyModal.vue";
import axios from "axios";
import qs from "qs";

export default {
	name: "LobbyListView",
	components: { LobbyListControls, LobbyListEntry, CreateLobbyModal },
	data() {
		return {
			modalIsActive: false,
			lobbies: [],
		};
	},
	methods: {
		async loadLobbies() {
			try {
				const res = await axios({
					method: "get",
					url: "/lobbies",
					headers: {
						Authorization: `JWT ${this.$store.getters.token}`,
					},
				});
				this.lobbies = res.data;
			} catch (err) {
				console.error(err.response.data);
				this.lobbies = [];
			}
		},
		async createLobbySubmit(lobby) {
			this.modalIsActive = false;
			try {
				const res = await axios({
					method: "post",
					url: "/lobbies",
					headers: {
						Authorization: `JWT ${this.$store.getters.token}`,
					},
					data: lobby,
				});
				this.$socket.emit("create_game", res.data);
				if (res.data.id != null) this.joinLobby(res.data.id, lobby.key);
			} catch (err) {
				console.error(err.response.data);
			}
		},
		async joinLobby(id, key) {
			// FIXME: EMPTY REQ {} from forntend but not from postman when sending the key using body. Now it uses query pararm key
			const qskey = qs.stringify({ key: key });
			try {
				const joinRes = await axios({
					method: "get",
					url: `/lobbies/${id}?${qskey}`,
					headers: {
						Authorization: `JWT ${this.$store.getters.token}`,
					},
				});
				if (joinRes.data.msg == "Connected")
					this.$router.push(`/lobbies/${id}`);
			} catch (err) {
				console.error(err.response);
			}
		},
		joinLobbyWithCode(code) {
			console.log("join with code: ", code);
		},
		search(filter) {
			console.log("searching: ", filter);
		},
	},
	mounted() {
		this.loadLobbies();
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colorscheme.scss";
table {
	table-layout: fixed;
}
.table-container {
	@media only screen and (max-width: 769px) {
		& {
			max-height: 65vh;
		}
	}
	height: 70vh;
	overflow-y: scroll;
}
.chat {
	height: 70vh;
	overflow-y: scroll;
}
</style>
