import { Card, message } from "antd";
import { selectedCity, favoriteCitiesArray } from "../common/recoil";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { useRecoilValue, useRecoilState } from "recoil";
export const CityDisplayer = () => {
	const City = useRecoilValue(selectedCity);
	const [favoriteCities, setFavoriteCities] =
		useRecoilState(favoriteCitiesArray);
	const cityAdder = () => {
		message.success(`City added in favorite list`);
		setFavoriteCities(() => {
			return [...favoriteCities, City].sort((a, b) =>
				a.name > b.name ? 1 : -1
			);
		});
	};
	const cityRemover = () => {
		message.success(`City removed from the favorite list`);
		setFavoriteCities(() => {
			return favoriteCities
				.filter((city) => city.name !== City.name)
				.sort((a, b) => (a.name > b.name ? 1 : -1));
		});
	};
	return (
		<>
			{City.name && (
				<Card
					style={{
						margin: `${25}px ${10}px ${0}px ${50}px`,
						boxShadow: `${0}px ${0}px ${4}px ${4}px #888888`,
						width: `${60}%`,
					}}
					bordered={true}
					title={City.name}
					extra={
						favoriteCities.some((city) => city.id === City.id) ? (
							<StarFilled
								style={{ fontSize: "25px", color: "#F1AE1F" }}
								onClick={cityRemover}
							/>
						) : (
							<StarOutlined
								style={{ fontSize: "25px" }}
								onClick={cityAdder}
							/>
						)
					}
					bodyStyle={{
						borderTop: "1px solid #888888",
						height: `${100}%`,
						width: `${100}%`,
						textAlign: "center",
						paddingTop: `${25}%`,
					}}>
					<p style={{ color: "green", paddingBottom: "5px" }}>{City.desc}</p>
					<p>
						<span style={{ fontWeight: "bold" }}>Temperature:</span>
						{City.temp}
					</p>
					<p>
						<span style={{ fontWeight: "bold" }}>Humidity:</span>
						{City.humidity}
					</p>
				</Card>
			)}
		</>
	);
};
