import { setScrapArticles } from "../../reducers/client/scrapedArticles-Reducer";
import { storeInLocalStorage } from "./storeInLocalStorage";
import { scrapListKeyInLocalStorage } from "../../constants/constatns";
import { ArticleProps } from "../../models/articleProps";
import { toast } from "react-toastify";
import { deleteScrapMessage, toastStyle } from "../../constants/constatns";

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
