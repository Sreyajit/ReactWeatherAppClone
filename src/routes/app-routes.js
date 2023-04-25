import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/common/layouts";
import { Home } from "../components/pages/home";
import { Cities } from "../components/pages/cities";
import Sidebar from "../components/sidebar";
import { SidebarTabs } from "../components/constants";
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>
				<Route
					path="/cities"
					element={
						<>
							<Sidebar sidebarTabs={SidebarTabs} />
							<Cities />
						</>
					}
				/>
				<Route path="*" element={<div>Page Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
};
