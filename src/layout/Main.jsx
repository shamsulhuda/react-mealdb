import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg-px-0">
          <Outlet></Outlet>
        </div>
      </>
    </div>
  );
}
