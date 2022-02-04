import React from 'react';
import { APP_TITLE } from '../../const';
import { TextInput, TitleHeading, HeaderIcon } from '../Styled/Custom.styled';
import { StyledHeader } from './StyledHeader.styled';

function Header() {
  return (
    <StyledHeader>
      <TitleHeading title="app-title"> {APP_TITLE}</TitleHeading>
      <HeaderIcon className="fa fa-bath" title="app-logo" />
      <TextInput type="text" placeholder="Search product" width="33%" />
      <HeaderIcon className="fa fa-shopping-cart" />
    </StyledHeader>
  );
}

export default Header;
