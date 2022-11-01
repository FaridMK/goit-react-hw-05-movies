import React, { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { searchMovies } from '../service/api';
import Search from '../components/Search/Search';
import { MovieList } from '../components/MovieList/MovieList';
import Box from '../components/Box';

const Movies = () => {
  //state search movies
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParams) {
      searchMovies(queryParams).then(results => setMovies(results));
    }
  }, [queryParams]);

  const filterMovies = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const onMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(queryParams.toLowerCase())
  );

  return (
    <Box as="section" pl={20}>
      <Search onSubmitMovies={filterMovies} />
      <MovieList products={onMovies} />
      <Outlet />
    </Box>
  );
};

export default Movies;
