import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 60px;
  min-width: 100%;
  border-style: solid;
  border-width: thin;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 20px;
  padding-top: 10px;

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const HeaderTitleWrapper = styled.div`
  display:flex;
  justify-content:center;
  text-align:center;
  
  @media only screen and (max-width: 600px) {
    &:first-child{
    display:none;
   }


`;

export const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: baseline;
  justify-content: space-around;
}
input{
  margin: 5px;
  width: 80%;
}
  @media only screen and (max-width: 920px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
