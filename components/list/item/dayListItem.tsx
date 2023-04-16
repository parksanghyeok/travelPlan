import React from "react";

const DayListItem = () => {
  return (
    <li className="flex w-full h-[150px] mb-2 bg-[#fff] rounded-md shadow-listShadow">
      <div className="w-[150px] h-full bg-[#ccc] rounded-l-md">

      </div>
      <div className="p-[10px]">
        <p>월드컵 경기장</p>
        <p>서울 마포구 성산동 515-39</p>
        <p>여기가서 뭐하고 뭐하고 뭐함</p>
      </div>
    </li>
  )
};

export default DayListItem;