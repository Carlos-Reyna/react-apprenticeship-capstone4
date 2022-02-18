import styled from 'styled-components';

export const ProductSidebar = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction: column;
justify-text:center;
align-items:center;
margin-left:5%;
margin-right:2%;
& ul{
    padding:0;
}

 & ul>ol {
     padding:0;
 }


 @media only screen and (max-width: 600px) {
    {
     width: 20%;
     
   }
`;

export const CategoryItem = styled.div`
  text-decoration: ${(props) => (props.isSelected ? 'underline' : 'none')};
  color: ${(props) => (props.isSelected ? 'blue' : 'inherit')};

  i {
    display: none;
  }
`;
