<template>
	<div class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body is-block p-2">
			<section class="columns">
				<section class="column m-0 is-one-fifth">
					<div class="box has-text-centered p-1 m-0 mb-2">{{ game.title }}</div>
					<div
						class="leaderboard card list has-overflow-ellipsis"
						:class="{ 'has-hidden-images': false }"
					>
						<LeaderBoardItem
							v-for="p of players"
							:key="p.name"
							:avatar="p.avatar"
							:name="p.name"
							:score="p.score"
							:penalty="p.penalty"
						/>
					</div>
				</section>
				<section class="column m-0">
					<div class="box">
						<progress
							class="progress is-small is-link mb-1 mt-0"
							value="45"
							max="100"
						></progress>
						<GameField :dimention="game.dimention" :alphabet="game.alphabet" />
					</div>
				</section>
				<section class="column m-0 is-one-third">
					<div class="box">
						<GameLegend :legend="game.legend" />
					</div>
				</section>
			</section>
		</div>
	</div>
</template>

<script>
import LeaderBoardItem from "@/components/GameView/LeaderBoardItem.vue";
import GameField from "@/components/GameView/GameField.vue";
import GameLegend from "@/components/GameView/GameLegend.vue";

export default {
	name: "GameView",
	components: { LeaderBoardItem, GameField, GameLegend },
	data() {
		return {
			players: [
				{
					name: "Nagibator228",
					avatar: "https://i.pravatar.cc/300",
					score: 0,
					penalty: 0,
				},
				{
					name: "xei",
					avatar: "https://i.pravatar.cc/300",
					score: 0,
					penalty: 0,
				},
				{
					name: "GuyWithVeryLongUsernameFuuuuck",
					avatar: "https://i.pravatar.cc/300",
					score: 0,
					penalty: 0,
				},
				{
					name: "AdamThomasMoran",
					avatar: "https://i.pravatar.cc/300",
					score: 0,
					penalty: 0,
				},
			],
			game: {
				// alphabet: "abcdefghijklmnopqrstuvwxyz",
				alphabet: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
				dimention: 5,
				title: "Some boring title",
				legend: {
					Nagibator228: ["Snow", "Bomb", "Grave"],
					xei: [],
					AdamThomasMoran: ["Sex", "Car", "Foundation"],
					GuyWithVeryLongUsernameFuuuuck: [
						"Word",
						"Elbow",
						"Grass",
						"Inspiration",
					],
				},
			},
		};
	},
	mounted() {},
	beforeCreate() {
		// TODO: Check if the game exists. If it is and not started yet then join. Else 404
		// TODO: Connect to the server socket. And get the list of the game state
	},
	methods: {
		leave_game() {},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/colorscheme.scss";
</style>
