import { useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { APP_TITLE } from '../../const';
import {
  TextInput,
  TitleHeading,
  HeaderIcon,
  NormalButton,
} from '../Styled/Custom.styled';
import {
  StyledHeader,
  HeaderTitleWrapper,
  HeaderForm,
} from './StyledHeader.styled';

function Header() {
  const [searchTerm, setSearchTermn] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: `/search`,
      search: `?${createSearchParams({ q: searchTerm })}`,
    });
  };

  const handleChange = (e) => {
    setSearchTermn(e.target.value);
  };

  return (
    <StyledHeader>
      <HeaderTitleWrapper>
        <TitleHeading title="app-title">
          {' '}
          <Link to="/home">
            {' '}
            {APP_TITLE} <HeaderIcon className="fa fa-bath" title="app-logo" />
          </Link>
        </TitleHeading>
      </HeaderTitleWrapper>
      <HeaderForm onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Search product"
          width="70%"
        />
        <NormalButton type="submit" width="10%">
          Search
        </NormalButton>
      </HeaderForm>
      <HeaderIcon className="fa fa-shopping-cart" />
    </StyledHeader>
  );
}

export default Header;
