<template>
	<div class="card mb-2">
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-64x64">
						<img class="is-rounded" :src="avatar" :alt="name + ' avatar'" />
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-7 has-text-black mb-2">{{ name }}</p>
					<hr class="m-1" />
					<p class="subtitle is-7 has-text-black">
						score: {{ score }}<br />penalty: {{ penalty }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LeaderBoardItem",
	props: {
		avatar: URL,
		name: String,
		score: Number,
		penalty: Number,
	},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
