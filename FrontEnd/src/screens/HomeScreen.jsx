import React from "react";

import CategoryBar from "../components/CategoryBar";
import HeaderNav from "../components/HeaderNav";
import NewsPage from "../components/News/NewsPage";
import SourceBar from "../components/SourceBar";
import PaginationBar from "../components/PaginationBar";

const HomeScreen = ({ match }) => {
  const { term, source, category } = match.params;
  return (
    <React.Fragment>
      <HeaderNav />
      <CategoryBar />
      <SourceBar />
      <br></br>
      {term ? (
        <NewsPage searchterm={term} />
      ) : source ? (
        <NewsPage source={source} />
      ) : category ? (
        <NewsPage category={category} />
      ) : (
        <NewsPage />
      )}
      <PaginationBar />
    </React.Fragment>
  );
};

export default HomeScreen;
