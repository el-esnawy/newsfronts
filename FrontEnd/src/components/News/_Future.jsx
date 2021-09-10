import React, { useState } from "react";
import CommentReply from "../CommentReply";
import CommentSection from "../CommentSection";
import {
  Grid,
  Comment,
  Header,
  Button,
  Label,
  Icon,
  Accordion,
} from "semantic-ui-react";

const Future = () => {
  const [showComments, setshowComments] = React.useState(false);
  const [addcomment, setAddcomment] = useState(false);
  const showAddCommentHandler = () => {
    setAddcomment(true);
  };
  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column textAlign='left' relaxed='very'>
          <Button as='div' labelPosition='right' style={{ height: "36px" }}>
            <Button color='green' style={{ fontSize: "12px", height: "36px" }}>
              <Icon name='thumbs up outline' style={{ fontSize: "12px" }} />
              Like
            </Button>

            <Label
              style={{ fontSize: "12px", height: "36px" }}
              as='a'
              basic
              color='green'
              pointing='left'>
              2,048
            </Label>
          </Button>
          <Button as='div' labelPosition='right' style={{ height: "36px" }}>
            <Button color='red' style={{ fontSize: "12px", height: "36px" }}>
              <Icon name='thumbs down outline' style={{ fontSize: "12px" }} />
              Dislike
            </Button>
            <Label
              style={{ fontSize: "12px", height: "36px" }}
              as='a'
              basic
              color='red'
              pointing='left'>
              2,048
            </Label>
          </Button>
          <Button as='div' labelPosition='right' style={{ height: "36px" }}>
            <Button color='black' style={{ fontSize: "12px", height: "36px" }}>
              <Icon name='comment' style={{ fontSize: "12px" }} />
              Comment
            </Button>
            <Label
              style={{ fontSize: "12px", height: "36px" }}
              as='a'
              basic
              color='black'
              pointing='left'>
              2,048
            </Label>
          </Button>
        </Grid.Column>
      </Grid.Row>

      {/* COMMENT SECTION */}
      <Grid.Row stretched>
        <Accordion>
          <Accordion.Title
            onClick={() => setshowComments((prevState) => !prevState)}>
            <Icon name={showComments ? "angle up" : "angle down"} />
            Comment Section
          </Accordion.Title>
          <Accordion.Content active={showComments}>
            <Grid.Column width={16} style={{ textAlign: "left" }}>
              <Header as='h3' dividing>
                Comments
              </Header>
              <Comment.Group>
                <CommentSection />
                <br />
                {!addcomment && (
                  <Button
                    onClick={showAddCommentHandler}
                    content='Add a comment'
                    labelPosition='left'
                    icon='edit'
                    primary
                  />
                )}

                {addcomment && <CommentReply rows={3} />}
              </Comment.Group>
            </Grid.Column>
          </Accordion.Content>
        </Accordion>
      </Grid.Row>
    </React.Fragment>
  );
};

export default Future;
