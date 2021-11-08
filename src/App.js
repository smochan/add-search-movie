// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./Components/searchBar/SearchBar";
import Movie from "./Components/movie/MovieCard";

function App() {
  // const [moviesTitle, setMoviesTilte] = useState("");
  // const [moviesRating, setMoviesRating] = useState("");
  // const [moviesImageUrl, setMoviesImageUrl] = useState("");

  const [movies, setMovies] = useState([]);

  // setMoviesTilte("3idiots");
  // setMoviesRating("9");
  // setMoviesImageUrl(
  //   "https://m.media-amazon.com/images/I/81TeJPHjP-L._SL1500_.jpg"
  // );

  useEffect(() => {
    setMovies([
      {
        title: "3 Idiots",
        rating: "9.2",
        imageUrl:
          "https://m.media-amazon.com/images/I/81TeJPHjP-L._SL1500_.jpg",
      },
      {
        title: "Shawshank Redumption",
        rating: "9.4",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91AlFxiq2cL._RI_.jpg",
      },
    ]);
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <>
      <SearchBar />
      {/* {movies.map((movie) => (
        <Movie
          title={movie.title}
          rating={movie.rating}
          imageUrl={movie.imageUrl}
        />
      ))} */}
      <Movie
        title={movies !== [] ? movies[0].title : ""}
        rating={movies !== [] ? movies[0].rating : ""}
        imageUrl={movies !== [] ? movies[0].imageUrl : ""}
      />
    </>
  );
}

export default App;
