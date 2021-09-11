import React from "react";
import { Grid } from "semantic-ui-react";
import NewsCard from "./NewsCard";
import Spinner from "../Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../../redux/Articles/articlesAsync";
import PaginationBar from "../PaginationBar";

const NewsPage = (props) => {
  const { articles, loading } = useSelector((state) => state.articles);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllArticles(props));
  }, [dispatch, props]);

  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Row textAlign='center'>
        <Grid.Column
          mobile={15}
          tablet={15}
          computer={14}
          widescreen={10}
          largeScreen={10}>
          {loading && <Spinner />}

          {articles.map((article) => {
            return (
              <NewsCard
                title={article.title}
                image={article.urlToImage}
                source={article.source.name}
                key={article._id}
                publishedAt={article.publishedAt}
                author={article.author || article.source.name}
                description={article.description}
                link={article.url}
              />
            );
          })}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <PaginationBar />
      </Grid.Row>
    </Grid>
  );
};

export default NewsPage;
