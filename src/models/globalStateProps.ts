import { HeaderFilterProps } from "./headerFilterProps";
import { FilterStateProps } from "./flterProps";
import { ScrapListProps } from "./scrapListProps";

export interface GlobalStateProps {
  isFilterModal: boolean; // filterModal 창 on/off 관련 state
  scrapList: ScrapListProps; // scrapList 관련 state
  headerFilterState: HeaderFilterProps; // header filter text 관련 state
  homeScreenFilterState: FilterStateProps; // 메인 화면 article 필터링 관련 state
  scrapScreenFilterState: FilterStateProps; // 스크랩 화면 article 필터링 관련 state
}
