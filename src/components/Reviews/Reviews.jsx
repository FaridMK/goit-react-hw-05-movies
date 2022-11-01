import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../service/api';
import Box from '../Box';
import { Item, List, Text, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <Box>
      {reviews.length ? (
        <List>
          {reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{content}</Text>
            </Item>
          ))}
        </List>
      ) : (
        <Text>Sorry, we haven't added a description yet.</Text>
      )}
    </Box>
  );
};

export default Reviews;
