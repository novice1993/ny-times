import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ArticleList from "../components/articleList";

const ScrapScreenPage = () => {
  return (
    <PageLayout>
      <Header />
      <ArticleList />
    </PageLayout>
  );
};

export default ScrapScreenPage;
