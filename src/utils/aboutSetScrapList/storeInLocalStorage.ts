import { scrapListKeyInLocalStorage } from "../../constants/constatns";

export const storeInLocalStorage = (data: any) => {
  const scrapData = JSON.stringify(data);
  localStorage.setItem(scrapListKeyInLocalStorage, scrapData);
};
