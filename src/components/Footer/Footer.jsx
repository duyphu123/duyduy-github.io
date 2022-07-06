import React from "react";
import * as S from "./Footer.style";

export default function Footer() {
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020.</div>
          <S.Language>
            <span>Tiếng Việt</span>
            <span>Tiếng Anh</span>
        </S.Language>
        </S.Footer1>
        <S.Footer2>
            <div>Công ty TNHH CellPhoneS</div>
            <div> Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.  </div>
            <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
            <div> Điện thoại: 028.7108.966</div>
        </S.Footer2>
       
      </div>
    </S.Footer>
  );
}
