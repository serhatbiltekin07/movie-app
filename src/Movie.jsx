import React from "react";

function Movie({ movie }) {
  const { id, title, description, years, link, image } = movie;
  return (
    <div className="movie">
      <div>
        <img src={image} width={300} height={345} />
        <h4 className="movie-title ">{title}</h4>
        <p className="movie-desc">{description}</p>
        <h6 className="movie-years">years: {years}</h6>
        <div className="movie-link">
          <button className="movie-link-btn">
            <a style={{ textDecoration: "none" }} href="{link}">
              Fragman izle
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;
