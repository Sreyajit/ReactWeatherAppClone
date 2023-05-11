import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout, CitiesLayout } from "../components/common/layouts";
export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeLayout />} />
				<Route path="/cities" element={<CitiesLayout />} />
				<Route path="*" element={<div>Page Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
};
