import { ButtonStyledWrapper } from "./style";
const button = (props) => {
	const { name, backgroundColor, onClick } = props;
	return <ButtonStyledWrapper onClick = {onClick} backgroundColor={backgroundColor}>{name}</ButtonStyledWrapper>;
};
export default button;
