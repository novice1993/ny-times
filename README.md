# 🧾 The New York Times
> New York Times 기사 검색 및 스크랩이 가능한 모바일 해상도 기반의 웹 사이트입니다.
<br/>

## 🧑🏻‍💻 Install 
> npm install


## 🏃‍♂️ Start
> npm run dev


## ⚒ Stack
- TypeScript
- React
- Redux-Toolkit (with Redux-Persist)
- React-Query
- Styled-Components

> TypeScript와 React 기반으로 제작하였으며 </br>
클라이언트 상태관리는 RTK, 서버 상태관리는 React-Query를 활용하였습니다. </br>
Styled-Components 라이브러리를 활용하여 CSS-in-JS 방식으로 스타일링 하였습니다.


## 📌 Notice 

### New York Times API Limit Problem (https://developer.nytimes.com/faq, Question Number 11)  
> Is there an API call limit?
Yes, there are two rate limits per API: 500 requests per day and 5 requests per minute.
You should sleep 12 seconds between calls to avoid hitting the per minute rate limit. If you need a higher rate limit, please contact us at code@nytimes.com.

> API 제약으로 간혹 429 Error가 발생하는 경우가 존재합니다 (code@nytimes.com 에 연락해보았으나, API limit 완화 관련 답변은 받지 못하였습니다) <br/>
빈번하게 발생하는 문제는 아니지만 혹여라도 발생할 경우 사이트 활용이 제약이 발생할 수 있으므로, 여분의 인증키를 .env 파일에 준비해놓았습니다. <br/>
.env 파일에 총 3개의 key value를 기록해놓았습니다. 만약 429 Error 발생 시 key value를 교체한 후 재실행(npm run dev)하면 문제가 해결됩니다. 
  
