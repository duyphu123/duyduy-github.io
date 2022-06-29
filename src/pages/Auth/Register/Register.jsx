import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../assets/styles/untils";
import InputText from "../../../components/InputText/InputText";
import { path } from "../../../constants/path";
import *as S from "./Register.style";

export default function Register(){
    return (
    <div>
        <S.StyledRegister>
            <S.Container className="container">
                <S.Banner />
                <S.FormWrapper>
                    <S.FormTitle>
                        Đăng Ký
                    </S.FormTitle>
                    <S.Form noValidate>
                        <S.FormControl><InputText type="email" name= "email" placeholder="Email" /></S.FormControl>
                        <S.FormControl></S.FormControl>
                        <S.FormControl></S.FormControl>
                        <S.FormButton>
                           <Button type="submit">
                            Đăng Ký
                           </Button>
                        </S.FormButton>
                    </S.Form>
                    <S.FormFooter>
                        <span>Bạn Đã Có Tài Khoản ?</span>
                        <Link to={path.login} className="link">Đăng Nhập</Link>
                    </S.FormFooter>
                </S.FormWrapper>

            </S.Container>
        </S.StyledRegister>

    </div>
    )
};
