import { Outlet } from 'react-router-dom';
import Header from '../commonFile/Header'; 
import Footer from "../commonFile/Footer";

const PublicRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </>
  );
};

export default PublicRoute;