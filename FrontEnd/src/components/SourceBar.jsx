import React, { useState } from "react";
import styled from "styled-components";

import useBreakPoint from "../hooks/useBreakPoint";

import { Accordion, Icon } from "semantic-ui-react";
import SourceSection from "./SourceSection";

const StyledAccordion = styled(Accordion)`
  background-color: #89b5ca;
`;

const StyledAccordionTitle = styled(Accordion.Title)`
  color: #ffffff !important;
  font-size: 1.2rem !important;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
`;

const SourceBar = () => {
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
            <Icon name='dropdown' />
            Sources
          </StyledAccordionTitle>
          <Accordion.Content active={expand}>
            <SourceSection />
          </Accordion.Content>
        </StyledAccordion>
      ) : (
        <SourceSection />
      )}
    </React.Fragment>
  );
};

export default SourceBar;
