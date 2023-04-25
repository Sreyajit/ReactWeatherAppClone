import styled from "styled-components";

export const CitiesStyledWrapper = styled.div`
	 {
		width: 20%;
		height: 98vh;
		display: flex;
		margin: 10px 0px 0px 160px;
		box-sizing: border-box;
		flex-direction: column;
		align-content: stretch;
		box-shadow: 0px 0px 4px 4px #888888;
	}
	.heading {
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding: 5%;
		margin: 0px;
		height: 10%;
		font-size: 30px;
		font-weight: bold;
	}
	.content {
		justify-content: center;
		display: flex;
		padding: 5%;
		margin: 0px 3px 0px 3px;
		height: 100%;
		border-top: 1px solid #888888;
	}
	.add {
		fontsize: 100%;
		color: black;
		cursor: pointer;
	}
`;
