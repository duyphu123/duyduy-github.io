import React from "react";


import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Footer from "../../components/Footer/Footer";
import Register from "../../pages/Auth/Register/Register";


export default function RegisterLayout({childrent, title}) {
  return (
    <div>
        <HeaderRegister title={title}/>
        <Register/>
        {childrent}
      <Footer />
    </div>
  );
}
