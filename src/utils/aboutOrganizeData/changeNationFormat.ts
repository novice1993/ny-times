// change nation name Korean to English
export const changeNationFormat = (originForm: string[]) => {
  const changedNationName = originForm.map((nation) => {
    switch (nation) {
      case "대한민국":
        return "South Korea";
      case "중국":
        return "China";
      case "일본":
        return "Japan";
      case "미국":
        return "United States";
      case "북한":
        return "North Korea";
      case "러시아":
        return "Russia";
      case "프랑스":
        return "France";
      case "영국":
        return "Great Britain";
    }
  });

  return changedNationName;
};
