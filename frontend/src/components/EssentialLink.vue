<template>
	<q-item
		clickable
		tag="a"
		:to="{path: id.toString()}"
		class="q-my-md"
	>
		<q-item-section>
			<q-item-label>{{ name }}</q-item-label>
			<q-item-label
				caption
				class="sub-heading"
			>
				{{ subHeading }}
			</q-item-label>
		</q-item-section>
		<q-item-section avatar>
			<q-icon
				name="chevron_right"
				size="xl"
			/>
		</q-item-section>
	</q-item>
	<q-separator />
</template>

<script setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
	subHeading: {
		type: String,
		default: '',
	},
	id: {
		type: Number,
		default: 1,
	},
});
</script>
