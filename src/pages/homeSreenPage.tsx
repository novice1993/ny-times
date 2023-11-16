import { PageLayout } from "../layout/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import ArticleList from "../components/articleList";
// import FilterModal from "../components/filterModal";

const HomeSreenPage = () => {
  return (
    <PageLayout>
      <Header />
      <ArticleList />
      <Footer />
    </PageLayout>
  );
};

export default HomeSreenPage;
