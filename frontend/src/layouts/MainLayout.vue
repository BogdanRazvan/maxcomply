<template>
	<q-layout view="hHh lpR fFf">
		<q-header elevated>
			<q-toolbar>
				<q-img
					no-spinner
					alt="Max Comply"
					src="../assets/logo.png"
					style="max-width: 150px"
					fit="scale-down"
				/>
			</q-toolbar>
		</q-header>
		<q-drawer
			v-model="leftDrawerOpen"
			show-if-above
			bordered
			width="750"
			class="q-mx-lg"
		>
			<q-list>
				<q-item-label class="text-h4 q-ml-sm text-bold q-mb-md q-mt-sm">
					Task List
				</q-item-label>
				<essential-link-filtered
					v-model:search="search"
				/>
			</q-list>
		</q-drawer>
		<q-page-container class="q-mx-xl q-mt-sm">
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLinkFiltered from 'src/components/EssentialLinkFiltered.vue';

const leftDrawerOpen = ref(false);
const search = ref('');
</script>

<style lang="scss" scoped>
:deep(.q-drawer__content) {
	width: auto !important;
}
</style>