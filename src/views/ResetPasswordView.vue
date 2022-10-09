<template>
	<section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-5-widescreen">
						<form class="box" @submit.prevent="submitForm">
							<WTextInput
								v-model.trim="password"
								type="password"
								label="New password"
								placeholder="********"
								icon-class="fas fa-key"
								:error-label="passwordErrorLabel"
								:invalid="passwordErrorLabel != ''"
							/>
							<WTextInput
								v-model.trim="passwordConfirm"
								type="password"
								label="Confirm new password"
								placeholder="********"
								icon-class="fas fa-key"
								:error-label="passwordConfirmErrorLabel"
								:invalid="passwordConfirmErrorLabel != ''"
							/>
							<label
								class="help is-danger"
								:class="{ 'is-hidden': !failure }"
								>{{ failureMessage }}</label
							>
							<button type="submit" class="button is-success">
								Change password
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
import validator from "@/lib/validator.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");
import throttle from "lodash/throttle";

export default {
	name: "ResetPassword",
	components: { WTextInput },
	data() {
		return {
			password: "",
			passwordConfirm: "",
			passwordErrorLabel: "",
			passwordConfirmErrorLabel: "",
		};
	},
	computed: {
		...mapGetters(["failure", "failureMessage"]),
	},
	methods: {
		...mapActions(["login", "update"]),
		formValidation() {
			this.passwordErrorLabel = !validator.password(this.password)
				? "Wrong password pattern. 8 chars length minimum"
				: "";
			this.passwordConfirmErrorLabel =
				this.password != this.passwordConfirm ? "Passwords doesn't match" : "";
			return (
				this.passwordErrorLabel.length +
					this.passwordConfirmErrorLabel.length ==
				0
			);
		},
		submitForm: throttle(
			async function () {
				if (this.formValidation()) {
					await this.update({ password: this.password });
					if (!this.failure)
						// TODO: Show success notification 'Success password reset'
						this.$router.push("/login");
				}
			},
			1000,
			{ trailing: false }
		),
	},
};
</script>
