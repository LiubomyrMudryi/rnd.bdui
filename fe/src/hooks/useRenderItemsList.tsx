import { ReactNode, useCallback, useEffect, useState } from "react";
import { IItemInstractions } from "../interfaces/item-instractions";
import styled from "styled-components";
import { useRenderComponent } from "./useRenderComponent";

const StyledItem = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  box-shadow: 14px 9px 73px -16px rgba(0, 0, 0, 0.62);
  border-radius: 12px;
  padding: 15px 10px;
  background: white;
`;

const StyledRow = styled("div")`
  display: flex;
  width: 100%;
`;

const StyledTextContainer = styled("div")`
  margin-left: 10px;
`;

const StyledActions = styled("div")`
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: center;
`;

export const useRenderItemsList = (instractions: IItemInstractions[]) => {
  const [components, setComponents] = useState<ReactNode[]>([]);
  const render = useRenderComponent();

  const renderListItem = useCallback(
    (itemInstructions: IItemInstractions) => {
      const images = itemInstructions.images.map((image) => render(image));
      const texts = itemInstructions.texts.map((text) => render(text));
      const actions = itemInstructions.actions.map((action) => render(action));
      return (
        <StyledItem>
          <StyledRow>
            {images}
            <StyledTextContainer>{texts}</StyledTextContainer>
          </StyledRow>
          <StyledActions>{actions}</StyledActions>
        </StyledItem>
      );
    },
    [render]
  );

  useEffect(() => {
    if (instractions) {
      setComponents(
        instractions.map((instraction) => renderListItem(instraction))
      );
    }
  }, [instractions, renderListItem]);

  return { components };
};
