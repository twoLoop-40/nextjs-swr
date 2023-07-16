"use client";

import MovieBtn from "./components/button";

const Movie = () => {
  return (
    <div className='w-full flex flex-col p-2 bg-gray-800 rounded-lg gap-y-4'>
      <div>Movie Box</div>
      <div className=' w-full flex justify-between gap-x-2'>
        <MovieBtn label='New Dog!' />
        <MovieBtn label='Like' />
      </div>
    </div>
  );
};
export default Movie;
