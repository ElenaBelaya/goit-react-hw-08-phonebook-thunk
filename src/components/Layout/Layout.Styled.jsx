import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 5px 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: #b00b69;
  }
`;

export const Hr = styled.hr`
  margin: 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled.button`
  padding: 1px 5px;
  margin-left: 15px;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  width: calc(50%);
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;
