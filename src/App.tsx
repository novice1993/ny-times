import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import ArticleList from "./components/articleList";

function App() {
  return (
    <Container>
      <Header />
      <ArticleList />
      <Footer />
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
