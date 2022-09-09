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
  font-size: 24px;

  &.active {
    color: #2c37bf;
  }
`;

export const Hr = styled.hr`
  margin: 0px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e2ecff;
`;
export const Button = styled.button`
  padding: 8px 15px;
  margin-left: 15px;
  border: 1px solid;
  border-radius: 5px;
  background-color: #5f1640;
  opacity: 0.7;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 24px;
`;
