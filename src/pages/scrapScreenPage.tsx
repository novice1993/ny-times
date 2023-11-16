import { PageLayout } from "../layout/layout";
import NoScrapIndicator from "../components/noScrapIndicator";
import Footer from "../components/footer";

const ScrapScreenPage = () => {
  return (
    <PageLayout>
      <NoScrapIndicator />
      <Footer />
    </PageLayout>
  );
};

export default ScrapScreenPage;
