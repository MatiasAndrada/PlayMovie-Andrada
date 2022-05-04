import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../../../store/actions/fetchMovieDetail";

const Movie = (data) => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClick = (e) => {
    const id = e.target.value;
    dispatch(fetchMovieDetail(id));
    console.log("btn");
  };

  return (
    <div className="card">
      <img className="card-image" src={data.Poster} alt="poster" />
      <h2 className="card-tittle">{data.Title}</h2>
      <h3 className="card-subtitle"> {data.Year}</h3>
      <button
        className="button"
        variant="outline-success"
        value={data.imdbID}
        onClick={(e) => onClick(e)}
      >Ver detalles
      </button>  
    </div>
  );
};

export default Movie;
