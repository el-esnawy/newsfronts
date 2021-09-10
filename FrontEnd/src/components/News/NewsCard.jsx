import React, { useState } from "react";
import {
  Card,
  Grid,
  Header,
  Button,
  Image,
  Icon,
  Divider,
} from "semantic-ui-react";
var ntdmn = require("number-to-date-month-name");

const NewsCard = (props) => {
  const date = new Date(props.publishedAt);
  const [imgError, setImgError] = useState(false);

  const lastDigit = parseInt(
    date.getUTCDate().toString().split("")[
      date.getUTCDate().toString().split("").length - 1
    ],
  );

  const handleError = () => {
    setImgError(true);
  };

  const suffix =
    lastDigit === 1
      ? "st"
      : lastDigit === 2
      ? "nd"
      : lastDigit === 3
      ? "rd"
      : "th";

  return (
    <Card fluid style={{ padding: "1rem" }}>
      <Grid padded stackable relaxed='very'>
        <Grid.Row>
          <Grid.Column
            mobile={15}
            tablet={15}
            computer={6}
            widescreen={6}
            largeScreen={6}
            floated='left'
            textAlign='left'>
            <Header as='h3' style={{ marginRight: "auto" }}>
              {/* <Image
                src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                size='mini'
                circular
              /> */}
              {props.source}
            </Header>
            {imgError ? (
              <h4>Image Could not be loaded from Source</h4>
            ) : (
              <Image
                onError={handleError}
                src={props.image}
                style={{ borderRadius: "25px" }}
                ribbon='right'
                centered
                fluid
              />
            )}
            <Divider className='transparent'></Divider>
            <Card.Meta as='h5'>
              <span className='date'>
                Published On {date.getUTCDate()}
                <sup>{suffix}</sup>
                &nbsp;{ntdmn.toMonth(date.getMonth() + 1, "f")} &nbsp;
                {date.getFullYear()}
              </span>
            </Card.Meta>
          </Grid.Column>
          <Grid.Column
            mobile={15}
            tablet={15}
            computer={10}
            widescreen={10}
            largeScreen={10}
            textAlign='left'>
            <Header floated='left' style={{ textAlign: "left" }} as='h1' icon>
              {props.title}
              <Header.Subheader>Written by: {props.author} </Header.Subheader>
              {/* <Header.Subheader>Section</Header.Subheader> */}
            </Header>
            <Header floated='left' as='h4' style={{ textAlign: "left" }}>
              Article Summary
            </Header>
            <br />
            <Header floated='left' as='h5'>
              {props.description}
            </Header>
            <Button
              as='a'
              target='_blank'
              floated='left'
              color='blue'
              size='small'
              href={props.link}>
              Read More <Icon name='angle right' />
            </Button>
          </Grid.Column>
        </Grid.Row>

        {/* FUTURE FEATURES */}
        {/* <Future /> */}
      </Grid>
    </Card>
  );
};

export default NewsCard;

// RIBBON
// label={{
// 	as: "a",
// 	color: "blue",
// 	content: "",
// 	icon: "bookmark",
// 	ribbon: true,
// }}
