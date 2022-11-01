import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: 30px;
  padding: 0;
`;

export const Item = styled.li`
  margin: 20px;
  width: 150px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;
