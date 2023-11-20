import { getHeadlinFilteringArticle } from "./getHeadlineFilterArticle";
import { getDateFilteringArticle } from "./getDateFilteringArticle";
import { getNationFilteringArticle } from "./getNationFilterArticle";
import { setScrapArticles } from "../../reducers/client/scrapedArticles-Reducer";
import { ArticleProps } from "../../models/articleProps";

export const filteringScrapList = (
  originList: ArticleProps[],
  headlineFilter: string,
  dateFilter: string,
  nationFilter: string[],
  dispatch: (func: any) => void
) => {
  if (headlineFilter !== "") {
    const headlineFiltedList = getHeadlinFilteringArticle(originList, headlineFilter);

    // headline + date
    if (dateFilter !== "") {
      const dateFilterdList = getDateFilteringArticle(headlineFiltedList, dateFilter);

      // headline + date + nation
      if (nationFilter.length !== 0) {
        const nationFilterdList = getNationFilteringArticle(dateFilterdList, nationFilter);
        dispatch(setScrapArticles(nationFilterdList));
      }
    } else {
      // headine + nation
      if (nationFilter.length !== 0) {
        const nationFilterdList = getNationFilteringArticle(headlineFiltedList, nationFilter);
        dispatch(setScrapArticles(nationFilterdList));

        // only headline
      } else {
        dispatch(setScrapArticles(headlineFiltedList));
      }
    }
  } else if (dateFilter !== "") {
    const dateFiltedList = getDateFilteringArticle(originList, dateFilter);

    // date + nation
    if (nationFilter.length !== 0) {
      const nationFilterdList = getNationFilteringArticle(dateFiltedList, nationFilter);
      dispatch(setScrapArticles(nationFilterdList));

      // only date
    } else {
      dispatch(setScrapArticles(dateFiltedList));
    }

    // only nation
  } else if (nationFilter.length !== 0) {
    const nationFilterdList = getNationFilteringArticle(originList, nationFilter);
    dispatch(setScrapArticles(nationFilterdList));
  }
};
