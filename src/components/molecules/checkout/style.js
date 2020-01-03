import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

export const Column = styled.div`
  text-align: center;
  padding: 8px;
`;

export const Break = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #000;
  height: 1px;
  margin: 0 auto;
`;