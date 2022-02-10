import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';

function Content({ children, handleClick }) {
  return (
    <Layout>
      <Header handleClick={handleClick} />
      {children}
      <Footer />
    </Layout>
  );
}

export default Content;
