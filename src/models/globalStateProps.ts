import { ArticleProps } from "./articleProps";
import { ArticlePageProps } from "./articlePageProps";
import { HeaderFilterProps } from "./headerFilterProps";
import { FilterStateProps } from "./flterProps";

export interface GlobalStateProps {
  isFilterModal: boolean; // filterModal 창 on/off 관련 state
  scrapArticles: ArticleProps[]; // scrap 설정한 article List
  articleDataFromServer: ArticlePageProps; // 서버에서 받아온 article List
  headerFilterState: HeaderFilterProps; // header filter text 관련 state
  homeScreenFilterState: FilterStateProps; // 메인 화면 article 필터링 관련 state
  scrapScreenFilterState: FilterStateProps; // 스크랩 화면 article 필터링 관련 state
}
