// trasnform raw Data to selected Data
export const transformRawData = (originData: any) => {
  const articleInfo = originData.map((article: any) => {
    const information = {
      headline: article.headline.main,
      newspaper: article.source.replace("International", ""),
      reporter: changeReporterFormat(article.byline.original),
      date: changeDateFormat(article.pub_date),
      url: article.web_url,
    };
    return information;
  });

  return articleInfo;
};

const changeReporterFormat = (originForm: string) => {
  if (originForm !== null) {
    const removeUnnecessaryText = originForm.substring(3);
    const changeForm = removeUnnecessaryText.split(",");
    const result = changeForm[0];
    return result;
  } else {
    return "Author Unknown";
  }
};

// 수정 필요
const changeDateFormat = (originDate: string) => {
  const date = new Date(originDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}.${month}.${day} (${dayOfWeek})`;
};
