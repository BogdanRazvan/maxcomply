const routes = [
	{
		path: '/',
		redirect: {
			path: '/1',
		},
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{
				path: '/:id',
				name: 'SingleComponent',
				component: () => import('pages/SingleComponentPage.vue'),
			}
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue'),
	}
];

export default routes;
