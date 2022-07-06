import styled from "styled-components";
import { Button } from "../../../assets/styles/untils";
export const StyledRegister = styled.div`
  background-color: #d70018;
  min-width: max-content;
`;
export const Container = styled.div`
  padding: 8rem;
  display: flex;
`;
export const Banner = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
`;
export const FormWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  border-radius: 20px;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`;
export const FormTitle = styled.div`
  font-size: 20px;
  margin-bottom: 3rem;
  color: #000;
  text-transform: capitalize;
`;
export const Form = styled.form``;
export const FormControl = styled.div`
margin-bottom: 2.5rem;
`
export const FormButton = styled.div`
margin-bottom: 3rem;
${Button}{
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
}
`
export const FormFooter = styled.div`
text-align: center;
span{
    margin-right:1rem;
    color:black;
}
`