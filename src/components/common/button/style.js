import styled from "styled-components";

export const ButtonStyledWrapper = styled.div`
	 {
		display: flex;
		width: 150px;
		height: 50px;
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.backgroundColor || "#7A30D9"};
		color: ${(props) =>
			props.backgroundColor === "#F1AE1F" ? "#7A30D9" : "white"};
		cursor: pointer;
		font-size: 20px;
		font-family: "Helvetica Neue", Helvetica, sans-serif;
		font-weight: 500;
	}
`;
