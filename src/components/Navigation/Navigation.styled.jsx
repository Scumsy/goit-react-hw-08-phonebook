import styled from 'styled-components';

export const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavLinkStyles = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: darkgray;
  text-decoration: none;

  :hover {
    font-weight: bold;
    color: black;
  }
`;
