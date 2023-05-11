import { List, message } from "antd";
import {
	unselectedCitiesArray,
	selectedCitiesArray,
	citiesRenderer,
} from "../recoil";
import VirtualList from "rc-virtual-list";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRecoilState, useRecoilValue } from "recoil";
export const ListOfCities = () => {
	const [selectedCities, setSelectedCities] =
		useRecoilState(selectedCitiesArray);
	const [unselectedCities, setUnselectedCities] = useRecoilState(
		unselectedCitiesArray
	);
	const renderedCities = useRecoilValue(citiesRenderer);
	const cityAdder = (item) => {
		message.success(`City Added`);
		setUnselectedCities(() => {
			return unselectedCities
				.filter((city) => city.name !== item.name)
				.sort((a, b) => (a.name > b.name ? 1 : -1));
		});
		setSelectedCities(() => {
			return [...selectedCities, item].sort((a, b) =>
				a.name > b.name ? 1 : -1
			);
		});
	};
	return (
		<List>
			<VirtualList
				data={renderedCities}
				height={(425 * 9) / 16}
				itemHeight={47}
				itemKey="renderedCityList">
				{(item) => (
					<List.Item
						key={item.id}
						style={{
							border: "1px solid lightgrey",
							borderRadius: "5px",
							marginBottom: "10px",
							padding: "5px",
						}}>
						<List.Item.Meta title={item.name} />
						<PlusCircleOutlined
							style={{
								fontsize: "150px",
								color: "black",
								cursor: "pointer",
							}}
							onClick={() => cityAdder(item)}
						/>
					</List.Item>
				)}
			</VirtualList>
		</List>
	);
};
