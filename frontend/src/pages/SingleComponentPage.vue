<!-- eslint-disable no-unused-vars -->
<template>
	<div>
		<div v-if="pStore?.collection?.data && pStore?.item?.data && !pStore.loading">
			<q-form
				greedy
				class="row q-col-gutter-xl"
				@submit="onSubmit"
			>
				<component
					:is="comp(field.type)"
					v-for="(field, index) in pStore?.item?.data[0].fields"
					:key="field.id"
					:class="`col-xs-${field.size.xs} col-sm-${field.size.sm} col-md-${field.size.md}
		col-lg-${field.size.lg}`"
					:index="index"
				/>
				<div class="fit text-right">
					<q-btn
						label="Submit"
						type="submit"
						color="primary"
					/>
				</div>
			</q-form>
		</div>
		<div
			v-else
			class="flex justify-center self-center"
		>
			<q-spinner-gears
				size="100px"
				color="primary"
				style="height: 100vh"
			/>
		</div>
	</div>
</template>

<script setup>
import { resolveComponent, defineAsyncComponent } from 'vue';
import { taskStore } from 'src/stores/taskStore.js';
import { useRouter, useRoute } from 'vue-router';
// eslint-disable-next-line no-unused-vars
const router = useRouter();
const route = useRoute();
const pStore = taskStore();

pStore.getItem(`http://localhost:3000/tasks/${route.params.id}`);

router.beforeEach((to) => {
	pStore.getItem(`http://localhost:3000/tasks/${to.params.id}`);
});

const capitalize = (text) => resolveComponent(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() + 'Component');
const comp = (text) => defineAsyncComponent(() => import(`../components/${capitalize(text)}.vue`));

const onSubmit = () => {
	pStore.setCollection(`http://localhost:3000/tasks/${route.params.id}`, {
		fields: pStore.taskData.filter((item) => item),
	});
};
</script>
