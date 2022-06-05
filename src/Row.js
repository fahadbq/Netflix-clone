import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, getUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(getUrl);
      setMovies(request.data.results);
      return request;
    };
    getData();
  }, [getUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
