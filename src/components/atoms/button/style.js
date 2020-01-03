import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  background-color: #ffffff;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    border-color: #ffffff;
  }
`;
