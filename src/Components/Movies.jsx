import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Movies = () => {
  const [Cards, setCards] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const getMovieData = async () => {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?s=${inputVal}&apikey=389bfc6d`
      );
      let data = await res.json();
      console.log(data.Search);
      setCards(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  const searchmovie = () => {
    setInputVal("");
    if (inputVal === "") {
      alert("Please,enter movie name");
    } else {
      getMovieData();
    }
    setIsClicked(true);
  };
  return (
    <div
      className={`${isClicked &&"h-auto bg-gradient-to-r from-purple-800 via-blue-400 to-pink-600"} w-[426px] sm:w-[640px] md:w-[768px] lg:w-full`}>
      <div className='w-[426px]  flex justify-center items-center pt-5 sm:w-[640px] md:w-[768px] lg:w-full'>
        <input
          type='text'
          className='w-56 px-4 py-2 border border-blue-200 text-lg rounded-full relative outline-blue-400'
          placeholder='Search Movie here'
          onChange={(e) => setInputVal(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='px-3 py-3 bg-blue-200 text-black rounded-full absolute left-[88%] cursor-pointer transition-all hover:bg-blue-300 sm:left-[90%] md:left-[59%] lg:left-[54.5%]'
          onClick={() => searchmovie()}
        />
      </div>
      <div className='moviesCards flex flex-wrap justify-center gap-x-10'>
        {Cards ? (
          Cards.map((card) => {
            return (
              <NavLink key={card.imdbID} to={`/${card.imdbID}`}>
                <div className='w-52 h-auto flex flex-col items-center my-5 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md cursor-pointer transition-transform scale-80 hover:scale-105 '>
                  <img
                    src={card.Poster}
                    alt='poster-missing'
                    className='aspect-square'
                  />
                  <p>{card.Type}</p>
                  <h1 className='font-bold'>{card.Title}</h1>
                  <h4>{card.Year}</h4>
                </div>
              </NavLink>
            );
          })
        ) : (
          <h1 className='font-bold text-black text-xl mt-10 h-[110vh] sm:text-xl md:text-2xl lg:text-3xl'>
            Oops!..Movie not found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
