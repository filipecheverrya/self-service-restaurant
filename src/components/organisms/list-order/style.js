import styled from 'styled-components';
import { Link } from "react-router-dom";

export const List = styled.ul`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 24px 0;
  list-style: none;
  overflow-y: scroll;
`;

export const Item = styled.li`
  display: block;
  width: 100%;
  margin: 16px auto;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Linke = styled(Link)`
  display: block;
  width: 100%;
  margin: 16px auto;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;

