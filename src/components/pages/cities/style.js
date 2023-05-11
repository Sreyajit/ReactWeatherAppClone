import styled from "styled-components";

export const CitiesStyledWrapper = styled.div`
	 {
		width: 20%;
		height: 88vh;
		display: flex;
		margin: 25px 25px 0px 180px;
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
		border-bottom: 1px solid #888888;
	}
	.add {
		fontsize: 100%;
		color: black;
		cursor: pointer;
	}
`;
