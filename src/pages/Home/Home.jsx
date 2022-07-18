import React from "react";
import * as S from "../Home/home.style";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import SearchItemResult from "../../components/SearchItemResult/SearchItemResult";

export default function Home() {
  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel />
        </S.Side>
        <S.Main>
          <SearchItemResult />
        </S.Main>
      </S.Container>
      
    </div>
  );
}
