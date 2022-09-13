<template>
  <section class="hero is-primary is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form @submit.prevent="submitForm" @keyup.enter.prevent="submitForm" class="box">
              <WTextInput
                type="username"
                label="username"
                placeholder="username"
                icon-class="fas fa-user"
                :error-label="usernameErrorLabel"
                :invalid="usernameErrorLabel != ''"
                v-model.trim="usernameValue"
              />
              <WTextInput
                type="email"
                label="email"
                placeholder="example@email.com"
                icon-class="fas fa-at"
                :error-label="emailErrorLabel"
                :invalid="emailErrorLabel != ''"
                v-model.trim="emailValue"
              />
              <WTextInput
                type="password"
                label="password"
                placeholder="********"
                icon-class="fas fa-key"
                :error-label="passErrorLabel"
                :invalid="passErrorLabel != ''"
                v-model.trim="passValue"
              />
              <WTextInput
                type="password"
                label="confirm password"
                placeholder="********"
                icon-class="fas fa-key"
                :error-label="passConfirmErrorLabel"
                :invalid="passConfirmErrorLabel != ''"
                v-model.trim="passConfirmValue"
              />
              <button
                type="submit"
                class="button is-success"
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
import WTextInput from "@/components/Core/WTextInput.vue";
import axios from "axios";
export default {
  name: "RegisterView",
  components: { WTextInput },
  data() {
    return {
      usernameValue: "",
      emailValue: "",
      passValue: "",
      passConfirmValue: "",
      usernameErrorLabel: "",
      emailErrorLabel: "",
      passErrorLabel: "",
      passConfirmErrorLabel: "",
    };
  },
  methods: {
    formValidation() {
      let valid = true;
      if (!/^[^\W\d][\d\w]{2,16}$/g.test(this.usernameValue)) {
        this.usernameErrorLabel = "Use letters and digits 2 to 16 length";
        valid = false;
      } else {
        this.usernameErrorLabel = "";
      }
      if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.emailValue)) {
        this.emailErrorLabel = "Please enter a valid email address";
        valid = false;
      } else {
        this.emailErrorLabel = "";
      }
      if (!/^[\d\w\S]{8,}$/g.test(this.passValue)) {
        this.passErrorLabel = "Wrong pass pattern. 8 char length minimum";
        valid = false;
      } else {
        this.passErrorLabel = "";
      }
      if (
        this.passValue != this.passConfirmValue ||
        this.passConfirmValue.length == 0
      ) {
        this.passConfirmErrorLabel = "Passwords doesn't match";
        valid = false;
      } else {
        this.passConfirmErrorLabel = "";
      }
      return valid;
    },
    async submitForm() {
      if (this.formValidation())
        try {
          const regRes = await axios.post("/users", {
            email: this.emailValue,
            name: this.usernameValue,
            password: this.passValue,
          });
          if (regRes.status == 200)
            try {
              const logRes = await axios.post("/token", {
                email: this.emailValue,
                password: this.passValue,
              });
							this.$store.dispatch("login", logRes.data.token)
              this.$router.push("/lobbies");
            } catch (e) {
              console.error("Login attempt failed.");
            }
        } catch (err) {
          if (err.response.data.msg == "Validation error") {
            this.emailIsInvalid = true;
            this.emailErrorLabel = "Registration failed. Wrong email";
          }
        }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>