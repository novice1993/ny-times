import styled from "styled-components";
import Header from "./components/header"; // 임시추가
import Footer from "./components/footer"; // 임시추가

function App() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 375px;
  max-width: 560px;
  height: 812px;
`;
