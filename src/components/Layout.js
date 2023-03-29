import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
