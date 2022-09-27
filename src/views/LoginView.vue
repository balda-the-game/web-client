<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form
              @submit.prevent="submitForm"
              @keyup.enter.prevent="submitForm"
              class="box"
            >
              <WTextInput
                type="email"
                label="email"
                placeholder="example@email.com"
                icon-class="fas fa-at"
                :invalid="emailValueErrorLabel != '' || failedLogin"
                :errorLabel="emailValueErrorLabel"
                v-model.trim="emailValue"
              />
              <WTextInput
                type="password"
                label="password"
                placeholder="********"
                icon-class="fas fa-key"
                :invalid="passValueErrorLabel != '' || failedLogin"
                :errorLabel="passValueErrorLabel"
                v-model.trim="passValue"
              />
              <label
                class="help is-danger"
                :class="{ 'is-hidden': !failedLogin }"
                >{{ failedLoginLabel }}</label
              >
              <button type="submit" class="button is-success">Log in</button>
              <button class="button is-ghost">forgot password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WTextInput from "@/components/Core/WTextInput.vue";
import axios from "axios";
export default {
  name: "LoginView",
  components: { WTextInput },
  data() {
    return {
      emailValue: "",
      passValue: "",
      emailValueErrorLabel: "",
      passValueErrorLabel: "",
      failedLogin: false,
      failedLoginLabel: "",
    };
  },
  methods: {
    formValidation() {
      let valid = true;
      if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.emailValue)) {
        this.emailValueErrorLabel = "Invalid email";
        valid = false;
      } else {
        this.emailValueErrorLabel = "";
      }
      if (!/^[\d\w\S]{8,}$/g.test(this.passValue)) {
        this.passValueErrorLabel = "Invalid password";
        valid = false;
      } else {
        this.passValueErrorLabel = "";
      }
      return valid;
    },
    async submitForm() {
      if (this.formValidation())
        try {
          const logRes = await axios.post("/token", {
            email: this.emailValue,
            password: this.passValue,
          });
          this.$store.dispatch("login", logRes.data);
          this.$router.push("/lobbies");
        } catch (err) {
          if (err.response.data == "Unauthorized") {
            this.failedLogin = true;
            this.failedLoginLabel = "Login failed. Wrong email or password";
          }
        }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>