import { useParams } from 'react-router-dom';
import { MoviesDetails } from '../components/MoviesDetails/MoviesDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('first', movieId);
  return (
    <main>
      <MoviesDetails movieId={movieId} />
    </main>
  );
};
export default MovieDetails;
