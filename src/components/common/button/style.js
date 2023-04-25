import styled from "styled-components";

export const ButtonStyledWrapper = styled.div`
	 {
		display: flex;
		width: 150px;
		height: 50px;
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.backgroundColor || "purple"};
		color: ${(props) =>
			props.backgroundColor === "yellow" ? "purple" : "white"};
		cursor: pointer;
		font-size: 20px;
		font-family: "Helvetica Neue", Helvetica, sans-serif;
		font-weight: 500;
	}
`;
