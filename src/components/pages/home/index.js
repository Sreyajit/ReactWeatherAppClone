import { HomeStyledWrapper } from "./style";
import { List, Card, message } from "antd";
import { StarFilled } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { favoriteCitiesArray } from "../../common/recoil";
export const Home = () => {
	const [favoriteCities, setFavoriteCities] =
		useRecoilState(favoriteCitiesArray);
	const cityRemover = (item) => {
		message.success(`City removed from the favorite list`);
		setFavoriteCities(() => {
			return favoriteCities
				.filter((city) => city.name !== item.name)
				.sort((a, b) => (a.name > b.name ? 1 : -1));
		});
	};
	return (
		<HomeStyledWrapper>
			<List
				style={{
					width: `${100}%`,
					height: `${100}%`,
					paddingTop: `${10}px`,
				}}
				grid={{
					gutter: 16,
					xs: 1,
					sm: 2,
					md: 3,
					lg: 4,
					xl: 5,
					xxl: 6,
				}}
				locale={{
					emptyText: (
						<div style={{ color: "black", textAlign: "left" }}>
							You have not selected any city as a favorite yet.
						</div>
					),
				}}
				dataSource={favoriteCities}
				renderItem={(item) => (
					<List.Item>
						<Card
							style={{
								boxShadow: `${0}px ${0}px ${4}px ${4}px #888888`,
								height: `${80}%`,
							}}
							size={"small"}
							bordered={true}
							title={item.name}
							extra={
								<StarFilled
									style={{ fontSize: "25px", color: "#F1AE1F" }}
									onClick={() => cityRemover(item)}
								/>
							}
							bodyStyle={{
								height: `${100}%`,
								width: `${100}%`,
							}}>
							<p style={{ color: "green" }}>{item.desc}</p>
							<p>
								<span style={{ fontWeight: "bold" }}>Temperature:</span>
								{item.temp}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>Humidity:</span>
								{item.humidity}
							</p>
						</Card>
					</List.Item>
				)}
			/>
		</HomeStyledWrapper>
	);
};
