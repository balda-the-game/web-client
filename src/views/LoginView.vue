<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form action="" class="box">
              <div class="field">
                <label class="label is-aligned-left">Username</label>
                <div class="control has-icon-left">
                  <input
                    class="input is-medium"
                    type="username"
                    placeholder="username"
                    required
                    v-model="usernameInput"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icon-left">
                  <input
                    class="input is-medium"
                    type="password"
                    placeholder="password"
                    required
                    v-model="passwordInput"
                  />
                </div>
              </div>

              <button class="button is-info" @click.prevent="logIn">Log in</button>
              <button class="button is-ghost">forgot password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
    };
  },
  methods: {
    logIn() {
      console.log("logIn() ", this.usernameInput, this.passwordInput);
      /* TODO:
        [ ] is-danger if field is empty
        [ ] is-danger if login attempt failed
      */
    },
  },
};
</script>

<style lang="scss" scoped>
</style>