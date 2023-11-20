import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleAddScrap } from "../../utils/aboutSetScrapList/handleAddScrap";
import { handleDeleteScrap } from "../../utils/aboutSetScrapList/handleDeleteScrap";

import { ArticleProps } from "../../models/articleProps";
import { scrapListKeyInLocalStorage } from "../../constants/constatns";

import scrap from "../../assets/article-starFill.svg";
import noScrap from "../../assets/article-star.svg";

const Article = (props: ArticleProps) => {
  const { headline, newspaper, reporter, date, url } = props;

  const dispatch = useDispatch();
  const [isScrap, setScrap] = useState(false);

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  const handleClickStarBtn = isScrap
    ? () => handleDeleteScrap(headline, setScrap, dispatch)
    : () => handleAddScrap(props, setScrap, dispatch);

  // already done scrap check
  useEffect(() => {
    const scrapArticles = localStorage.getItem(scrapListKeyInLocalStorage);
    const scrapList = scrapArticles !== null ? JSON.parse(scrapArticles) : [];

    scrapList.forEach((article: ArticleProps) => {
      article.headline === headline && setScrap(true);
    });
  }, []);

  return (
    <Container>
      <div className="firstLine">
        <div className="headline" onClick={() => handleRedirect(url)}>
          {headline}
        </div>
        <img className="scrapBtn" src={isScrap ? scrap : noScrap} onClick={handleClickStarBtn} />
      </div>
      <div className="secondLine">
        <div className="info">
          <span className="newspaper">{newspaper}</span>
          <span className="reporter">{reporter}</span>
        </div>
        <div className="date">{date}</div>
      </div>
    </Container>
  );
};

export default Article;

const Container = styled.section`
  width: 335px;
  height: 104px;
  padding: 10px 20px 10px 20px;

  border-radius: 8px;
  background: #fefefe;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .firstLine {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & a {
      text-decoration: none;
    }

    .headline {
      width: 260px;
      height: 56px;
      flex-shrink: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.9px;
      text-transform: uppercase;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      white-space: normal;
    }

    .scrapBtn {
      padding: 4px;
    }
  }

  .secondLine {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .info {
    display: flex;
    gap: 8px;

    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.65px;

    .reporter {
      width: 100px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      white-space: normal;
    }
  }

  .date {
    color: #6d6d6d;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.65px;
  }
`;
