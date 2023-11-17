import { ArticleProps } from "./articleProps";

export interface GlobalStateProps {
  footerBtnState: string; // footer 컴포넌트 버튼 관련 state ('홈' or '스크랩')
  isFilterModal: boolean; // filterModal 창 on/off 관련 state
  scrapArticles: ArticleProps[]; // scrap 설정한 article List
}
