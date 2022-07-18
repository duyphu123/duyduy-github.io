import React from 'react'
import * as S from './productItem.style'
import ProductRating from '../ProductRating/ProductRating'
import { Link } from 'react-router-dom'

export default function ProductItem() {
    return (
        <S.Product>
          <Link to="">
            <S.ProductItem>
              <S.ProductItemImage>
                <img src="data:image/png;base64,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" alt=''/>
              </S.ProductItemImage>
              <S.ProductItemInfo>
                <S.ProductItemTitle>iPhone 14 Pro Max 128GB | Chính hãng VN/A</S.ProductItemTitle>
                <S.ProductItemPrice>
                  <S.ProductItemPriceOriginal>
                    34.990.000 đ
                  </S.ProductItemPriceOriginal>
                  <S.ProductItemPriceSale>
                    27.390.000 đ
                  </S.ProductItemPriceSale>
                </S.ProductItemPrice>
                <S.ProductItemMeta>
                  <ProductRating  />
                  <S.ProductItemSold>
                    <span>1.2k</span>
                    <span>Đã bán</span>
                  </S.ProductItemSold>
                </S.ProductItemMeta>
              </S.ProductItemInfo>
            </S.ProductItem>
          </Link>
        </S.Product>
      )
}