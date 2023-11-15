import styled from "styled-components";
import FilterBtn from "./filterBtn";
import {
  headerSearchIcon,
  headerCalendarIcon,
  headerButtonText01,
  headerButtonText02,
  headerButtonText03,
} from "../../constants/constatns";

const Header = () => {
  return (
    <Container>
      <FilterBtn iconImg={headerSearchIcon} buttonText={headerButtonText01} />
      <FilterBtn iconImg={headerCalendarIcon} buttonText={headerButtonText02} />
      <FilterBtn buttonText={headerButtonText03} />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 375px;
  height: 60px;
  padding: 13px 0px 13px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;

  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #c4c4c4;
`;
