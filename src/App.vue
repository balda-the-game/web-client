<template>
  <NavBar/>
  <router-view/>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
}
</script>