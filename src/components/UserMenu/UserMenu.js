import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/UserAuth/operations';
import { useAuth } from 'hooks';
import { LogOutBtn, UserMenuStyles } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyles>
      <p>Welcome, {user.name}</p>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserMenuStyles>
  );
};
