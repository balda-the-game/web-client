<template>
	<div class="gamefield">
		<div class="gamefield__cells mb-0 p-0">
			<div v-for="i of dimention" :key="i" class="level m-0">
				<div v-for="j of dimention" :key="j" class="level-item gamefield__cell">
					A
				</div>
			</div>
		</div>

		<div class="gamefield__keyboard keyboard buttons are-small">
			<button
				v-for="key in alphabetArray"
				:key="key"
				class="keyboard__key button is-static"
				v-text="key"
			></button>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameField",
	props: {
		dimention: {
			type: Number,
			required: true,
		},
		alphabet: {
			type: String,
			required: true,
		},
	},
	computed: {
		alphabetArray: {
			get() {
				return Array.from(this.alphabet);
			},
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colorscheme.scss";
.gamefield {
	&__cells {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 70%;
	}

	&__cell {
		border: 1px $black-bis solid;
		font-size: 2em;
		aspect-ratio: 1/1;
	}
}

.keyboard {
	margin: 1em 0 0 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	row-gap: 0.5em;

	&__key {
		margin: 0;
	}
}
</style>
