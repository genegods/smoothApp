import React from 'react'
import Navbar from "./Navbar";
import Red from "../pages/Red";
import Blue from "../pages/Blue";
import Yellow from "../pages/Yellow";
import Green from "../pages/Green";

const MainPage = () => {
  return (
    <React.Fragment>
    <section>
      <div className="md:w-3/5 md:mx-auto">
          <Navbar/>
          <Red/>
          <Yellow/>
        <Blue/>
        <Green/>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage