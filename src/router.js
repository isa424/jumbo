import App from "./App";
import JumboStores from "./components/JumboStores";
import VueRouter from "vue-router";

const routes = [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '/',
				component: JumboStores,
			}
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
