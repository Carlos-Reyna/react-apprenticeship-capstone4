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
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitleWrapper = styled.div`
  display: inherit;
  width:15%;
  margin:1%;
  

  @media only screen and (max-width: 920px) {
    width:15%;
  }

  @media only screen and (max-width: 600px) {
    &:first-child{
    display:none;
   }


`;

export const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 40%;
  align-items: baseline;
}
  @media only screen and (max-width: 920px) {
    width: 60%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
