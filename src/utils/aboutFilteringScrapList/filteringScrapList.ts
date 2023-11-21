import { setFilterdScrapList } from "../../reducers/scrapList-Reducer";
import { getHeadlinFilteringArticle } from "./getHeadlineFilterArticle";
import { getDateFilteringArticle } from "./getDateFilteringArticle";
import { getNationFilteringArticle } from "./getNationFilterArticle";
import { ArticleProps } from "../../models/articleProps";

export const filteringScrapList = (option: OwnProps) => {
  const { originScrapList, headlineFilter, dateFilter, nationFilter, dispatch } = option;

  let filteredList = [...originScrapList];
  const existHeadline = headlineFilter !== "" ? true : false;
  const existDate = dateFilter !== "" ? true : false;
  const existNation = nationFilter.length !== 0 ? true : false;
  const noFilter = !existHeadline && !existDate && !existNation;

  if (noFilter) {
    dispatch(setFilterdScrapList(filteredList));
    return;
  }

  switch (true) {
    case existHeadline:
      filteredList = getHeadlinFilteringArticle(filteredList, headlineFilter);
      break;
    case existDate:
      filteredList = getDateFilteringArticle(filteredList, dateFilter);
      break;
    case existNation:
      filteredList = getNationFilteringArticle(filteredList, nationFilter);
      break;
  }

  dispatch(setFilterdScrapList(filteredList));
};

interface OwnProps {
  originScrapList: ArticleProps[];
  headlineFilter: string;
  dateFilter: string;
  nationFilter: string[];
  dispatch: (func: any) => void;
}
