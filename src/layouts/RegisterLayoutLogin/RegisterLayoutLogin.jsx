import React from "react";


import HeaderRegister from "../../components/HeaderRegister/HeaderRegister";
import Footer from "../../components/Footer/Footer";


export default function RegisterLayout({childrent, title}) {
  return (
    <div>
        <HeaderRegister title={title}/>
       
        {childrent}
      <Footer />
    </div>
  );
}
