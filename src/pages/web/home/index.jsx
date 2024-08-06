//import layout
import React from "react";

//import layout web
import LayoutWeb from "../../../layouts/web";

//import Slider component
import Slider from '../../../components/web/slider';

function Home() {
  return (
    <React.Fragment>
      <LayoutWeb>
      
        <Slider />

        <div className="container mt-5">
            <h1>Home</h1>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}

export default Home;