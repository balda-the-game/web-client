<template>
  <NavBar />
  <router-view />
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
	beforeCreate() {
		this.$store.commit("LOAD_STORE");
	}
};
</script>