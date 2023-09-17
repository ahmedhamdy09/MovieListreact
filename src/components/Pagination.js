import React, { useEffect, useState } from "react";
// import { Pagination } from "react-bootstrap";
// import axios from "axios";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPagintationPage } from "../Redux/Action/MovieAction";

const PaginationComponent = () => {
  const [pageCount, setpageCount] = useState(0); // عدد الصفحات

  const dispatch = useDispatch();

  // get all movie useSelector
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);
    // eslint-disable-next-line
  }, []);

  //get current page
  const getPage = async (page) => {
    dispatch(getPagintationPage(page));
  };

  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
