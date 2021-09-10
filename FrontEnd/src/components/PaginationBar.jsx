import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticles } from "../redux/Articles/articlesAsync";
import Pagination from "react-bootstrap/Pagination";
import styled, { css } from "styled-components";

const { Item, First, Prev, Next, Last, Ellipsis } = Pagination;

const PaginationContainer = styled.div`
  margin: 2rem;
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 2rem;
  color: #fff !important;
`;

const Paginate = styled(Pagination)`
  justify-content: center;
  width: 100% !important;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(3rem, min-content));
  color: #fff !important;
  background-color: #334257 !important;
  justify-content: center;
  align-items: center;

  & > * {
    background-color: #334257 !important;
    color: #fff !important;
  }
`;

const baseStyle = css`
  background-color: #334257 !important;
  color: #fff !important;
  justify-self: stretch !important;
  border: 1px solid #fff;
  display: grid;
  place-items: center;

  & > * {
    background-color: #334257 !important;
    color: #fff !important;
    border: 0px;
    justify-self: stretch !important;
    display: grid;
    place-items: center;
  }
`;

const PaginateItem = styled(Item)`
  ${baseStyle}
`;

const PaginateFirst = styled(First)`
  ${baseStyle}
`;

const PaginatePrev = styled(Prev)`
  ${baseStyle}
`;

const PaginateNext = styled(Next)`
  ${baseStyle}
`;
const PaginateLast = styled(Last)`
  ${baseStyle}
`;

const PaginateEllipsis = styled(Ellipsis)`
  ${baseStyle}
`;

const CurrentPageSelected = styled(Item)`
  ${baseStyle}
  text-decoration: underline;
`;

const PaginationBar = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { loading, page, pageSize, count } = useSelector(
    (state) => state.articles,
  );
  const [currentPage, setCurrentPage] = useState(page);
  const NumOfPages = Math.ceil(count / pageSize);
  const [totalPages, setTotalPages] = useState(NumOfPages);

  useEffect(() => {
    setCurrentPage(parseInt(page));
    setTotalPages(Math.ceil(parseInt(count) / parseInt(pageSize)));
  }, [loading, count, page, pageSize]);

  const handlePageChange = (event) => {
    if (
      event.target.textContent.includes("›") &&
      currentPage + 1 < totalPages
    ) {
      console.log("next page");
      dispatch(getAllArticles({ ...params, page: currentPage + 1 }));
    } else if (event.target.textContent.includes("»")) {
      dispatch(getAllArticles({ ...params, page: totalPages }));
    } else if (event.target.textContent.includes("«")) {
      dispatch(getAllArticles({ ...params, page: 1 }));
    } else if (event.target.textContent.includes("‹")) {
      dispatch(getAllArticles({ ...params, page: currentPage - 1 }));
    } else {
      dispatch(
        getAllArticles({ ...params, page: parseInt(event.target.textContent) }),
      );
    }
  };

  return (
    <PaginationContainer>
      <Paginate>
        {currentPage > 2 && (
          <div style={{ display: "flex" }}>
            <PaginateFirst onClick={handlePageChange} />
            <PaginatePrev onClick={handlePageChange} />
          </div>
        )}

        {!(currentPage - 2 < 1) && (
          <PaginateItem onClick={handlePageChange}>
            {currentPage - 2}
          </PaginateItem>
        )}
        {!(currentPage - 1 < 1) && (
          <PaginateItem onClick={handlePageChange}>
            {currentPage - 1}
          </PaginateItem>
        )}

        <CurrentPageSelected onClick={handlePageChange}>
          {currentPage}
        </CurrentPageSelected>

        {!(currentPage + 1 > totalPages) && (
          <PaginateItem onClick={handlePageChange}>
            {currentPage + 1}
          </PaginateItem>
        )}
        {!(currentPage + 2 > totalPages) && (
          <PaginateItem onClick={handlePageChange}>
            {currentPage + 2}
          </PaginateItem>
        )}

        {!(currentPage + 2 >= totalPages) && <PaginateEllipsis />}
        {currentPage !== totalPages && (
          <React.Fragment>
            {!(
              currentPage + 1 >= totalPages || currentPage + 2 >= totalPages
            ) && (
              <PaginateItem onClick={handlePageChange}>
                {totalPages}
              </PaginateItem>
            )}
            <div style={{ display: "flex" }}>
              <PaginateNext onClick={handlePageChange} />
              <PaginateLast onClick={handlePageChange} />
            </div>
          </React.Fragment>
        )}
      </Paginate>
    </PaginationContainer>
  );
};

export default PaginationBar;
