import { HeaderWrapper, MainImage } from "./styles";
import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = ({ onShowCard }) => {
  return (
    <>
      <HeaderWrapper>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCard}/>
      </HeaderWrapper>
      <MainImage>
        <img alt="A table full of food" src={mealsImage}/>
      </MainImage>
    </>
  );
};

export default Header;
