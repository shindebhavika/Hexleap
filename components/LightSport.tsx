import React from "react";
import items from "@/data/data";

const LightSport : React.FC= () =>{
  return (
    <div
    className="  container Sports  min-h-[
    1778px] w-[
    1444px] top-[-1221px] left-[-2019px] flex  justify-center flex-col items-center">
    <div className=" container w-[80px]h-[41px]  left-[10%] flex ">
      <h1 className=" font-bold text-[24px]  inline-block  mt-4 border-rgba mr-[900px]">
        Sports
      </h1>
    </div>

    <div className="m-[3rem] items-center gap-[14px]  flex-wrap flex ">
      {items.map((item, index) => (
        <div key={index} className=" p-2  w-[237px] h-[511px]
        drop-shadow-[0_0px_4px_rgba(0,0,0,0.5)] " style={{backgroundColor:"rgba(247, 247, 248, 1)"}}>
          <div
            className=" w-[217px] h-[
385.31px] mb-3">
            <img src={item.imageUrl} alt="" />
            <a href="" className="font-medium text-[17px] flex mt-2">
              {" "}
              {item.name}
            </a>
          </div>
          <div className="h-[54px] w-[217px] p-[2px] pl-[10px] relative flex items-center" style={{ backgroundColor: "rgba(247, 247, 248, 1)", borderRadius: "10px solid rgba(247, 247, 248, 1);" }}>

            <p>
              <span className="text-[12px]">Total Events </span>
              <br />
              <span className="text-[14px]">{item.totalEvents} Events</span>
            </p>
            <p className="ml-12">
              <span className="text-[12px]">Sport</span> <br />
              <span className="text-[14px]"> {item.sport}</span>
            </p>
          </div>
        </div>
      ))}

      <div className=" p-2 w-[237px] h-[511px] relative   drop-shadow-[0_0px_4px_rgba(0,0,0,0.5)] " style={{backgroundColor:"rgba(247, 247, 248, 1)"}}>
        <div className="bg-black h-[25px] w-[47.78px] items-center justify-center absolute top-0 right-3 mt-2">
          <p className="ml-2  text-white">Ad</p>
        </div>
        <div className=" w-[217px] h-[240px] ">
          <img src="last.png" alt="" />
        </div>
        <div className="relative flex items-center p-3">
          <p className="text-[12.8px]">
            <a href="" className="font-semibold text-[20px] flex mt-2 mb-4">
              Advertisement title
            </a>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>

    <div>
      {" "}
      <button className="font-semibold  w-[124px] p-2  relative absolute btn  text-white">
        See More
      </button>
    </div>
  </div>
  );
}

export default LightSport;
