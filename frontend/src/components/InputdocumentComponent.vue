<template>
	<div>
		<span>{{ fields.label }}</span>
		<q-input
			type="file"
			outlined
			:accept="fields.validation.acceptType === 'image' ? 'image/png, image/jpeg' : 'application/pdf'"
			:rules="fields.optional ? [ val => val && val.length > 0 || 'Please add a file'] : []"
			input-class="tall-input"
			@update:model-value="val => { pStore.taskData[props.index] = val }"
		/>
	</div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
});
import { taskStore } from 'src/stores/taskStore.js';

const pStore = taskStore();

const fields = computed(() => pStore.item?.data[0].fields[props.index]);
</script>
