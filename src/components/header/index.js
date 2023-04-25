import Button from "../common/button";
import { DialogBox } from "../common/modal";
import { HeaderStyledWrapper } from "./style";
import { useState } from "react";
const Header = () => {
	const buttonName = "Add New City";
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	return (
		<HeaderStyledWrapper>
			<div className="logo">My Favourite cities</div>
			<Button name={buttonName} onClick={showModal} />
			<DialogBox propsObject={{isModalOpen, setIsModalOpen}} />
		</HeaderStyledWrapper>
	);
};
export default Header;
