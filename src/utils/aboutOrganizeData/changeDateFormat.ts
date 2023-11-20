// 수정 필요
export const changeDateFormat = (originDate: string) => {
  const date = new Date(originDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  return `${year}.${month}.${day} (${dayOfWeek})`;
};
