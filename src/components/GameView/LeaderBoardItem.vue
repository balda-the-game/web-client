<template>
	<div class="list-item">
		<div class="list-item-image">
			<figure class="image is-64x64">
				<img class="is-rounded" :src="avatar" :alt="name + ' avatar'" />
			</figure>
		</div>
		<div class="list-item-content">
			<div class="title is-7 mb-3 has-text-black">{{ name }}</div>
			<hr class="m-0" />
			<p class="subtitle is-7 has-text-black">
				score: {{ score }}<br />penalty: {{ penalty }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "LeaderBoardItem",
	props: {
		avatar: {
			type: String, // Avatar URL
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		score: {
			type: Number,
			required: true,
		},
		penalty: {
			type: Number,
			required: true,
		},
	},
	methods: {},
};
</script>
