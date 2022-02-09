import styled from '@emotion/styled';

export const LargeImageContainer = styled.div`
  position: relative;
  max-width: 1024px;
  height: 480px;
  border-radius: 40px;
`;

export const LargeImage = styled.img`
  border-radius: 40px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-image: linear-gradient(
    180deg,
    rgba(54, 44, 146, 0.4) 0%,
    rgba(18, 98, 151, 0.4) 100%
  );
`;

export const MovieTitleContainer = styled.div`
  width: 560px;
  height: 144px;
  padding: 40px;
  background-color: rgba(32, 40, 62, 0.8);
  border-radius: 24px;
  position: relative;
  top: -85px;
  left: 0;

  @media (max-width: 780px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 30px;
  }
`;

export const MovieTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.25;
  color: var(--title);

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const SubTitle = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 1.33;
  color: var(--secondary-text-lightgrey);
`;
