import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "./request";
import "./Banner.css";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(requests.getNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };
    getData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button"> Play </button>
          <button className="banner__button"> My List </button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
