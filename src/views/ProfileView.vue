<template>
	<div class="confirmation">
		<section class="hero is-primary is-fullheight-with-navbar">
			<div class="hero-body">
				<div class="container">
					<div class="title">{{ user.username }}</div>
					<div class="subtitle">{{ user.email }}</div>
					<figure class="image is-128x128">
						<img :src="user.avatar_url" />
					</figure>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("auth");

export default {
	name: "ConfirmEmail",
	computed: {
		...mapGetters(["user"]),
	},
};
</script>
