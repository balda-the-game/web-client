<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <!-- <img
          src="https://avatars.githubusercontent.com/u/111589147?s=256"
          width="128"
          height="12"
        /> -->
        <strong>BALDA</strong>
      </router-link>

      <a
        role="button"
        @click="onBurgerTap"
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

    <div id="menu-items" :class="navbarMenuClass">
      <div class="navbar-start">
        <router-link to="/rules" class="navbar-item">
          <a class="navbar-item"> Rules </a>
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register" class="navbar-item">
              <a class="button is-success">
                <strong>Sign up</strong>
              </a>
            </router-link>
            <router-link to="/login" class="navbar-item">
              <a class="button is-light"> Log in </a>
            </router-link>
          </div>
        </div>
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
      navbarMenuClass: ["navbar-menu"],
    };
  },
  methods: {
    onBurgerTap() {
      console.log("onBurgerTap");
      let i = this.navbarMenuClass.indexOf("is-active");
      i > -1
        ? this.navbarMenuClass.splice(i, 1)
        : this.navbarMenuClass.push("is-active");
    },
  },
};
</script>

<style scoped lang="scss">
</style>
