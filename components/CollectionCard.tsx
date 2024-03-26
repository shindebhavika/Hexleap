"use client";
import React, { useState, useEffect } from "react";
import { collectionItems } from "@/data/data";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
const CollectionCard: React.FC = () => {
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

  // useEffect(() => {
  //   const intervalId = setInterval(goToNextSlide, 3000);
  //   return () => clearInterval(intervalId);
  // }, [currentIndex]);

  return (
    <div
      className="h-[918px] w-[1240px] collection-container p-[43px] "
      style={{
        background: "linear-gradient(rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))",
      }}>
      <div className="text-[50px] leading-[52px] font-bold text-center h-[52px] w-[505px]">
        <h1>Collection Spotlight</h1>
      </div>
      <div className="font-normal text-[14px] leading-[22.65px] align-middle text-center m-7 ml-32  mr-m-32">
        <p>
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <div className="collection-card-container w-[1085.75px] h-[624px] ">
        <div className="collection-cards w-[940px] h-[100%]">
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
                    <div className="inner-card w-[226.1px] h-[700px] ml-24">
                      <div className="w-[226.1px] h-[401.25px]">
                        <img src={item.imageUrl} alt="" className="imgs" />
                        <span className="start-circle mt-8 relative">srt</span>
                        <span className="" style={{color:"#818A97"}}>----------------------</span>
                          
                            <span className="end-circle"> en </span>
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
                      <div className="w-[213px] h-[36px] bg-black text-[12.73px] font-medium leading-4 p-[10px] text-center m-2">
                        <button>{item.action}</button>
                      </div>
                    </div>

                    {collectionItems
                      .slice(currentIndex + 1, currentIndex + itemsPerPage)
                      .map((item, index) => (
                        <div
                          className="inner-card w-[226.1px] h-[
      624px] ml-12">
                         <div className="w-[226.1px] h-[401.25px]">
                        <img src={item.imageUrl} alt="" className="imgs" />
                        <span className="start-circle mt-8 relative">srt</span>
                        <span className="" style={{color:"#818A97"}}>----------------------</span>
                          
                            <span className="end-circle"> en </span>
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
                          <div className="w-[213px] h-[36px] bg-black text-[12.73px] font-medium leading-4 p-[10px] text-center m-2">
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
              className="carousel-control-next mr-[-35px] btns"
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

export default CollectionCard;

// "use client"
// import React from "react";
// import { collectionItems } from "@/data/data";

// const CollectionCard: React.FC = () => {

//   return (
//     <div
//       className="h-[918px] w-[1240px] collection-container p-7"
//       style={{
//         background: "linear-gradient(rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))",
//       }}
//     >
//       <div className="text-[50px] leading-[52px] font-bold text-center h-[52px] w-[505px]">
//         <h1>Collection Spotlight</h1>
//       </div>
//       <div className="font-normal text-[14px] leading-[22.65px] align-middle text-center">
//         <p>
//           Discover extraordinary moments with our Spotlight Collection
//           metatickets—exclusive access to premium events for an unforgettable
//           experience. Grab yours today!
//         </p>
//       </div>

//       <div className="collection-card-container w-[1085.75px] h-[624px]">
//         <div className="collection-cards w-[850px] h-[100%] bg-gray-800">
//           <div className="collection-card w-[257px] h-[100%] flex gap-4" style={{ color: "rgba(255, 255, 255, 1)" }}>

//         {collectionItems.map((item, index) => (
//           <div key={item.id}>
//             <div className="inner-card w-[226.1px] h-[597.91px]">
//               <div className="w-[226.1px] h-[401.25px]">
//                 <img src={item.imageUrl} alt="" />
//                 <span className="start-circle">srt</span>
//                 <span>-----------------------</span>
//                 <span className="start-circle"> en </span>
//               </div>
//               <div className="text-center">
//                 <h1 className="font-medium text-[17px]">{item.name}</h1>
//                 <p className="font-normal text-[14px]">oct 15 | sun|4.30 pm</p>
//                 <p className="font-normal text-[14px] leading-5">{item.place}</p>
//               </div>
//               <div className="w-[213px] h-[36px] bg-black text-[12.73px] font-medium leading-4 p-[10px] text-center">
//                 <button>{item.action}</button>
//               </div>
//             </div>
//           </div>
//         ))}

//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default CollectionCard;
