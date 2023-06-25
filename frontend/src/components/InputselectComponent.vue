<!-- eslint-disable vue/no-duplicate-attr-inheritance -->
<template>
	<div>
		<span>{{ fields.label }}</span>
		<q-select
			v-bind="$attrs"
			v-model="pStore.taskData[props.index]"
			:options="fields.options"
			outlined
			:rules="[emptySelectRule]"
		/>
	</div>
</template>

<script setup>
const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
});
import { computed } from 'vue';
import { taskStore } from 'src/stores/taskStore.js';
import { emptySelectRule } from 'src/rules';
const pStore = taskStore();

const fields = computed(() => pStore.item?.data[0].fields[props.index]);
</script>
