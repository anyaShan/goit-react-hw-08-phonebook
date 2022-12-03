// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { MenuWrap } from './UserMenu.styled';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useAuth();

  return (
    <MenuWrap>
      <p>Welcome, Anna!</p>
      <button type="button">Logout</button>
    </MenuWrap>
  );
};
