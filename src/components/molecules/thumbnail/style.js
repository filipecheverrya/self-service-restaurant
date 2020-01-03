import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 360px;
  height: auto;
  max-height: 300px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 400px;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;