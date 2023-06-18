<template>
	<div>
		<p>
			{{ fields.content }}
		</p>
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

const pStore = taskStore();

const fields = computed(() => pStore.item?.data[0].fields[props.index]);
</script>
