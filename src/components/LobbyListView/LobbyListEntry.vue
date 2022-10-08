<template>
	<tr class="entry">
		<td>
			<div class="title-wrapper">
				<!-- TODO: Ticker for overflow !-->
				<p class="lobby-title">
					{{ title }}
				</p>
			</div>
			<span class="container">
				<i
					class="fas fa-user is-large"
					v-for="i of slots - freeSlots"
					:key="i"
				></i>
				<i class="far fa-user is-large" v-for="i of freeSlots" :key="i"></i>
			</span>
		</td>
		<td style="width: 6.5rem">
			<small style="display: inline-block">
				<div style="display: flex; flex-direction: column">
					<div>
						<i class="fas fa-language"></i>
						{{ language }}
					</div>
					<div>
						<i class="fas fa-border-all"></i>
						{{ dimention + "x" + dimention }}
					</div>
				</div>
			</small>
		</td>
		<td class="right-field">
			<div
				class="field has-addons is-justify-content-flex-end is-align-items-center"
			>
				<i v-if="locked" class="fas fa-lock is-large"></i>
				<i v-else class="fas fa-lock-open is-large"></i>
				<div class="control">
					<input
						type="password"
						class="input is-small has-addons"
						placeholder="********"
						:disabled="!locked || freeSlots == 0"
						v-model="key"
					/>
				</div>
				<div class="control">
					<button
						class="button is-small disabled"
						:disabled="freeSlots == 0"
						@click="join"
					>
						Join
					</button>
				</div>
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	name: "LobbyListEntry",
	props: {
		id: String,
		title: String,
		slots: Number,
		freeSlots: Number,
		dimention: Number,
		language: String,
		locked: Boolean,
	},
	data() {
		return {
			key: "",
		};
	},
	methods: {
		join() {
			console.log("Join lobby ", this.id);
			console.log("with key ", this.key);
			this.$emit("join", this.id, this.key);
		},
	},
};
</script>

<style scoped lang="scss">
i {
	padding: 0 0.35rem;
}
.lobby-title {
	white-space: nowrap;
	text-overflow: show;
	overflow: hidden;
	display: inherit;
}
.lobby-id {
	width: 3rem;
	border-right: 1px solid gray;
}
</style>
