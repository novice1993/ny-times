export const changeDateFormat = (originDate: string) => {
  const date = new Date(originDate);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getUTCDay()];

  return `${year}.${month}.${day} (${dayOfWeek})`;
};
