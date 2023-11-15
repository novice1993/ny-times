import styled from "styled-components";
import Header from "./components/header";
import ArticleList from "./components/articleList";
import Footer from "./components/footer";
import FilterModal from "./components/filterModal";

function App() {
  return (
    <Container>
      <Header />
      <ArticleList />
      <Footer />
      <FilterModal />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 375px;
  max-width: 560px;
  height: 100vh;
`;
