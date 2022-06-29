import styled from "styled-components";

export const FormControl = styled.div`

overflow: hidden;
border: 1px solid black;
border-color:${({focus}) => (focus ? 'red'  : '')    };
border-radius :2px;
display: flex;
height: 4rem;
input{
    outline: none;
    border: 0;
    padding: 1.2rem;
    flex-grow:1;

}

`