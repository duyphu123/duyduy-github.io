import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { path } from "./constants/path";
import Home from "./pages/Auth/Home/Home";
import NotFound from "./pages/Auth/NotFound/NotFound";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import RegisterLayoutLogin from "./layouts/RegisterLayoutLogin/RegisterLayoutLogin";

export default function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={<RegisterLayoutLogin title="Đăng Nhập"></RegisterLayoutLogin>}
      />
      <Route
        path="/register"
        element={<RegisterLayout title="Đăng Ký"> </RegisterLayout>}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
