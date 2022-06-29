import React, { Component } from "react";
import * as S from "./Footer.style";

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>Chính sách chương trình Được hỗ trợ bởi Google</div>
          <S.Language>
            <span>Tiếng Việt</span>
            <span>Tiếng Anh</span>
        </S.Language>
        </S.Footer1>
        <S.Footer2>
            <div>Công ty TNHH Hiphone</div>
            <div>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 </div>
            <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
            <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
        </S.Footer2>
       
      </div>
    </S.Footer>
  );
}
