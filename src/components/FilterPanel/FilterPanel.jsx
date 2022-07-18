import React from "react";
import * as S from "./filterPanel.style";
import { Link } from 'react-router-dom'
import { path } from '../../constants/path'
import RatingStars from '../RatingStars/RatingStars'

export default function FilterPanel() {
  return (
    <div>
      <S.CategoryTitleLink to={path.home}>
        <svg
          viewBox="0 0 12 10"
          className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate"
        >
          <g fillRule="evenodd" stroke="none" strokeWidth={1}>
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </S.CategoryTitleLink>
      <S.CategoryList>
        <S.CategoryItem>
          <Link to="">Iphone</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="">Máy Tính Bảng</Link>
        </S.CategoryItem>
        <S.CategoryItem>
          <Link to="">Đồng Hồ Điện Tử</Link>
        </S.CategoryItem>
      </S.CategoryList>
      <S.CategoryTitle>
        <svg
          enableBackground="new 0 0 15 15"
          viewBox="0 0 15 15"
          x={0}
          y={0}
          className="shopee-svg-icon "
        >
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Bộ lọc tìm kiếm
      </S.CategoryTitle>
      <S.FilterGroup>
        <S.FilterGroupHeader>Khoản giá</S.FilterGroupHeader>
        <S.PriceRange>
          <S.PriceRangeGroup>
            <S.PriceRangeInput placeholder="Từ" />

            <S.PriceRangeLine />
            <S.PriceRangeInput placeholder="Đến" />
          </S.PriceRangeGroup>
         
            <S.PriceErrorMessage>
              Vui lòng điền khoảng giá phù hợp
            </S.PriceErrorMessage>
         
          <S.PriceRangeButton >
            Áp dụng
          </S.PriceRangeButton>
        </S.PriceRange>
      </S.FilterGroup>
      <S.FilterGroup>
        <S.FilterGroupHeader>Đánh giá</S.FilterGroupHeader>
        <RatingStars />
      </S.FilterGroup>
      <S.RemoveFilterButton>Xóa tất cả</S.RemoveFilterButton>
    </div>
  );
}
