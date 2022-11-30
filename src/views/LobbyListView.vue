<template>
	<CreateLobbyModal
		:is-active="modalIsActive"
		@confirm="onConfirm"
		@cancel="modalIsActive = false"
	/>
	<div class="lobbies box hero is-fullheight-with-navbar is-primary">
		<div class="hero-body is-block p-0">
			<div class="container">
				<LobbyListControls
					class="box"
					@create-lobby="modalIsActive = true"
					@refresh-list="updateLobbiesList"
					@search="search"
					@join-with-code="joinLobbyWithCode"
				/>
				<div class="columns">
					<section class="column block pr-0 mb-0">
						<div class="table-container mb-3">
							<table class="table is-fullwidth is-striped">
								<tbody>
									<LobbyListEntry
										v-for="lobby in lobbies"
										:id="lobby.id"
										:key="lobby.key"
										:title="lobby.title"
										:slots="lobby.max_players"
										:free-slots="
											lobby.players_list !== null
												? lobby.max_players - lobby.players_list.length
												: lobby.max_players
										"
										:dimention="lobby.dimention"
										:locked="lobby.key != ''"
										:language="lobby.language"
										@join="
											joinLobby({
												userId: user.id,
												...$event,
											})
										"
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
import { createNamespacedHelpers } from "vuex";
import { createLobby } from "@/lib/api/supabase";
const { mapGetters: mapLobbiesGetters, mapActions: mapLobbiesActions } =
	createNamespacedHelpers("lobbies");
const { mapGetters: mapAuthGetters } = createNamespacedHelpers("auth");

export default {
	name: "LobbyListView",
	components: { LobbyListControls, LobbyListEntry, CreateLobbyModal },
	data() {
		return {
			modalIsActive: false,
		};
	},
	computed: {
		...mapLobbiesGetters(["lobbies"]),
		...mapAuthGetters(["user"]),
	},
	mounted() {
		this.updateLobbiesList();
	},
	methods: {
		...mapLobbiesActions(["updateLobbiesList", "createLobby", "joinLobby"]),
		async onConfirm(lobby) {
			this.modalIsActive = false;
			await createLobby(lobby);
		},
		joinLobbyWithCode(code) {
			console.log("join with code: ", code);
		},
		search(filter) {
			console.log("searching: ", filter);
		},
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
