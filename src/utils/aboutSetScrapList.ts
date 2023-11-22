import { toast } from "react-toastify";
import { addOringScrapList, deleteOriginScrapList } from "../reducers/scrapList-Reducer";
import { toastStyle, addScrapMessage, deleteScrapMessage } from "../constants/etcConstatns";
import { ArticleProps } from "../models/articleProps";

// add scrapList function
export const handleAddScrap = (props: ArticleProps, dispatch: (func: any) => void) => {
  dispatch(addOringScrapList(props));
  toast.success(addScrapMessage, toastStyle as any);
};

// delete scrapList function
export const handleDeleteScrap = (deleteArticleHeadline: string, dispatch: (func: any) => void) => {
  dispatch(deleteOriginScrapList(deleteArticleHeadline));
  toast.info(deleteScrapMessage, toastStyle as any);
};
