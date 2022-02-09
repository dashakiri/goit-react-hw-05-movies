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
  font-weight: 600;
  color: #c3c8d4;
  font-size: 16px;
  line-height: 1.5;

  &:hover {
    color: var(--accent-purple);
  }

  &.active {
    composes: link;
    color: #2196f3;
  }
`;

export const StyledLogo = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  // padding: 12px;
  font-weight: 600;
  color: #2196f3;
  font-size: 36px;
  line-height: 1.5;
`;

export const NavLinks = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;
