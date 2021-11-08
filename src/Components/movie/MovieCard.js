import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, imageUrl, rating }) => {
  return (
    <div className="main">
      <img src={imageUrl} alt={title} className="poster" />
      <div className="movieDetails">
        <h2>{title}</h2>
        <h3>{rating}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
