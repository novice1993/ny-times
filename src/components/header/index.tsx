import styled from "styled-components";
import FilterBtn from "./filterBtn";

import {
  headerSearchIcon,
  headerCalendarIcon,
  headerFilterdSearchIcon,
  headerFilterdCalendarIcon,
} from "../../constants/aboutComponents/aboutHeader";

import {
  headerButtonText01 as defaultHeadline,
  headerButtonText02 as defaultDate,
  headerButtonText03 as defaultNation,
} from "../../constants/aboutComponents/aboutHeader";

const Header = (props: HeaderProps) => {
  const { headline, date, nation } = props;

  const headerIon = headline !== defaultHeadline ? headerFilterdSearchIcon : headerSearchIcon;
  const calendarIcon = date !== defaultDate ? headerFilterdCalendarIcon : headerCalendarIcon;

  return (
    <Container>
      <FilterBtn iconImg={headerIon} buttonText={headline} defalutValue={defaultHeadline} />
      <FilterBtn iconImg={calendarIcon} buttonText={date} defalutValue={defaultDate} />
      <FilterBtn buttonText={nation} defalutValue={defaultNation} />
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
  width: 100%;
  max-width: 560px;
  max-height: 60px;
  padding: 13px 0px 13px 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;

  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #c4c4c4;
`;
