import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0px auto;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  list-style: none;
  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-align: center;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;
