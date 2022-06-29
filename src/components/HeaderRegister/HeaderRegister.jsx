import React from "react";
import { Link } from "react-router-dom";
import * as S from "./HeaderRegister.style";
export default function HeaderRegister({title}) {
  return (
    <S.Header>
      <S.Container className="container">
        <S.HeaderBrand>
          <S.HeaderIcon to="">
        <img src="" alt="" />
          </S.HeaderIcon>
          <S.HeaderTitle>
            {title}
          </S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="Link">Cần Trợ Giúp ?</Link>
      </S.Container>
    </S.Header>
  );
}
