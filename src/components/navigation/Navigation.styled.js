import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledLink = styled(Link)`
  max-width: 324px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    composes: link;
    color: #2196f3;
  }
`;

export const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  -webkit-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  -moz-box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6) inset;
`;
