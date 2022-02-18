import PropTypes from 'prop-types';
import { StyledLayout } from './Layout.styled';

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
