<template>
	<div v-if="pStore.collection">
		<q-input
			debounce="1000"
			outlined
			placeholder=""
			class="q-mx-sm"
			:model-value="search"
			@update:model-value="(value) => emit('update:search', value)"
		>
			<template #append>
				<q-icon name="search" />
			</template>
		</q-input>
		<essential-link
			v-for="link in filteredCollection"
			:key="link.id"
			v-bind="link"
		/>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import EssentialLink from 'src/components/EssentialLink.vue';
import { taskStore } from 'src/stores/taskStore.js';

const pStore = taskStore();

const props = defineProps({
	search: {
		type: String,
		required: true,
		default: '',
	},
});

const emit = defineEmits(['update:search']);
pStore.getCollection('http://localhost:3000/tasks/');

const filteredCollection = computed(() => {
	return !props.search ?
		pStore?.collection?.data :
		pStore?.collection?.data?.filter(item => item.name.toLowerCase().includes(props.search.toLowerCase()));
});
</script>
