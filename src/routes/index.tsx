import { PathRoutes } from "@/@types/enums/routes.enum";
import RootLayout from "@/components/ui/rootLayout";
import NotFound from "@/pages/notFound";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: PathRoutes.HOME,
				element: <h1>Home</h1>,
			},
			{
				path: PathRoutes.NOVAS_RECEITAS,
				element: <h1>Novas Receitas</h1>,
			},
			{
				path: PathRoutes.RECEITA,
				element: <h1>Receita</h1>,
			},
			{
				path: PathRoutes.RECEITAS_FAVORITAS,
				element: <h1>Receitas Favoritas</h1>,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export function Routes() {
	return <RouterProvider router={router} />;
}
