import React, {} from "react";
import { Routes, Route } from "react-router-dom";


import NotFound from "./pages/NotFound/NotFound";

import RegisterLayout from "./layouts/RegisterLayout/RegisterLayout";
import RegisterLayoutLogin from "./layouts/RegisterLayoutLogin/RegisterLayoutLogin";
import MainLayout from "./layouts/MainLayout/MainLayout";

export default function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
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
