import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setArticlePageNum } from "../../reducers/server/articleDataFromServer-Reducer";
import { GlobalStateProps } from "../../models/globalStateProps";
import FilterBtn from "./filterBtn";
import { headerSearchIcon, headerCalendarIcon } from "../../constants/constatns";

const Header = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const headerFilterState = useSelector((state: GlobalStateProps) => state.headerFilterState);
  const {
    headline: homeScreenHeadline,
    date: homeScreenDate,
    nation: homeScreenNation,
  } = headerFilterState.homeScreen;

  const {
    headline: scrapScreenHeadline,
    date: scrapScreenDate,
    nation: scrapScreenNation,
  } = headerFilterState.scrapScreen;

  // if change HomeScreenPage Filter, reset PageNum
  useEffect(() => {
    dispatch(setArticlePageNum(0));
  }, [homeScreenHeadline, homeScreenDate, homeScreenNation]);

  return (
    <Container>
      <FilterBtn
        iconImg={headerSearchIcon}
        buttonText={type === "home" ? homeScreenHeadline : scrapScreenHeadline}
      />
      <FilterBtn
        iconImg={headerCalendarIcon}
        buttonText={type === "home" ? homeScreenDate : scrapScreenDate}
      />
      <FilterBtn buttonText={type === "home" ? homeScreenNation : scrapScreenNation} />
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
