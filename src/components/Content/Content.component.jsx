import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';

function Content({ children }) {
  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  );
}

export default Content;
