import React from "react";
import * as S from "./Navbar.style";
import { path } from "../../constants/path";

export default function Navbar() {
  return (
    <S.Navbar>
      <S.NavMenu>
        <li>
          <S.NavLink to={path.register}>Đăng ký </S.NavLink>
        </li>
        <li>
          <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
        </li>
      </S.NavMenu>
    </S.Navbar>
  );
}
