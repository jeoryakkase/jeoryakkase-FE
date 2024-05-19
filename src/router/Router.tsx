import Layout from "@/components/Layout";
import { routerpaths } from "@/utils/pathName";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <section>잘못된 접근입니다</section>,
		children: [
			{ index: true, element: <>OnBoarding</> },
			{ path: routerpaths.HOME, element: <>Home</> },
		],
	},
]);

export default router;
