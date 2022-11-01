import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
  :hover {
    color: orangered;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 10px;
  margin-top: 0;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
`;

export const Title = styled.h2`
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const Nav = styled.li`
  margin-top: 10px;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  :hover,
  :focus-visible {
    color: orangered;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  //padding-left: 20px;
  padding: 0;
  text-decoration: none;
`;
