import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
`
export const NavMenu = styled.ul`
  display: flex;
  margin-bottom: 0;
`
export const NavLink = styled(Link)`
  color: #fff;
  margin-left: 1rem;
  margin-right: 1rem;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
