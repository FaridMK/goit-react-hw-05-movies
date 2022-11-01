import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './Search.styled';

const Search = ({ onSubmitMovies }) => {
  const [query, setQuery] = useState('');

  const handleQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    onSubmitMovies(query);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Button>Search</Button>
        <Input
          type="text"
          onChange={handleQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </>
  );
};

Search.propTypes = {
  onSubmitMovies: PropTypes.func.isRequired,
};

export default Search;
