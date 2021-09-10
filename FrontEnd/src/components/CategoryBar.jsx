import React, { useState } from "react";
import styled from "styled-components";
import { Accordion, Icon } from "semantic-ui-react";
import useBreakPoint from "../hooks/useBreakPoint";

import CategorySection from "./CategorySection";

const StyledAccordion = styled(Accordion)`
  background-image: linear-gradient(to bottom right, #476072 40%, #548ca8);
`;

const StyledAccordionTitle = styled(Accordion.Title)`
  color: #fff !important;
  font-size: 1.2rem !important;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`;

const CategoryBar = () => {
  const belowBP = useBreakPoint(770);
  const [expand, setExpand] = useState(false);
  return (
    <React.Fragment>
      {belowBP ? (
        <StyledAccordion fluid>
          <StyledAccordionTitle
            active={expand}
            index={0}
            onClick={() => setExpand(!expand)}>
            <Icon name='dropdown' /> Categories
          </StyledAccordionTitle>
          <Accordion.Content active={expand}>
            <CategorySection />
          </Accordion.Content>
        </StyledAccordion>
      ) : (
        <CategorySection />
      )}
    </React.Fragment>
  );
};

export default CategoryBar;
