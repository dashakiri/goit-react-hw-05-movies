import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // max-width: 1300px;
  list-style: none;
  padding: 0;

  @media (min-width: 320px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TopMovieContainer = styled.div`
  width: 100vw;
  height: 600px;
`;

export const MovieItem = styled(Link)`
  position: relative;
  width: 282px;
  height: 520px;
  margin-left: 24px;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 12px;
  background-color: rgba(44, 54, 83, 0.8);
  text-decoration: none;
`;

export const Poster = styled.img`
  display: inline-block;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const MovieTitle = styled.span`
  padding: 8px;
  color: var(--title);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
`;

export const VoteAverage = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  // width: 59px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.65);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  color: #ffad49;
`;

export const SpanVote = styled.span`
  margin-left: 4px;
`;

export const AddToFav = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 8px;
  text-decoration: none;
  color: #7b6ef6;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
`;
