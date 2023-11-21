import searchIcon from "../assets/header-searchIcon.svg";
import calendarIcon from "../assets/header-calendarIcon.svg";
import homeOnIcon from "../assets/footer-homeOn.svg";
import homeOffIcon from "../assets/footer-homeOff.svg";
import scrapOnIcon from "../assets/footer-scrapOn.svg";
import scrapOffIcon from "../assets/footer-scrapOff.svg";
import noScrapIcon from "../assets/noScrapIndicator-icon.svg";
import errorIcon from "../assets/errorIndicator-errorIcon.png";

// scrap Article Data Key in LocalStroage
export const scrapListKeyInLocalStorage = "scrapArticles";

// about toast message
export const toastStyle = {
  position: "top-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const addScrapMessage = "기사가 스크랩에 추가되었습니다";
export const deleteScrapMessage = "기사가 스크랩에서 제거되었습니다";

// header 컴포넌트
export const headerSearchIcon: string = searchIcon;
export const headerCalendarIcon: string = calendarIcon;
export const headerButtonText01: string = "전체 헤드라인";
export const headerButtonText02: string = "전체 날짜";
export const headerButtonText03: string = "전체 국가";

//footer 컴포넌트
export const footerHomeOnIcon: string = homeOnIcon;
export const footerHomeOffIcon: string = homeOffIcon;
export const footerScrapOnIcon: string = scrapOnIcon;
export const footerScrapOffIcon: string = scrapOffIcon;
export const footerButtonText01: string = "홈";
export const footerButtonText02: string = "스크랩";

// noScrapIndicator 컴포넌트
export const noScrapIndicatorIcon: string = noScrapIcon;
export const noScrapMessage: string = "저장된 스크랩이 없습니다.";
export const goHomeButtonText: string = "스크랩 하러 가기";

// noResultIndicator 컴포넌트
export const noResultMessage: string = "조건과 일치하는 기사가 없습니다.";
export const openModalButtonText: string = "조건 다시 설정하기";

// errorIndicator 컴포넌트
export const errorMessage = "기사 목록을 불러올 수 없습니다.";
export const refetchButtonText = "기사 목록 다시 불러오기";
export const errorIndicatorIcon = errorIcon;

// filterModal 컴포넌트
export const confirmButtonText: string = "필터 적용하기";

export const headLineFilterTitle: string = "헤드라인";
export const headLineFilterInputText: string = "검색하실 헤드라인을 입력해주세요";

export const dateFilterTitle: string = "날짜";
export const dateFilterInputText: string = "날짜를 입력해주세요";
export const dateFilterIconImg: string = calendarIcon;

export const nationFilterTitle: string = "국가";
export const nations: string[] = [
  "대한민국",
  "중국",
  "일본",
  "미국",
  "북한",
  "러시아",
  "프랑스",
  "영국",
];

// indicator 컴포넌트
export const loadingIndicatorText = "Loading...";

// article dummy data
export const dummyArticle = [
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
  {
    headline: "'한동훈 독직폭행' 정진웅∙∙∙ 검찰, 항소심서도 징역 1년 구형",
    newspaper: "중앙일보",
    reporter: "이정확",
    date: "2021.3.15. (목)",
    url: "",
  },
];
