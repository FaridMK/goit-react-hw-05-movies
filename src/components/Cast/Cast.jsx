import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../service/api';
import Box from '../Box';
import { Ul, Item, Title, Text } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <Box>
      <Ul>
        {cast.map(({ name, id, character, profile_path }) => (
          <Item key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                profile_path === null
                  ? 'kZobKKPhs2vhuXu9SWvyg1u3zDM.jpg'
                  : profile_path
              }`}
              alt={name}
              width={200}
            />
            <Title>{name}</Title>
            <Text>Character: {character}</Text>
          </Item>
        ))}
      </Ul>
    </Box>
  );
};
export default Cast;
