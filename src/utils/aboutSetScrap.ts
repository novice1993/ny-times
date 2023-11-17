import { scrapListKeyInLocalStorage } from "../constants/constatns";
import { ArticleProps } from "../models/articleProps";

// add scrap
export const handleAddScrap = (props: ArticleProps, setScrap: (boolean: boolean) => void) => {
  const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);

  const articleInfo = [
    {
      headline: props.headline,
      newspaper: props.newspaper,
      reporter: props.reporter,
      date: props.date,
      articleUrl: props.url,
    },
  ];

  if (scrapArticles === null) {
    storeInLocalStorage(articleInfo);
  } else {
    const scarpList = JSON.parse(scrapArticles);
    const newScrapList = [...scarpList, ...articleInfo];
    storeInLocalStorage(newScrapList);
  }
  setScrap(true);
};

// delete scrap
export const handleDeleteScrap = (
  deleteArticleHeadline: string,
  setScrap: (boolean: boolean) => void
) => {
  const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);

  if (scrapArticles !== null) {
    const scrapList = JSON.parse(scrapArticles);
    const newScrapList = scrapList.filter((article: ArticleProps) => {
      if (article.headline !== deleteArticleHeadline) {
        return article;
      }
    });

    storeInLocalStorage(newScrapList);
    setScrap(false);
  }
};

// store scrapList in LocalStorage
export const storeInLocalStorage = (data: any) => {
  const scrapData = JSON.stringify(data);
  localStorage.setItem(scrapListKeyInLocalStorage, scrapData);
};
