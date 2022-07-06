import React from "react";
import Navbar from "../Navbar/Navbar";
import Popover from "../Popover/Popover";
import * as S from "./Header.style";
import usePopover from "../../hooks/usePopover";

export default function Header() {
  const { activePopover, hidePopover, showPopover } = usePopover();
  return (
    <S.StyledHeader>
      <div className="container">
        <Navbar />
        <S.SearchWrap>
          <S.Logo to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 269.231 50"
            >
              <defs>
                <pattern
                  id="patternLogo"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  viewBox="0 0 530 95"
                >
                  <image
                    width={530}
                    height={95}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhIAAABfCAYAAAC9ZC4kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQzNUE1OThENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQzNUE1OTlENjI3MTFFQUJDOTI5NjNDMjAyQkNFMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDM1QTU5NkQ2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDM1QTU5N0Q2MjcxMUVBQkM5Mjk2M0MyMDJCQ0UyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtMJt2kAAAPtSURBVHja7Nzbbts6FEDB0ND//zL7mhg1oqoSuS8zjwdBj8SbV4RYY875BQBwxcsQAABCAgAQEgCAkAAAhAQAgJAAAB5wGIJyznyfdwT4N7vPg/GCOGdid/91HnkiYWPZhHvG17gCJXgiAYDfuv3Sc5knEgCAkAAAhAQAICQAACEBACAkAAAhAQAICQCgBi+kAoCfMr95dvmLtzyRAACEBAAgJAAAIQEACAkAACEBAAgJAEBIAABCAgBo7uk3W+54O9hIeu3Dcty2ZnaN/yx6b7PovM3C69F5l/M+QryB86h8c8muezaPihno/z8Kj+0oNn9P39s0Z/Zb8JDZ/nl7FFqYla57NtpgM/A1jaLjPYrO393zNt2X/SYmfvd6YDH4IDOmVe5vFh73WXh8ZpDxibgenXeEDQkRYXOJnV73JgLNmXmLY+vTHN/awIFB1bmb1iViIkdIeBrhWn1wujdjIZCczU1j4uh2wwGu28F9fQxGwY1v7p7/APVHfM67p/dE6zV2JFuUFaJn+FAz/o0Owifmzrzlm7Pq89Y6JlaGxAg26RGue3w5FLuP/9i4trPO3RPzNjff45Pz5rwTE4/yx5Z54sf4u7+z/+YIMHaj+Nq4e4w7zFkHLX8xfFmgPiyxtjCuxu6262wXE55IAMT5IBQpseb66pOiVjEhJADgXFSICSEBAMuCokVMCAkAuBYUZ6JiVg8MIbGfr38C5I+KKzFR4vw/rAEf8gDOu1uC4rdwGN9+dr79bNo/tPVEAgDuj4px4mfeQyNlzAkJAHg2KD693v1vsZEuKIQEAKyLijMxkSoohAQArA2KM//tPSjCRoWQAICYgfEpKoQEAHApJsIFha9/3jOpAM47Vgvx1VFPJAAgd9BtfUIhJAAgf0x87YoJIQEAdWJCSAAAeWJiVUh4hzsAFIwJTyQEEIDzTkykCIlpc2Fuja25syeo5bVhkUZYqMPman9YmtOc42zunHcEs+uFVDPQpsmyuTq+LMaBZh7pOWdejpXIq/GEW6hYK/XHwtwZh6shJYAXhgQ4gI2J6wQh0XLDOmgAAcgnnkosDAkxQcVD19rIOT7mznknJpKGROYNbHNhPdQYK3NnjMTEYsfDC3Um3VwWjcOVXPvd/DnvVsSEdbYwJLJv7syLZRQaC+sn17XYNzmvxYejmAgdEgBQLSb4xtc/AQAhAQAICQBASAAAQgIAQEgAAEICABASAICQAACa82ZLAPjJa7D/gScSAICQAACEBAAgJAAAIQEAICQAACEBAAgJAKAGL6QCoINpCIQEdXhrHLDyvBERQgIA/PISkb+RAACEBAAgJAAAIQEAdPBHgAEAruC43nH9c2MAAAAASUVORK5CYII="
                  />
                </pattern>
              </defs>{" "}
              <rect
                id="header__logo--bg"
                width="269.231"
                height={50}
                fill="url(#patternLogo)"
              />
            </svg>
          </S.Logo>
          <S.StyledForm>
            <S.StyledInput placeholder="Tìm kiếm sản phẩm" />
            <S.StyledButton type="submit">
              <svg
                height={19}
                viewBox="0 0 19 19"
                width={19}
                className="shopee-svg-icon "
              >
                <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-1016 -32)">
                    <g>
                      <g transform="translate(405 21)">
                        <g transform="translate(611 11)">
                          <path d="m8 16c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8zm0-2c-3.3137085 0-6-2.6862915-6-6s2.6862915-6 6-6 6 2.6862915 6 6-2.6862915 6-6 6z" />
                          <path d="m12.2972351 13.7114222 4.9799555 4.919354c.3929077.3881263 1.0260608.3842503 1.4141871-.0086574.3881263-.3929076.3842503-1.0260607-.0086574-1.414187l-4.9799554-4.919354c-.3929077-.3881263-1.0260608-.3842503-1.4141871.0086573-.3881263.3929077-.3842503 1.0260608.0086573 1.4141871z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </S.StyledButton>
          </S.StyledForm>
          <S.Cart onMouseEnter={showPopover} onMouseLeave={hidePopover}>
            <S.CartContainer>
              <S.CartIcon to="">
                <svg
                  viewBox="0 0 26.6 25.6"
                  className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
                >
                  <polyline
                    fill="none"
                    points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth="2.5"
                  />
                  <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                  <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                </svg>

                <S.CartNumberBadge>1</S.CartNumberBadge>
              </S.CartIcon>
              <Popover active={activePopover}>
                <S.PopoverContent>
                  <S.PopoverTitle>Sản phẩm mới thêm</S.PopoverTitle>

                  <S.MiniProductCart>
                    <S.MiniProductCartImg src="" />
                    <S.MiniProductCartTitle>iphone</S.MiniProductCartTitle>
                    <S.MiniProductCartPrice>đ1</S.MiniProductCartPrice>
                  </S.MiniProductCart>

                  <S.PopoverFooter>
                    <S.MoreProduct>
                      <span>1 sản phẩm vào giỏ</span>
                    </S.MoreProduct>
                    <S.ButtonShowCart to="">Xem giỏ hàng</S.ButtonShowCart>
                  </S.PopoverFooter>
                </S.PopoverContent>
              </Popover>
            </S.CartContainer>
          </S.Cart>
        </S.SearchWrap>
      </div>
    </S.StyledHeader>
  );
}
