import { changeReporterFormat } from "./changeReporterFormat";
import { changeDateFormat } from "./changeDateFormat";
import { getNationInfo } from "./getNationInfo";

export const transformRawData = (originData: any) => {
  const articleInfo = originData.map((article: any) => {
    const information = {
      headline: article.headline.main,
      newspaper:
        article.source !== undefined ? article.source.replace("International", "") : "Unknown",
      reporter: changeReporterFormat(article.byline.original),
      date: changeDateFormat(article.pub_date),
      url: article.web_url,
      nation: getNationInfo(article),
    };
    return information;
  });

  return articleInfo;
};
