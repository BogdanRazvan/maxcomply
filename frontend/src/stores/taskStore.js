import { defineStore } from 'pinia';

export const taskStore = defineStore('task-store', {
	state: () => ({
		taskData: [],
	}),
});