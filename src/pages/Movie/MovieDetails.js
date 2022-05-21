import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchMovieDetails } from "src/slices/movies";

// Images
import backIcon from "src/assets/images/icons/icon-arrow-grey.svg";
import backHoverIcon from "src/assets/images/icons/icon-arrow-white.svg";

const MovieDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  // State
  const { movieDetails, error } = useSelector((state) => state.movies);
  const [hoverable, setHoverable] = useState(false);
  const setHover = () => {
    setHoverable(true);
  }
  const unSetHover = () => {
    setHoverable(false);
  }
  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="mt-8">
        <Link to="/" className="cursor-pointer">
          {hoverable ?
            <img src={backHoverIcon} onMouseOut={unSetHover} alt="" /> :
            <img src={backIcon} onMouseOver={setHover} alt="" />
          }
        </Link>
      </div>
      {movieDetails && (
        <div className="flex flex-col-reverse justify-between gap-10 mt-8 lg:flex-row">
          <div className="lg:w-[50%]">
            <div className="text-5xl text-white">{movieDetails.Title}</div>

            <div className="mt-6 text-2xl text-gray-500">Plot</div>
            <div className="mt-5 text-2xl text-white">{movieDetails.Plot}</div>
            <div className="flex justify-between mt-12">
              <div>
                <div className="text-2xl text-gray-500">Cast</div>
                {movieDetails.Actors.split(',').map((actor, index) => {
                  return (
                    <div key={index} className="mt-3 text-2xl text-white">{actor}</div>
                  )
                })}
              </div>
              <div>
                <div className="text-2xl text-gray-500">Genre</div>
                {movieDetails.Genre.split(',').map((genre, index) => {
                  return (
                    <div key={index} className="mt-3 text-2xl text-white">{genre}</div>
                  )
                })}
              </div>
              <div>
                <div className="text-2xl text-gray-500">Director</div>
                 {movieDetails.Director.split(',').map((director, index) => {
                  return (
                    <div key={index} className="mt-3 text-2xl text-white">{director}</div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] flex lg:justify-center lg:px-10">
            <img className="lg:w-full w-[350px] lg:h-[700px] object-cover rounded-[5px]" src={movieDetails.Poster} alt="" />
          </div>
        </div>
      )}
      {movieDetails == null && !error && (
        <div className="text-white flex justify-center items-center text-3xl h-[50vh]">...Loading</div>
      )}
      {movieDetails == null && error && (
        <div className="text-white flex justify-center items-center text-3xl h-[50vh]">{error}</div>
      )}
    </div>
  );
};

export default MovieDetails;
