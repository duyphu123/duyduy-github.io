import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background: linear-gradient(-180deg, #d70018, #f23);
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
`;
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;
export const Logo = styled(Link)`
  margin-right: 4rem;
  
  svg {
    width: 162px;
    height: 50px;
    fill: #fff;
  }
`;
export const StyledForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background: #fff;
  border-radius: 2px;
  height: 4rem;
`;
export const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding-left: 1rem;
`
export const StyledButton = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  height: auto;
 
  svg {
    color: #d70018;
   
  }
`
export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 5rem;
`
export const CartContainer = styled.div`
  position: relative;
`
export const CartIcon = styled(Link)`
  padding: 10px;
  display: inline-block;
  position: relative;
  svg {
    color: #fff;
    stroke: #fff;
    fill: currentColor;
    width: 26px;
    height: 26px;
  }
`
export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius:1rem;
  min-width: 11px;
  
  padding: 3px 5px;
  text-align: center;
  border: 2px solid #d70018;
  color: #d70018;
  background-color: #fff;
  line-height: 1;
  top: -3px;
  right: -3px;
  font-size: 12px;
`
export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
  width: 40rem;
`
export const PopoverTitle = styled.div`
  padding: 1.5rem 0 2rem 1rem;
  color: rgba(0, 0, 0, 0.26);
  text-transform: capitalize;
`
export const MiniProductCart = styled.div`
  display: flex;
  padding: 1rem;
`
export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`
export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`
export const MiniProductCartPrice = styled.div`
  margin-left: 4rem;
  flex-shrink: 1;
  color: #d70018;
`
export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const MoreProduct = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
`
export const ButtonShowCart = styled.button`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
`