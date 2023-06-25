<!-- eslint-disable vue/no-duplicate-attr-inheritance -->
<template>
	<div>
		<span>{{ fields.label }}</span>
		<q-input
			v-bind="$attrs"
			type="file"
			outlined
			:model-value="pStore.taskData[props.index]"
			:accept="fields.validation.acceptType === 'image' ? 'image/png, image/jpeg' : 'application/pdf'"
			:rules="!fields.optional ? [noFileRule] : []"
			input-class="tall-input"
			@update:model-value="val => { pStore.taskData[props.index] = val }"
		/>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { noFileRule } from 'src/rules';
import { taskStore } from 'src/stores/taskStore.js';

const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
});

const pStore = taskStore();

const fields = computed(() => pStore.item?.data[0].fields[props.index]);
</script>
