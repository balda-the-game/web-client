<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form class="box">
              <div class="field">
                <label class="label is-aligned-left">Username</label>
                <div class="control has-icon-left">
                  <input
                    class="input"
                    type="username"
                    placeholder="username"
                    required
                    :data="usernameInput"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icon-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="password"
                    required
                    :data="passwordInput"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Confirm password</label>
                <div class="control has-icon-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="password"
                    required
                    :data="passwordConfirmInput"
                  />
                </div>
              </div>

              <button class="button is-primary" @click.prevent="register">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      usernameInput: "",
      passwordInput: "",
      passwordConfirmInput: "",
    };
  },
  methods: {
    register() {
      console.log(`register(${1}, ${2}, ${3}) `, this.usernameInput, this.passwordInput, this.passwordConfirmInput);
      /* TODO:
        [ ] is-danger if field is empty
        [ ] password field is-warning if password lenght is less than 8
        [ ] password and confirm field is danger if password fields doesn't match
        [ ] is-danger if register attempt failed if username exists 
      */
    }
  },
};
</script>

<style lang="scss" scoped>
</style>