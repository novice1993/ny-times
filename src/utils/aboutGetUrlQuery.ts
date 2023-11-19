// functions to get URL Query
export const getHeadlineQuery = (headlineFilter: string) => {
  if (headlineFilter === "") {
    return headlineFilter;
  } else {
    return encodeURIComponent(`headline:("${headlineFilter}")`);
  }
};

export const getDateQuery = (dateFilter: string) => {
  if (dateFilter === "") {
    return dateFilter;
  } else {
    const queryForm = dateFilter.replace(/\./g, "");
    return `&begin_date=${queryForm}&end_date=${queryForm}`;
  }
};

export const getNationQuery = (nationFilter: string[]) => {
  if (nationFilter.length === 0) {
    return "";
  } else {
    const changedNationName = nationFilter.map((nation) => {
      switch (nation) {
        case "대한민국":
          return "south korea";
        case "중국":
          return "china";
        case "일본":
          return "japan";
        case "미국":
          return "united states";
        case "북한":
          return "north korea";
        case "러시아":
          return "russia";
        case "프랑스":
          return "france";
        case "영국":
          return "uk";
      }
    });

    const queryForm = changedNationName.map((nation) => `"${nation}"`).join(", ");
    return encodeURIComponent(`glocations:(${queryForm})`);
  }
};
