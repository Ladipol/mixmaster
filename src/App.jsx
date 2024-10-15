import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	About,
	HomeLayout,
	Landing,
	Newsletter,
	Cocktail,
	Error,
	SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
		},
	},
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader(queryClient),
			},
			{
				path: "/newsletter",
				element: <Newsletter />,
				action: newsletterAction,
				errorElement: <SinglePageError />,
			},
			{
				path: "/cocktail/:id",
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader(queryClient),
				element: <Cocktail />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

// const App = () => {
// 	return <RouterProvider router={router} />;
// };
export default App;
