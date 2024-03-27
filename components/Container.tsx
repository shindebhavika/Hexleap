"use client";

import React, { useState } from "react";
import SportsCard from "./SportsCard";
import CollectionCard from "./CollectionCard";
import LightSport from "./LightSport";
import LightCollection from "./LightCollection";

const Container: React.FC = () => {
  const [isCollectionActive, setIsCollectionActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleCollection = () => {
    setIsCollectionActive((prev) => !prev);
    setIsDarkTheme((prev) => !prev);
    document.body.style.backgroundColor = isCollectionActive
      ? "#F7F7F8"
      : "rgba(41, 43, 50, 1)";
  };

  return (
    <div className="min-h-[100vh] w-[100vw]">
      <div>
        <label className="switch-container ml-20 mt-4">
          <input
            type="checkbox"
            onChange={toggleCollection}
            checked={isCollectionActive}
          />
          <span className="slider"></span>
        </label>
      </div>

      {isDarkTheme ? (
        <div
          className="h-[100vh] w-[100vw]"
          style={{
            backgroundColor: "rgba(41, 43, 50, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}>
          <SportsCard /> <CollectionCard />
        </div>
      ) : (
        <div
          className="min-h-[100vh] w-[100vw] flex flex-col justify-center items-center m-4"
          style={{
            backgroundColor: "rgba(247, 247, 248, 1)",
            color: "rgba(41, 43, 50, 1)",
          }}>
          <LightSport /> <LightCollection />
        </div>
      )}
    </div>
  );
};

export default Container;
