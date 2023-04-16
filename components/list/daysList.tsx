import React, { useState } from "react";
import DayListItem from "./item/dayListItem";
import { userJoin } from "../../api";

const DaysList = () => {
  const [openItem, setOpenItem] = useState(0);
  const days = [1, 2, 3];

  return (
    <div className="w-full">
      <button className="flex items-center justify-center w-full h-[60px] border border-b-[#000] text-[18px] font-bold"
              onClick={() => userJoin({email: 'real@naver.com', password: 123123})}>
        test
      </button>
      {
        days.map((v) => {
          return (
            <div key={'dayItem' + v}>
              <button className="flex items-center justify-center w-full h-[60px] border border-b-[#000] text-[18px] font-bold" onClick={() => setOpenItem(v)}>
                { v }일차
              </button>
              <ul className={`w-full p-[10px] bg-[#ccc] ${openItem === v ? '' : 'hidden'} overScroll`} style={{ height: `calc(100vh - ${60 * days.length}px)` }}>
                {
                  days.map((v) => (
                    <DayListItem/>
                  ))
                }
              </ul>
            </div>
          )
        })
      }
    </div>
  )
};

export default DaysList;