import { PlusCircleOutlined } from "@ant-design/icons";
import { CitiesStyledWrapper } from "./style";
import { DialogBox } from "../../common/modal";
import { useState } from "react";
export const Cities = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
		console.log(isModalOpen);
	};
	return (
		<CitiesStyledWrapper>
			<div className="heading">
				Cities
				<PlusCircleOutlined className="add" onClick={showModal} />
				<DialogBox propsObject={{ isModalOpen, setIsModalOpen }} />
			</div>
			<div className="content">You have not selected any city</div>
		</CitiesStyledWrapper>
	);
};
