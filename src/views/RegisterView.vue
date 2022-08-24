<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form class="box">
              <div class="field">
                <label class="label is-aligned-left">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{ 'is-danger': usernameHasError }"
                    type="username"
                    placeholder="username"
                    required
                    v-model="usernameInput"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <label
                  class="label is-small"
                  :class="{ 'is-hidden': !usernameHasError }"
                  >{{ usernameErrorLabel }}</label
                >
              </div>

              <div class="field">
                <label class="label">Pass</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{ 'is-danger': passHasError }"
                    type="password"
                    placeholder="password"
                    required
                    v-model="passInput"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <label
                  class="label is-small"
                  :class="{ 'is-hidden': !passHasError }"
                  >{{ passErrorLabel }}</label
                >
              </div>

              <div class="field">
                <label class="label">Confirm password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{ 'is-danger': passConfirmHasError }"
                    type="password"
                    placeholder="password"
                    required
                    v-model="passConfirmInput"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <label
                  class="label is-small"
                  :class="{ 'is-hidden': !passConfirmHasError }"
                  >{{ passConfirmErrorLabel }}</label
                >
              </div>

              <button
                class="button is-success"
                @click.prevent="register"
                @keyup.enter="register"
              >
                Register
              </button>
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
      passInput: "",
      passConfirmInput: "",
      usernameHasError: false,
      passHasError: false,
      passConfirmHasError: false,
      usernameErrorLabel: "",
      passErrorLabel: "",
      passConfirmErrorLabel: "",
    };
  },
  methods: {
    async register() {
      /* TODO:
        [x] is-danger if field is empty
        [x] password field is-warning if password lenght is less than 8
        [x] password and confirm field is danger if password fields doesn't match
        [ ] is-danger if register attempt failed if username exists 
      */
      if (!/^[^\W\d][\d\w]{2,16}$/g.test(this.usernameInput)) {
        this.usernameHasError = true;
        this.usernameErrorLabel = "Use letters and digits 2 to 16 length";
      } else {
        this.usernameHasError = false;
        this.usernameErrorLabel = "";
      }
      if (!/^[\d\w\S]{8,}$/g.test(this.passInput)) {
        this.passHasError = true;
        this.passErrorLabel = "Wrong pass pattern. 8 char length minimum";
      } else {
        this.passHasError = false;
        this.passErrorLabel = "";
      }
      if (
        this.passInput != this.passConfirmInput ||
        this.passConfirmInput.length == 0
      ) {
        this.passConfirmHasError = true;
        this.passConfirmErrorLabel = "Passwords doesn't match";
        return;
      } else {
        this.passConfirmHasError = false;
        this.passConfirmErrorLabel = "";
        return;
      }
      //await checkIfUsernameExists();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>