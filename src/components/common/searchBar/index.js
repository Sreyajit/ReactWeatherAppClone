import { Input } from "antd";
import { SearchBarStyledWrapper } from "./style";
export const SearchBar = () => (
    <SearchBarStyledWrapper>
	<Input
		placeholder="search city"
        size="large"
		style={{
            width: 400,
            margin: "10px auto",
		}}
        className="input"
        />
        </SearchBarStyledWrapper>
);
