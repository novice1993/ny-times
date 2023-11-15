import styled from "styled-components";
import Header from "./components/header"; // 임시추가

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: fit-content;
  max-width: 560px;
  height: 100%;
`;
