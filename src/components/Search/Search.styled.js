import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: baseline;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  background-color: #fff;
`;
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border-right: none;
  border-top: none;
  border-left: none;
  border-bottom-color: orangered;
  outline: none;
  padding: 8px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
    color: orangered;
  }
`;
export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: none;
  color: black;
  background-color: initial;
  cursor: pointer;
  outline: none;
  :hover {
    color: orangered;
  }
`;
