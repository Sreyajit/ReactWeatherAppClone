import { useEffect } from "react";
import { List } from "antd";
import VirtualList from "rc-virtual-list";
import { Cities } from "./../../constants";
import { PlusCircleOutlined } from "@ant-design/icons";
export const ListOfCities = () => {
	useEffect(() => {
		Cities.sort((a, b) => (a.name > b.name ? 1 : -1));
	}, []);
	return (
		<List>
			<VirtualList
				data={Cities}
				height={(425 * 9) / 16}
				itemHeight={47}
				itemKey={Cities.id}>
				{(Cities) => (
					<List.Item
						key={Cities.id}
						style={{
							border: "1px solid lightgrey",
							borderRadius: "5px",
							marginBottom: "10px",
							padding: "5px",
						}}>
						<List.Item.Meta title={Cities.name} />
						<PlusCircleOutlined
							style={{
								fontsize: "150px",
								color: "black",
								cursor: "pointer",
							}}
						/>
					</List.Item>
				)}
			</VirtualList>
		</List>
	);
};
