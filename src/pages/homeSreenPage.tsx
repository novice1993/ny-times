import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import ArticleList from "../components/articleList";
// import FilterModal from "../components/filterModal";

const HomeSreenPage = () => {
  return (
    <PageLayout>
      <Header />
      <ArticleList />
    </PageLayout>
  );
};

export default HomeSreenPage;
