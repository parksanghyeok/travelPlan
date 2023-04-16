import Map from "../../components/map";
import DaysList from "../../components/list/daysList";
import React from "react";

const Main = () => {
  return (
    <>
      <div className="w-[500px] h-full bg-[#fff]">
        <DaysList/>
      </div>
      {/*<Map/>*/}
    </>
  )
};

export default Main;