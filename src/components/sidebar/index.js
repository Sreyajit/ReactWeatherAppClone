import React, { useEffect, useState } from "react";
import { SidebarStyledWrapper } from "./style";
import Button from "../common/button";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = (props) => {
	const { sidebarTabs } = props;
	const navigate = useNavigate();
	const location = useLocation();
	const handleClick = (name, location) => {
		navigate(location);
	};
	return (
		<SidebarStyledWrapper>
			{sidebarTabs &&
				sidebarTabs.map((tab) => {
					return (
						<Button
							key={tab.id}
							name={tab.name}
							backgroundColor={
								location.pathname === tab.location ? "yellow" : "purple"
							}
							onClick={() => handleClick(tab.name, tab.location)}
						/>
					);
				})}
		</SidebarStyledWrapper>
	);
};
export default Sidebar;
