import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieName, Img } from './MovieList.styled';

export const MovieList = ({ products }) => {
  const location = useLocation();
  const IMG = 'https://image.tmdb.org/t/p/w500';
  console.log(products);
  return (
    <Container>
      {products?.map(movie => (
        <CardWrapper key={movie?.id}>
          <Link to={`/movies/${movie?.id}`} state={{ from: location }}>
            <Img src={`${IMG}${movie?.backdrop_path}`} alt="" />
            <MovieName>{movie?.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
