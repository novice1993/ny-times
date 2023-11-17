import changeReporterFormat from "./changeReporterFromate";
import changeDateFormat from "./changeDateFormat";

// trasnform raw Data to selected Data
export const transformRawData = (originData: any) => {
  const articleInfo = originData.map((article: any) => {
    const information = {
      headline: article.headline.main,
      newspaper: article.source,
      reporter: changeReporterFormat(article.byline.original),
      date: changeDateFormat(article.pub_date),
      url: article.web_url,
    };
    return information;
  });

  return articleInfo;
};
