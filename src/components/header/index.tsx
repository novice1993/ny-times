import styled from "styled-components";
import FilterBtn from "./filterBtn";
import { headerSearchIcon, headerCalendarIcon } from "../../constants/constatns";

const Header = (props: HeaderProps) => {
  const { headline, date, nation } = props;

  return (
    <Container>
      <FilterBtn iconImg={headerSearchIcon} buttonText={headline} />
      <FilterBtn iconImg={headerCalendarIcon} buttonText={date} />
      <FilterBtn buttonText={nation} />
    </Container>
  );
};

export default Header;

interface HeaderProps {
  headline: string;
  date: string;
  nation: string;
}

const Container = styled.header`
  position: fixed;
  top: 0;
  /* width: 375px; */
  width: 100%;
  max-width: 560px;
  max-height: 60px;
  padding: 13px 0px 13px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  /* gap: 7px; */

  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #c4c4c4;
`;
