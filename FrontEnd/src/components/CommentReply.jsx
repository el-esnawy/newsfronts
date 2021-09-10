import React from "react";
import { Form, Button } from "semantic-ui-react";

const CommentReply = ({ rows }) => {
  return (
    <Form>
      <Form.TextArea rows={rows} />
      <Button
        content='Post a comment'
        labelPosition='left'
        icon='edit'
        primary
      />
    </Form>
  );
};

export default CommentReply;
