import styled from "styled-components";

export const HeaderStyledWrapper = styled.div`
	 {
		position: fixed;
		padding: 10px 20px;
		left: 150px;
		width: calc(100vw - 190px);
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			font-size: 25px;
			font-family: "Helvetica Neue", Helvetica, sans-serif;
			font-weight: 500;
		}
	}
`;
