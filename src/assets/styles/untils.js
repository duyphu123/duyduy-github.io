import styled from "styled-components";

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
height: 3rem;
background-color: tomato;
box-shadow: 2px;
color: white;
padding: 1px 6px;
transition: 0.2s background ease;
:hover{
    background-color: red;
}
`