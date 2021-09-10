import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const Spinner = () => {
  return (
    <Segment>
      <Dimmer active page>
        <Loader size='massive' active>
          Loading
        </Loader>
      </Dimmer>
    </Segment>
  );
};

export default Spinner;
