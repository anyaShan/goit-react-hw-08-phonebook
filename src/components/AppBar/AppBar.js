import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppWrap } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppWrap>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </AppWrap>
  );
};
