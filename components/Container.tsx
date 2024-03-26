"use client"

import React, { useState } from "react";
import SportsCard from "./SportsCard";
import CollectionCard from "./CollectionCard";

const Container: React.FC = () => {
  // const [isCollectionActive, setIsCollectionActive] = useState(false);

  // const toggleCollection = () => {
  //   setIsCollectionActive((prev) => !prev);
  //   // Change body color
  //   document.body.style.backgroundColor = isCollectionActive ? "white" : "lightblue";
  // };

  return (
    <>
      <div className="min-h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        {/* <div>
          <label className="switch-container">
            <input type="checkbox" onChange={toggleCollection} checked={isCollectionActive} />
            <span className="slider"></span>
          </label>
        </div> */}
        <SportsCard />
        <CollectionCard />
      </div>
    </>
  );
};

export default Container;
