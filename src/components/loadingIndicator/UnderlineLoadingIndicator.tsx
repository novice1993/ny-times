import styled from "styled-components";
import { SyncLoader } from "react-spinners";

const UnderlineLoadingIndicator = () => {
  return (
    <Container>
      <SyncLoader />
    </Container>
  );
};

export default UnderlineLoadingIndicator;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
