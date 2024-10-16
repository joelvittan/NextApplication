'use client'
import React, { useContext } from "react";
import HomeMain from "../../components/home/HomeMain";
import Header from "../../components/Header/Header";
import "../globals.css";
function page() {
  return (
    <>
    
      <Header/>
      <div className="p-auto  size-min bg-emerald-300 w-screen h-auto">
        <HomeMain className=" font-medium text-black" /> 
      </div>
    </>
  );
}

export default page;
