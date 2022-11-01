import { useEffect } from 'react';
import { useState } from 'react';
import { MovieList } from '../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../service/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setMovies(data);
    });
  }, []);
  return (
    <main>
      <MovieList products={movies} />
    </main>
  );
};

export default Home;
