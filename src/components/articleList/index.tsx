import { useSelector, useDispatch } from "react-redux";
import {
  plusArticlePageNum,
  plusArticleData,
} from "../../reducers/server/articleDataFromServer-Reducer";

import { GlobalStateProps } from "../../models/globalStateProps";
import { ArticleProps } from "../../models/articleProps";
import { ListLayout } from "../../layout/layout";
import Article from "../article";

// make article data fetching function
import axios from "axios";
import { API_ENDPOINT } from "../../constants/apiConstant";
import { transformRawData } from "../../utils/transformRawData";
import { useEffect } from "react";

// infinite Scroll
import { useInView } from "react-intersection-observer";

const ArticleList = () => {
  const dispatch = useDispatch();
  const [targetRef, inView] = useInView();
  const articleDataFromServer = useSelector(
    (state: GlobalStateProps) => state.articleDataFromServer
  );
  const articleList = articleDataFromServer.articleData;
  const articlePageNum = articleDataFromServer.pageNum;

  const getArticleDataFromServer = async (page: number) => {
    try {
      const res = await axios.get(`${API_ENDPOINT}&page=${page}`);
      const rawData = res.data.response.docs;
      const transformData = transformRawData(rawData);
      dispatch(plusArticleData(transformData));
    } catch (error) {
      console.log(error);
    }
  };

  // update articleList
  useEffect(() => {
    getArticleDataFromServer(articlePageNum);
  }, [articlePageNum]);

  useEffect(() => {
    if (inView) {
      dispatch(plusArticlePageNum());
    }
  }, [inView]);

  // 마운트가 된다 -> 페이지 데이터를 넘긴다 -> 서버에서 데이터를 받아온다 -> 전역 상태로 설정한다 -> 상태 변경을 감지하고 리렌더링 된다.

  return (
    <ListLayout>
      {articleList.map((article: ArticleProps) => {
        const { headline, newspaper, reporter, date, url } = article;

        return (
          <Article
            key={headline}
            headline={headline}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
            url={url}
          />
        );
      })}
      <div className="observerTarget" ref={targetRef} />
    </ListLayout>
  );
};

export default ArticleList;
