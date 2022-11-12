<template>
	<div class="gamefield">
		<div class="gamefield__grid mb-0 p-0" :style="gridStyle">
			<div
				v-for="j of dimention * dimention"
				:key="j"
				:cell-index="j"
				class="gamefield__grid-cell"
				@drop="onDrop($event)"
				@dragover.prevent
				@dragenter.prevent
			></div>
		</div>

		<div class="gamefield__keyboard keyboard">
			<div class="keyboard__row">
				<div
					v-for="key in alphabet.slice(0, alphabet.length / 3)"
					:key="key"
					class="keyboard__key"
					draggable="true"
					@dragstart="onDragStart($event, key)"
					v-text="key"
				></div>
			</div>
			<div class="keyboard__row">
				<div
					v-for="key in alphabet.slice(
						alphabet.length / 3,
						(alphabet.length / 3) * 2
					)"
					:key="key"
					class="keyboard__key"
					draggable="true"
					@dragstart="onDragStart($event, key)"
					v-text="key"
				></div>
			</div>
			<div class="keyboard__row">
				<div
					v-for="key in alphabet.slice(
						(alphabet.length / 3) * 2,
						(alphabet.length / 3) * 3
					)"
					:key="key"
					class="keyboard__key"
					draggable="true"
					@dragstart="onDragStart($event, key)"
					v-text="key"
				></div>
			</div>
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
	},
	computed: {
		alphabet: {
			get() {
				return Array.from("abcdefghijklmnopqrstuvwxyz");
				// return Array.from("абвгдеёжзийклмнопрстуфхцчшщъыьэюя");
			},
		},
		gridStyle: {
			get() {
				return {
					gridTemplate: `repeat(${this.dimention}, 1fr) / repeat(${this.dimention}, 1fr)`,
				};
			},
		},
	},
	methods: {
		onDragStart(event, letter) {
			console.log("drag letter ", letter);
			event.dataTransfer.dropEffect = "move";
			event.dataTransfer.effectAllowed = "move";
			event.dataTransfer.setData("letter", letter);
		},
		onDrop(event) {
			const letter = event.dataTransfer.getData("letter");
			console.log("drop letter ", letter);
			event.target.innerHTML = letter;
			event.target.cellData = letter;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/colorscheme.scss";
.gamefield {
	user-select: none;

	&__grid {
		display: grid;
		aspect-ratio: 1/1;
		max-width: 70%;
		margin: 0 auto;

		&-cell {
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid $black-bis;
			font-size: 2em;
			font-weight: bold;
		}
	}
}

.keyboard {
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	gap: 0.2em;
	margin-block: 0.5em;

	&__row {
		display: flex;
		justify-content: center;
		gap: 0.2em;
	}

	&__key {
		display: inline-block;
		width: 2.2em;
		aspect-ratio: 1/1;
		text-align: center;
		vertical-align: center;
		border: 1px solid $grey-lighter;
		border-radius: 3px;
		background: $white-bis;
	}
}
</style>
