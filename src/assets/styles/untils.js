import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;

  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    
    #f23,
    #d70040,
    
    #fa7199,
    #d70018
  );
 
  box-shadow: 2px;
  color: white;
  padding: 1px 6px;
  transition: 0.2s background ease;

  -o-transition: all 2s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
 
  :hover {
    background-position: 100% 0;

    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
