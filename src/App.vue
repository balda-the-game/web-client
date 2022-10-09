<template>
	<NavBar />
	<router-view />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
	components: { NavBar },
	beforeCreate() {
		this.$store.commit("LOAD_STORE");
	},
};
</script>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

body {
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none !important;
	}
}
</style>
