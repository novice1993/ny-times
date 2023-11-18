import { setScrapArticles } from "../reducers/client/scrapedArticles-Reducer";
import { scrapListKeyInLocalStorage } from "../constants/constatns";
import { ArticleProps } from "../models/articleProps";

// add scrap
export const handleAddScrap = (
  props: ArticleProps,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
  const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);

  const articleInfo = [
    {
      headline: props.headline,
      newspaper: props.newspaper,
      reporter: props.reporter,
      date: props.date,
      url: props.url,
    },
  ];

  if (scrapArticles === null) {
    storeInLocalStorage(articleInfo);
    dispatch(setScrapArticles(articleInfo));
  } else {
    const scrapList = JSON.parse(scrapArticles);
    const newScrapList = [...scrapList, ...articleInfo];
    storeInLocalStorage(newScrapList);
    dispatch(setScrapArticles(newScrapList));
  }
  setScrap(true);
};

// delete scrap
export const handleDeleteScrap = (
  deleteArticleHeadline: string,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
  const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);

  if (scrapArticles !== null) {
    const scrapList = JSON.parse(scrapArticles);
    const newScrapList = scrapList.filter((article: ArticleProps) => {
      if (article.headline !== deleteArticleHeadline) {
        return article;
      }
    });

    if (newScrapList.length === 0) {
      localStorage.removeItem(scrapListKeyInLocalStorage);
      dispatch(setScrapArticles([]));
    } else {
      storeInLocalStorage(newScrapList);
      dispatch(setScrapArticles(newScrapList));
    }

    setScrap(false);
  }
};

// store scrapList in LocalStorage
export const storeInLocalStorage = (data: any) => {
  const scrapData = JSON.stringify(data);
  localStorage.setItem(scrapListKeyInLocalStorage, scrapData);
};
