import { setScrapArticles } from "../reducers/scrapedArticles-Reducer";
import { scrapListKeyInLocalStorage } from "../constants/constatns";
import { ArticleProps } from "../models/articleProps";
import { toast } from "react-toastify";
import { toastStyle, addScrapMessage, deleteScrapMessage } from "../constants/constatns";

// add scrapList function
export const handleAddScrap = (
  props: ArticleProps,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
  toast.success(addScrapMessage, toastStyle as any);
  const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);
  const articleInfo = [
    {
      headline: props.headline,
      newspaper: props.newspaper,
      reporter: props.reporter,
      date: props.date,
      url: props.url,
      nation: props.nation,
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

// delete scrapList function
export const handleDeleteScrap = (
  deleteArticleHeadline: string,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
  toast.info(deleteScrapMessage, toastStyle as any);

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

const storeInLocalStorage = (data: any) => {
  const scrapData = JSON.stringify(data);
  localStorage.setItem(scrapListKeyInLocalStorage, scrapData);
};
