import React, { Suspense } from "react";
import { useFetchData } from "./hooks/useFetchData";
import styled from "styled-components";
import { useRenderItemsList } from "./hooks/useRenderItemsList";

const Container = styled("div")`
  padding: 20px;
`;

function App() {
  const { instractions } = useFetchData();
  const { components } = useRenderItemsList(instractions);

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>{components}</Suspense>
    </Container>
  );
}

export default App;
