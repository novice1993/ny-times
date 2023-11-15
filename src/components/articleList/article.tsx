import styled from "styled-components";
import { ArticleProps } from "../../models/articleProps";

const Article = (props: ArticleProps) => {
  const title = props.title;
  const scrap = props.scrap;
  const newspaper = props.newspaper;
  const reporter = props.reporter;
  const date = props.date;

  return (
    <Container>
      <div className="firstLine">
        <div className="title">{title}</div>
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

    .title {
      width: 260px;
      flex-shrink: 0;
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.9px;
      text-transform: uppercase;
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
