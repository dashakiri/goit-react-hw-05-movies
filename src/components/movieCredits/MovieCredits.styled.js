import styled from '@emotion/styled';

export const ActorList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Actor = styled.li`
  width: 160px;
  height: 310px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 5px;
  background-color: rgba(32, 40, 62, 0.8);
  border-radius: 12px;
`;

export const ActorImage = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 12px;
`;

export const ActorTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  color: var(--medium-grey);
`;
