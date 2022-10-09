<template>
	<div class="field">
		<label class="label is-aligned-left">{{ label }}</label>
		<div class="control has-icons-left">
			<input
				class="input"
				:class="{ 'is-danger': invalid }"
				:type="type"
				:placeholder="placeholder"
				:disabled="disabled"
				:value="modelValue"
				@input="update"
			/>
			<span class="icon is-small is-left">
				<i :class="iconClass"></i>
			</span>
		</div>
		<label class="help is-danger" :class="{ 'is-hidden': !invalid }">{{
			errorLabel
		}}</label>
	</div>
</template>

<script>
export default {
	name: "WTextInput",
	props: {
		modelValue: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
		iconClass: {
			type: String,
			default: "",
		},
		errorLabel: {
			type: String,
			default: "",
		},
		invalid: Boolean,
		disabled: Boolean,
	},
	emits: ["update:modelValue"],
	methods: {
		update(e) {
			this.$emit("update:modelValue", e.target.value);
		},
	},
};
</script>

<style></style>
