import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllMovie } from "../Redux/Action/MovieAction";

const MoviesList = ({ getPage, pageCount }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
    // eslint-disable-next-line
  }, []);

  // get all movie useSelector
  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}

      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
