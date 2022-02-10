import React from 'react';
import { APP_TITLE } from '../../const';
import { TextInput, TitleHeading, HeaderIcon } from '../Styled/Custom.styled';
import { StyledHeader, HeaderTitleWrapper } from './StyledHeader.styled';

function Header({ handleClick }) {
  return (
    <StyledHeader>
      <HeaderTitleWrapper onClick={() => handleClick(false)}>
        <TitleHeading title="app-title"> {APP_TITLE}</TitleHeading>
        <HeaderIcon className="fa fa-bath" title="app-logo" />
      </HeaderTitleWrapper>
      <TextInput type="text" placeholder="Search product" width="60%" />
      <HeaderIcon className="fa fa-shopping-cart" />
    </StyledHeader>
  );
}

export default Header;
