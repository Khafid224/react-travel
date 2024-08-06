import React from "react";

//import component Header
import Header from "../components/web/header";

//import component Footer
import Footer from "../components/web/footer";

const LayoutWeb = ({ children }) => {
  return (
    <React.Fragment>
      <Header/>

        {children}

      <Footer />
    </React.Fragment>
  );
};

export default LayoutWeb;