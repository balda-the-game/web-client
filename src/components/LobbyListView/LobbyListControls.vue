<template>
	<div class="level is-justify-content-space-evenly mb-3">
		<div class="level-left">
			<div class="level-item field has-addons mb-0 is-justify-content-center">
				<div class="control has-icons-right">
					<input
						v-model="searchFilter"
						type="text"
						class="input is-rounded"
						placeholder="filter"
					/>
					<span class="icon is-small is-right">
						<i class="fas fa-search"></i>
					</span>
				</div>
				<div class="control">
					<button
						class="button is-info is-rounded"
						@click="$emit('search', searchFilter)"
					>
						Search
					</button>
				</div>
			</div>

			<div class="level-item field has-addons mb-0 is-justify-content-center">
				<div class="control has-icons-right">
					<input
						v-model="lobbyCode"
						type="text"
						class="input is-rounded"
						placeholder="room code"
					/>
					<span class="icon is-small is-right">
						<i class="fas fa-key"></i>
					</span>
				</div>
				<div class="control">
					<button
						class="button is-info is-rounded"
						:disabled="lobbyCode == ''"
						@click="$emit('joinWithCode', lobbyCode)"
					>
						Join
					</button>
				</div>
			</div>

			<div class="level-item field has-addons mb-0 is-justify-content-center">
				<div class="control">
					<button
						class="button is-link is-rounded"
						@click="$emit('refreshList')"
					>
						<span>Refresh</span>
						<span class="icon is-small">
							<i class="fas fa-rotate-left"></i>
						</span>
					</button>
				</div>
				<div class="control">
					<button
						class="button is-primary is-rounded"
						@click="$emit('createLobby')"
					>
						<span>Create</span>
						<span class="icon is-small">
							<i class="fas fa-plus"></i>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LobbyListControls",
	props: {},
	emits: ["search", "joinWithCode", "refreshList", "createLobby"],
	data() {
		return {
			lobbyCode: "",
			searchFilter: "",
		};
	},
	methods: {},
};
</script>

<style scoped lang="scss">
input {
	max-width: 10rem;
}
@media only screen and (max-width: 769px) {
	.level-item:not(:last-child) {
		margin-bottom: 12px !important;
	}
}
</style>
