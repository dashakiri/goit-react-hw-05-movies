import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  margin: 0;
`;

export const MovieList = styled.ul`
  display: fles;
  flex-wrap: wrap;
  justify-content: center;
  // max-width: 1300px;
  list-style: none;
  padding: 0;
  // margin-left: -30px;

  @media (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }
`;
