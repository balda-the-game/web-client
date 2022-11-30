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
					v-for="i of slots - freeSlots"
					:key="i"
					class="fas fa-user is-large"
				></i>
				<i v-for="i of freeSlots" :key="i" class="far fa-user is-large"></i>
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
						v-model="key"
						type="password"
						class="input is-small has-addons"
						placeholder="********"
						:disabled="!locked || freeSlots == 0"
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
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		slots: {
			type: Number,
			required: true,
		},
		freeSlots: {
			type: Number,
			required: true,
		},
		dimention: {
			type: Number,
			required: true,
		},
		language: {
			type: String,
			required: true,
		},
		locked: Boolean,
	},
	emits: ["join"],
	data() {
		return {
			key: "",
		};
	},
	methods: {
		join() {
			console.log("Join lobby ", this.id);
			console.log("with key ", this.key);
			this.$emit("join", { id: this.id, key: this.key });
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
