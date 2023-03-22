import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavLinkStyles, NavStyles } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyles>
      <NavLink to="/">
        <NavLinkStyles>Home</NavLinkStyles>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <NavLinkStyles>Contacts</NavLinkStyles>
        </NavLink>
      )}
    </NavStyles>
  );
};
