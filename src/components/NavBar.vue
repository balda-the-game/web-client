<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item" @click="isActive = false">
        <!-- <img
          src="https://avatars.githubusercontent.com/u/111589147?s=256"
          width="128"
          height="12"
        /> -->
        <strong>BALDA</strong>
      </router-link>

      <a
        role="button"
        @click="isActive = !isActive"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="menu-items"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="menu-items" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link
          to="/rules"
          class="navbar-item py-3"
          @click="isActive = false"
        >
          Rules
        </router-link>
      </div>

      <div class="navbar-end">
        <router-link
          to="/register"
          class="navbar-item has-text-success is-small py-3"
          @click="isActive = false"
          v-if="!this.$store.getters.authorized"
        >
          Sign up
        </router-link>
        <router-link
          to="/login"
          class="navbar-item is-small py-3"
          @click="isActive = false"
          v-if="!this.$store.getters.authorized"
        >
          Log in
        </router-link>
        <a class="navbar-item is-small py-3" @click="isActive = false; logout()" v-else>
          Log out
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
		logout() {
			console.log(this.$route.name)
			if (["lobbies"].includes(this.$route.name))
				this.$router.push("/")
			this.$store.dispatch("logout");
		}
	},
};
</script>

<style scoped lang="scss">
.navbar * {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
