import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () => {
  let { imdbID } = useParams();
  const [movieInfo, setMovieInfo] = useState({
    Title: "",
    Year: "",
    Language: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    imdbRating: "",
    Poster: "",
  });
  const getMoviesInfo = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=389bfc6d`
    );
    const data = await res.json();
    setMovieInfo((movInfo) => ({
      ...movInfo,
      Title: data.Title,
      Year: data.Year,
      Language: data.Language,
      Released: data.Released,
      Runtime: data.Runtime,
      Genre: data.Genre,
      Director: data.Director,
      Writer: data.Writer,
      Actors: data.Actors,
      Plot: data.Plot,
      imdbRating: data.imdbRating,
      Poster: data.Poster,
    }));
  };
  useEffect(() => {
    getMoviesInfo();
  }, []);
  return (
    <div className='w-[426px] h-[160vh] bg-gradient-to-r from-red-300 via-red-400 to-yellow-400 sm:[640px] md:w-[768px] md:h-[100vh] lg:h-screen lg:w-full '>
      <div className='w-[90%] flex  mx-auto pt-10 md:w-[70%] lg:w-[60%]'>
        <div className='w-full flex flex-col-reverse items-center bg-gradient-to-r from-teal-100 via-cyan-300 to-sky-500 rounded-md md:flex-row md:justify-between md:items-start'>
          <div className='w-4/5 right-info text-start ml-3 md:w-3/5 lg:w-3/5'>
            <div className='row1 flex justify-between items-center'>
              <h1 className='font-bold text-4xl py-3'>{movieInfo.Title}</h1>
              <button className='rounded-full bg-yellow-400 text-white p-2 font-bold transition-all hover:bg-yellow-500'>
                {movieInfo.imdbRating}
              </button>
            </div>
            <p className="font-bold mb-4">{movieInfo.Genre.replace(/,/g, "|")}</p>
            <div className='row2 flex justify-between text-md py-2 text-red-700 font-bold bg-cyan-300 px-2 rounded-md'>
              <p>{movieInfo.Language}</p>
              <p>{movieInfo.Year}</p>
              <p>{movieInfo.Runtime}</p>
            </div>
            <div className='row3'>
              <p className='text-justify'>{movieInfo.Plot}</p>
            </div>
            <div className='row4 mt-10'>
              <h2 className='my-2'>
                <b>Director: </b>
                {movieInfo.Director}
              </h2>
              <h2 className='my-2'>
                <b>Writers: </b>
                {movieInfo.Writer}
              </h2>
              <h2 className='my-2'>
                <b>Cast: </b>
                {movieInfo.Actors}
              </h2>
              <h2 className='my-2'>
                <b>Released Date: </b>
                {movieInfo.Released}
              </h2>
            </div>
          </div>
          <div className='left-poster ml-2 mt-5 md:mt-0 lg:mt-0'>
            <img src={movieInfo.Poster} alt='Poster-not Available' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
