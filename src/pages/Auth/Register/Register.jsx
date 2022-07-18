import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../../assets/styles/untils";
import { unwrapResult } from '@reduxjs/toolkit'
import InputPassword from "../../../components/InputPassword/InputPassWord";
import InputText from "../../../components/InputText/InputText";
import { path } from "../../../constants/path";
import { rules } from "../../../constants/rule";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import { register } from '../auth.slice'
import * as S from "./Register.style"


export default function Register() {
  
 
  
  
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: '',
    }
  })
//  const handleRegister=data =>{}
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      navigate(path.home)
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
}   

  return (
    
    <div>
      
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormTitle>Đăng Ký</S.FormTitle>
            
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues("email")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={field.onChange}
                      value={getValues("password")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: (v) =>
                        v === getValues("password") || "Mật khẩu không khớp",
                    },
                  }}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Nhập lại mật khẩu"
                      name="confirmedPassword"
                      onChange={field.onChange}
                      value={getValues("confirmedPassword")}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassword" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng Ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn Đã Có Tài Khoản ?</span>
              <Link to={path.login} className="link">
                Đăng Nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  );
}
