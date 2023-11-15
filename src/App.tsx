import styled from "styled-components";
import NoScrapIndicator from "./components/noScrapIndicator";
import Footer from "./components/footer";

function App() {
  return (
    <Container>
      <NoScrapIndicator />
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
