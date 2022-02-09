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
  cursor:pointer;
  display: inherit;
  width:12%;
  margin:1%;
  

  @media only screen and (max-width: 920px) {
    width:15%;
  }

  @media only screen and (max-width: 600px) {
    &:first-child{
    display:none;
   }


`;
