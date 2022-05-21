import { useState } from "react";
import HeartWhite from "src/assets/images/icons/icon-heart-white.svg";
import HeartFill from 'src/assets/images/icons/icon-heart-full.svg'
const MovieCard = ({ movie, handleClick, hoverMovie, handleMouseOver }) => {
  const [fav, setFav] = useState(false);
  const onSetFavourite = () => {
    setFav(true);
  }
  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={() => handleMouseOver(movie.imdbID)}
    >
      <div className="absolute top-[10px] right-[10px] z-10">
        {
          fav ?
          <img src={HeartFill} className="w-[30px] h-[30px]" alt="" /> :
          <img src={HeartWhite} className="w-[30px] h-[30px]" onClick={onSetFavourite} alt="" />
        }
      </div>
      <img src={movie.Poster}  className="rounded-[5px] object-cover w-[200px] h-[300px] hover:brightness-50"  onClick={() => handleClick(movie.imdbID)} alt="" />
      {hoverMovie === movie.imdbID && (
        <div className="absolute w-full bottom-[20px]">
          <div className="p-6 text-lg text-white">{movie.Title}</div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
