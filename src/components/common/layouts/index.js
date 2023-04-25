import Header from "../../header";
import Sidebar from "../../sidebar";
import { SidebarTabs} from "../../constants"

export const Layout = (props) => {
	return (
		<>
			{props.children}
			<Sidebar sidebarTabs={SidebarTabs} />
			<Header/>
		</>
	);
};
