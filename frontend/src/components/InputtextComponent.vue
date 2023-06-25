<!-- eslint-disable vue/no-duplicate-attr-inheritance -->
<template>
	<div>
		<span>{{ fields.label }}</span>
		<q-input
			v-bind="$attrs"
			v-model="pStore.taskData[props.index]"
			outlined
			input-class="tall-input"
			:rules="[emptyRule, validationRule(pStore.taskData[props.index], fields.validation)]"
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
import { emptyRule, validationRule } from 'src/rules';

const pStore = taskStore();
const fields = computed(() => pStore.item?.data[0].fields[props.index]);
</script>
