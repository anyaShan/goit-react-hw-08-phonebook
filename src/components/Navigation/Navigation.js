import { NavWrap, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavWrap>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
    </NavWrap>
  );
};
