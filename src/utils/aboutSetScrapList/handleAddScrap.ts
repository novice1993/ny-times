import { setScrapArticles } from "../../reducers/scrapedArticles-Reducer";
import { storeInLocalStorage } from "./storeInLocalStorage";
import { scrapListKeyInLocalStorage } from "../../constants/constatns";
import { ArticleProps } from "../../models/articleProps";
import { toast } from "react-toastify";
import { toastStyle, addScrapMessage } from "../../constants/constatns";

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
