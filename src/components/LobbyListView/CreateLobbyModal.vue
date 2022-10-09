<template>
	<div class="modal" :class="{ 'is-active': isActive }">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Create game lobby</p>
				<button class="delete" aria-label="close" @click="onCancel"></button>
			</header>
			<section class="modal-card-body">
				<div class="field">
					<label class="label">Title</label>
					<div class="control">
						<input
							v-model="lobby.title"
							type="text"
							class="input"
							placeholder="lobby title"
						/>
					</div>
				</div>
				<div class="field">
					<label class="label"
						>Key <i class="has-text-light">(optional)</i></label
					>
					<div class="control">
						<input
							v-model="lobby.key"
							type="text"
							class="input"
							placeholder="leave empty if don't need it"
						/>
					</div>
				</div>
				<div class="field is-horizontal">
					<div class="field-body">
						<div class="field">
							<label class="label">Game field dimention</label>
							<div class="control has-icons-left">
								<div class="select">
									<select v-model.number="lobby.dimention">
										<option value="5">5x5</option>
										<option value="6">6x6</option>
										<option value="7">7x7</option>
										<option value="8">8x8</option>
									</select>
									<div class="icon is-left">
										<i class="fas fa-border-all"></i>
									</div>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label">Dictionary language</label>
							<div class="control has-icons-left">
								<div class="select">
									<select v-model="lobby.language">
										<option value="en_US">English</option>
										<option value="ru_RU">Russian</option>
									</select>
									<div class="icon is-left">
										<i class="fas fa-language"></i>
									</div>
								</div>
							</div>
						</div>
						<div class="fiel">
							<label class="label">Maximum players</label>
							<div class="control has-icons-left">
								<div class="select">
									<select v-model.number="lobby.slots">
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</select>
									<div class="icon is-left">
										<i class="fas fa-border-all"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-success" @click="onConfirm">Confirm</button>
				<button class="button" @click="onCancel">Cancel</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: "CreateLobbyModal",
	props: {
		isActive: Boolean,
	},
	emits: ["confirm", "cancel"],
	data() {
		return {
			lobby: {
				title: "New lobby",
				key: "",
				slots: 2,
				dimention: 5,
				language: "en_US",
			},
		};
	},
	methods: {
		cleanup() {
			this.lobby = {
				title: "New lobby",
				key: "",
				slots: 2,
				dimention: 5,
				language: "en_US",
			};
		},
		onCancel() {
			this.$emit("cancel");
			this.cleanup();
		},
		onConfirm() {
			this.$emit("confirm", this.lobby);
			this.cleanup();
		},
	},
};
</script>

<style lang="scss" scoped></style>
