"use client";
export default function Home() {
  return (
    <div className="w-full">
      {/*회원정보 및 계획 리스트 */}
      <div className="flex mt-4 w-full h-[300px] rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center p-8 w-[25%] bg-[#87CEEB] rounded-l-lg">
          <div className="w-[100px] h-[100px] rounded-full bg-[#e0e0e0]"/>
          <p className="mt-4 text-[16px]">회원이름</p>
          <button className="mt-auto w-full py-[10px] px-[15px] text-[16px] bg-white rounded-3xl">
            내 계획 작성하기
          </button>
        </div>
        <div className="flex p-[20px] w-[75%] rounded-r-lg bg-gray-300">
          <div className="p-[20px] w-1/3 h-full bg-[url('/ticket3.png')] bg-contain bg-center">
            <p>asdasd</p>
          </div>
        </div>
      </div>
      {/* 여행 계획 리스트 */}
      <div className="flex flex-col mt-[10px]">
        <h4 className="text-[24px] font-bold letter-normal">내 여행 계획</h4>
        <div>
          <div>assds</div>
        </div>
      </div>

    </div>
  );
};