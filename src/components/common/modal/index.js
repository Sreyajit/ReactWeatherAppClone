import { Modal } from "antd";
import { ListOfCities } from "../List";
import { SearchBar } from "../searchBar";
export const DialogBox = (props) => {
	const {
		propsObject: { isModalOpen, setIsModalOpen },
	} = props;
	return (
		<Modal
			title="Add City Modal"
			centered
			width={550}
			bodyStyle={{ height: (550 * 9) / 16, }}
			open={isModalOpen}
			onCancel={() => setIsModalOpen(false)}
			footer={null}
			>
			<SearchBar />
			<ListOfCities />
		</Modal>
	);
};
