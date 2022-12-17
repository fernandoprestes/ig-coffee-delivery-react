import { Outlet } from 'react-router-dom';
import { Header } from '~/components/Header';
import { LayoutContainer } from './styes';

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
