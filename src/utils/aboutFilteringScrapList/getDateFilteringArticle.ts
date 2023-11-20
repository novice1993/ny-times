import { ArticleProps } from "../../models/articleProps";

export const getDateFilteringArticle = (scrapList: ArticleProps[], dateFilter: string) => {
  const filteringDate = changeDateForm(dateFilter);

  const filterdList = scrapList.filter((scrap: ArticleProps) => {
    return scrap.date === filteringDate;
  });
  return filterdList;
};

// change date form : yyyy.mm.dd -> yyyy.mm.d (dayOfWeek)
const changeDateForm = (originForm: string) => {
  const parts = originForm.split(".");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
  const formattedDay = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}.${month}.${formattedDay} (${dayOfWeek})`;
};
