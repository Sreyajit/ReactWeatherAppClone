import Header from "../../header";
import Sidebar from "../../sidebar";
import { SidebarTabs } from "../../constants";
import { Home } from "../../pages/home";
import { SelectedCitiesList } from "../../pages/cities";
import { CityDisplayer } from "../../city_displayer";
export const HomeLayout = () => {
	return (
		<>
			<Home />
			<Sidebar sidebarTabs={SidebarTabs} />
			<Header />
		</>
	);
};
export const CitiesLayout = () => {
	return (
		<>
			<Sidebar sidebarTabs={SidebarTabs} />
			<SelectedCitiesList />
			<CityDisplayer />
		</>
	);
};
