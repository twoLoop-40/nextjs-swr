"use client";

import { useState } from "react";
import MovieBtn from "./components/button";
import VideoPlayer from "./components/video-player";
import { DogsResponse } from "@api/movie/route";
import useSWR from "swr";

const fetcher = () => fetch("/api/movie").then((res) => res.json());

const Movie = () => {
  const [movieSrc, setMovieSrc] = useState<string>("");
  const { data: movieData, mutate } = useSWR<DogsResponse>(
    "/api/movie",
    fetcher
  );

  const onGetMovieClick = async () => {
    mutate();
    if (movieData) {
      const { url } = movieData.data;
      setMovieSrc(() => url);
    }
  };
  const onLikeClick = () => {
    mutate((prevData) => {
      if (prevData) {
        const { data } = prevData;
        const updatedData = { ...data, isLiked: !data.isLiked };
        return { ...prevData, data: updatedData };
      }
    }, false);
  };

  return (
    <div className='w-full flex flex-col p-2 bg-gray-800 rounded-lg gap-y-4'>
      <VideoPlayer src={movieSrc} type='video/mp4' />
      <div className=' w-full flex justify-between gap-x-2'>
        <MovieBtn label='New Dog!' onClick={onGetMovieClick} key='getMovie' />
        <MovieBtn
          label={movieData?.data.isLiked ? "Like" : "Not Like"}
          onClick={onLikeClick}
          key='getLike'
        />
      </div>
    </div>
  );
};
export default Movie;
