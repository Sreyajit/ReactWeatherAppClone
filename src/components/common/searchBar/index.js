import { useRecoilState } from "recoil";
import { userSearch } from "./../recoil";
import { Input } from "antd";
import { SearchBarStyledWrapper } from "./style";

export const SearchBar = () => {
	const [searchValue, setSearchValue] = useRecoilState(userSearch);
	function searching(e) {
		e.preventDefault();
		setSearchValue(e.target.value.toLocaleLowerCase("en-IN"));
	}
	return (
		<SearchBarStyledWrapper>
			<Input
				placeholder="search city"
				size="large"
				style={{
					width: 400,
					margin: "10px auto",
				}}
				value={searchValue}
				className="input"
				onChange={(e) => {
					searching(e);
				}}
			/>
		</SearchBarStyledWrapper>
	);
};
