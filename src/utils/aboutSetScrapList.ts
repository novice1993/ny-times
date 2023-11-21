import { toast } from "react-toastify";
import { addOringScrapList, deleteOriginScrapList } from "../reducers/scrapList-Reducer";
import { toastStyle, addScrapMessage, deleteScrapMessage } from "../constants/constatns";
import { ArticleProps } from "../models/articleProps";

// add scrapList function
export const handleAddScrap = (
  props: ArticleProps,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
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

  setScrap(true);
  dispatch(addOringScrapList(articleInfo));
  toast.success(addScrapMessage, toastStyle as any);
};

// delete scrapList function
export const handleDeleteScrap = (
  deleteArticleHeadline: string,
  setScrap: (boolean: boolean) => void,
  dispatch: (func: any) => void
) => {
  setScrap(false);
  dispatch(deleteOriginScrapList(deleteArticleHeadline));
  toast.info(deleteScrapMessage, toastStyle as any);
};
