"use client";
import React, { useState, useEffect } from "react";
import { collectionItems } from "@/data/data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
const LightCollection: React.FC = () => {
  const itemsPerPage = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = collectionItems.length;

  // Function to go to the next slide
  const goToNextSlide = () => {
    const newIndex =
      currentIndex + itemsPerPage >= totalItems
        ? 0
        : currentIndex + itemsPerPage;
    setCurrentIndex(newIndex);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const newIndex =
      currentIndex - itemsPerPage < 0
        ? totalItems - itemsPerPage
        : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div
      className="container mx-auto mt-10 p-4 md:p-8 flex justify-center items-center flex-col"
      style={{
        background:
          "linear-gradient(rgba(249, 248, 255, 1), rgba(243, 249, 255, 1)",
      }}>
      <div className="text-3xl font-bold text-center mb-4 md:text-5xl">
        Collection Spotlight
      </div>
      <div className="text-center text-sm md:text-base mb-6 md:mb-12">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </div>

      <div className=" container collection-card-container w-[1085.75px] h-[624px]  flex justify-center items-center flex-wrap">
        <div className="container  collection-cards w-[ 58.75rem] h-[100%]   flex justify-center items-center flex-wrap ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide  "
            data-bs-ride="carousel">
            <div className="carousel-inner">
              {collectionItems
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } carousel-image flex collect`}>
                    <div
                      className="inner-card w-[226.1px] h-[700px] ml-28   drop-shadow-[0_0px_4px_#d6dce9]"
                      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                      <div className="w-[226.1px] h-[401.25px]">
                        <img src={item.imageUrl} alt="" className="imgs" />
                        <span className="start-circle1 mt-8 relative">srt</span>
                        <span className="" style={{ color: "#818A97" }}>
                          ----------------------
                        </span>

                        <span className="end-circle1"> en </span>
                      </div>
                      <div className="text-center mt-7">
                        <h1 className="font-medium text-[17px]">{item.name}</h1>
                        <p className="font-normal text-[14px]">
                          oct 15 | sun|4.30 pm
                        </p>
                        <p className="font-normal text-[14px] leading-5">
                          {item.place}
                        </p>
                      </div>
                      <div className="w-[213px] h-[36px] bg-black text-[12.73px] font-medium leading-4 p-[10px] text-center m-2 text-white">
                        <button>{item.action}</button>
                      </div>
                    </div>

                    {collectionItems
                      .slice(currentIndex + 1, currentIndex + itemsPerPage)
                      .map((item, index) => (
                        <div
                          className="inner-card w-[226.1px] h-[
    624px] ml-12 drop-shadow-[0_0px_4px_#d6dce9]" key={index}
                          style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
                          <div className="w-[226.1px] h-[401.25px]">
                            <img src={item.imageUrl} alt="" className="imgs" />
                            <span
                              className="start-circle1 mt-8 relative"
                              >
                              srt
                            </span>
                            <span className="" style={{ color: "#818A97" }}>
                              ----------------------
                            </span>

                            <span className="end-circle1"> en </span>
                          </div>
                          <div className="text-center mt-7">
                            <h1 className="font-medium text-[17px]">
                              {item.name}
                            </h1>
                            <p className="font-normal text-[14px]">
                              oct 15 | sun|4.30 pm
                            </p>
                            <p className="font-normal text-[14px] leading-5">
                              {item.place}
                            </p>
                          </div>
                          <div className="w-[213px] h-[36px] bg-black text-[12.73px] font-medium leading-4 p-[10px] text-center m-2 text-white">
                            <button>{item.action}</button>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
            <button
              className="carousel-control-prev btns"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
              onClick={goToPrevSlide}>
              <span className="">
                <FcPrevious className="icons" />
              </span>
            </button>
            <button
              className="carousel-control-next btns ml-[2rem]"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
              onClick={goToNextSlide}>
              {/* <span
              className="carousel-control-next-icon  btns"
              aria-hidden=""></span> */}
              <span className="">
                <FcNext className="icons" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightCollection;
