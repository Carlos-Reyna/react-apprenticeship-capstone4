import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';

function Content({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
