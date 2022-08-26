<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form action="" class="box">
              <div class="field">
                <label class="label is-aligned-left">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{ 'is-danger': failedLogin }"
                    type="username"
                    placeholder="username"
                    required
                    v-model="usernameInput"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{ 'is-danger': failedLogin }"
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
                  class="help is-danger"
                  :class="{ 'is-hidden': !failedLogin }"
                  >{{ failedLoginLabel }}</label
                >
              </div>

              <button
                class="button is-success"
                @click.prevent="logIn"
                @keypress.enter="logIn"
              >
                Log in
              </button>
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
      passInput: "",
      failedLogin: false,
      failedLoginLabel: "",
    };
  },
  methods: {
    async logIn() {
      /*
        [X] is-danger if field is empty
        [ ] is-danger if login attempt failed
      */
      if (this.usernameInput.length < 2 || this.passInput < 8) {
        this.failedLogin = true;
        this.failedLoginLabel = "Fill all fields";
        return;
      } else {
        this.failedLogin = false;
        this.failedLoginLabel = "";
      }
      //const loginStatus = await tryLogIn(this.usernameInput, this.passInput);
      const loginStatus = { status: 403, msg: "Wrong username or password" };
      if (loginStatus.status == 403) {
        this.failedLogin = true;
        this.failedLoginLabel = loginStatus.msg;
      } else {
        this.failedLogin = false;
        this.failedLoginLabel = "";
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>