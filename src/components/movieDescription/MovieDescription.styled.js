import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 10px;
  padding: 0 20px 0 20px;
`;

export const TextDescrContaier = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  margin-right: 80px;
  display: block;
  width: 480px;
  height: 720px;
  border-radius: 24px;

  @media (max-width: 766px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
`;

export const TextWrap = styled.div`
  margin-left: 10px;
`;

export const VoteAverage = styled.div`
  margin-bottom: 24px;
  width: 59px;
`;

export const Tagline = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33;
  color: var(--title);
`;

export const Description = styled.p`
  margin-bottom: 24px;
  margin-top: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: var(--secondary-text-lightgrey);
`;

export const DescriptionTitle = styled.p`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--medium-grey);
`;

export const StyledLink = styled(Link)`
  margin-bottom: 10px;
  margin-left: 10px;
  width: 150px;
  height: 56px;
  background-color: #7b6ef6;
  padding: 16px 32px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.3;
  color: var(--title);
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
`;

export const CastContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.65);
  }
`;
