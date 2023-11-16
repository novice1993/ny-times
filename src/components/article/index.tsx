import styled from "styled-components";
import { ArticleProps } from "../../models/articleProps";

import scrap from "../../assets/article-star.svg"; // 임시추가

const Article = (props: ArticleProps) => {
  const headline = props.headline;
  const newspaper = props.newspaper;
  const reporter = props.reporter;
  const date = props.date;
  const articleUrl = props.url;

  const handleRedirect = (url: string) => {
    // 📌 다시 확인 필요
    window.location.href = url;
  };

  return (
    <Container>
      <div className="firstLine">
        <div className="headline" onClick={() => handleRedirect(articleUrl)}>
          {headline}
        </div>
        <img className="scrapBtn" src={scrap} />
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
