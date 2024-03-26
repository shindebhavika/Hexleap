import React from "react";
import items from "@/data/data";
import img3 from "../public/Images/img3.png";
const SportsCard : React.FC= () =>{
  return (
    <div
      className="Sports  min-h-[
      1778px] w-[
      1444px] top-[-1221px] left-[-2019px] flex ">
      <div className="w-[80px]h-[41px]  left-[10%] flex ">
        <h1 className="font-bold text-[24px]  inline-block  mt-4 border-rgba mr-[900px]">
          Sports
        </h1>
      </div>

      <div className="cards-container   flex ">
        {items.map((item, index) => (
          <div key={index} className="sports-card p-2  w-[237px] h-[511px] ">
            <div
              className="sport-card-img w-[217px] h-[
385.31px] mb-3">
              <img src={item.imageUrl} alt="" />
              <a href="" className="font-medium text-[17px] flex mt-2">
                {" "}
                {item.name}
              </a>
            </div>
            <div className="sport-card-info  relative flex items-center " style={{backgroundColor:"#292B32"}}>
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

        <div className="sports-card p-2 w-[237px] h-[511px] relative">
          <div className="bg-black h-[25px] w-[47.78px] items-center justify-center absolute top-0 right-3 mt-2">
            <p className="ml-2">Ad</p>
          </div>
          <div className="sport-card-img w-[217px] h-[240px] ">
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
        <button className="font-semibold  w-[124px] p-2  relative absolute btn">
          See More
        </button>
      </div>
    </div>
  );
}

export default SportsCard;
