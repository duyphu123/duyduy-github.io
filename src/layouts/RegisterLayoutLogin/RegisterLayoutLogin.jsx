import React from "react";


import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Footer from "../../components/Footer/Footer";
import Login from "../../pages/Auth/Login/Login";


export default function RegisterLayout({childrent, title}) {
  return (
    <div>
        <HeaderRegister title={title}/>
       <Login/>
        {childrent}
      <Footer />
    </div>
  );
}
