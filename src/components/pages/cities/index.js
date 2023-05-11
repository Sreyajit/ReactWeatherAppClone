import { PlusCircleOutlined } from "@ant-design/icons";
import { CitiesStyledWrapper } from "./style";
import { DialogBox } from "../../common/modal";
import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Card, List } from "antd";
import VirtualList from "rc-virtual-list";
import { selectedCitiesArray, selectedCity } from "../../common/recoil";
export const SelectedCitiesList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const [selected , SetSelected] = useRecoilState(selectedCity);
	const handleOnClick = (item) => {
		SetSelected(item);
	};
	const selectedCities = useRecoilValue(selectedCitiesArray);
	return (
		<CitiesStyledWrapper>
			<div className="heading">
				Cities
				<PlusCircleOutlined className="add" onClick={showModal} />
				<DialogBox propsObject={{ isModalOpen, setIsModalOpen }} />
			</div>
			<List itemLayout="vertical">
				{selectedCities.length !== 0 ? (
					<VirtualList
						data={selectedCities}
						height={`${79}vh`}
						itemHeight={200}
						itemKey="SelectedCityList">
						{(item) => (
							<List.Item key={item.id}>
								<Card
									bordered={false}
									size="small"
									bodyStyle={{
										border: "1px solid black",
										height: 80,
										padding: `${0}px ${0}px ${0}px ${5}px`,
										backgroundColor: `${selected === item?"lightgrey":"transparent"}`,
									}}
									onClick={()=>handleOnClick(item)}>
									<p>{item.name}</p>
									<p>{item.temp}</p>
								</Card>
							</List.Item>
						)}
					</VirtualList>
				) : (
					<div
						style={{
							color: "black",
							textAlign: "left",
							padding: `${0}px ${0}px ${0}px ${5}px`,
						}}>
						You have not selected any city.
					</div>
				)}
			</List>
		</CitiesStyledWrapper>
	);
};
