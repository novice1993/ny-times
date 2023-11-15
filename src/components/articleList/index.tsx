import styled from "styled-components";
import Article from "./article";
import { dummyArticle } from "../../constants/constatns"; // 임시 데이터
import { ArticleProps } from "../../models/articleProps"; // 임시 데이터

const ArticleList = () => {
  return (
    <Container>
      {dummyArticle.map((article: ArticleProps) => {
        const title = article.title;
        const scrap = article.scrap;
        const newspaper = article.newspaper;
        const reporter = article.reporter;
        const date = article.date;

        return (
          <Article
            key={title}
            title={title}
            scrap={scrap}
            newspaper={newspaper}
            reporter={reporter}
            date={date}
          />
        );
      })}
    </Container>
  );
};

export default ArticleList;

const Container = styled.main`
  margin-top: 60px;
  padding: 20px;
  padding-bottom: 105px;
  width: 100%;
  background-color: #f0f1f4;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
