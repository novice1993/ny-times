import { ArticleProps } from "./articleProps";
import { ArticlePageProps } from "./articlePageProps";

export interface GlobalStateProps {
  isFilterModal: boolean; // filterModal 창 on/off 관련 state
  scrapArticles: ArticleProps[]; // scrap 설정한 article List
  articleDataFromServer: ArticlePageProps; // 서버에서 받아온 article List
}
