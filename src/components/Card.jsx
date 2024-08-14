import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import { SearchContext } from "../Contexts/SearchContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa";

const Card = ({ hotels, hasSearched }) => {
  const { input } = useContext(SearchContext);
  const data1 = useContext(DataContext);

  const filteredData = data1.filter((myid) => {
    let location = myid.city.toLowerCase();
    return location === input.toLowerCase();
  });

  const filterGetData =
    filteredData && filteredData.length !== 0
      ? filteredData
      : input?.length !== 0 && filteredData.length === 0
        ? "No Data Found"
        : data1;

  const getImage = (imagePath) => {
    try {
      if (imagePath.startsWith("https")) {
        return imagePath;
      }
      return require(`../${imagePath}`);
    } catch (err) {
      console.error(`Image not found: ${imagePath}`);
      return null;
    }
  };

  const displayedHotels = hasSearched ? hotels : filterGetData;

  return (
    <div className="mx-auto px-8 sm:px-16 md:mt-32 font-luxjost">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-3">
        {typeof displayedHotels === "string"

          ? displayedHotels
          : displayedHotels.map(({ main_photo_url, city, hotel_name, label, rating, price_per_night, hotel_id }) => {
            const imageUrl = getImage(main_photo_url);
            return (
              <Link key={hotel_id} to={`/description/${hotel_id}`}>
                <div className="m-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
                  <div>
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={hotel_name}
                        className="rounded-lg h-[200px] w-[300px] md:h-[300px] md:w-[400px]"
                      // style={{ height: "200px", width: "300px" }}
                      />
                    ) : (
                      <div
                        className="rounded-lg bg-gray-200"
                        style={{ height: "200px", width: "300px" }}
                      >
                        <p className="text-center text-gray-500">No image found</p>
                      </div>
                    )}
                  </div>

                </div>
                <div className="m-3 pr-3">
                  <div className="flex">
                    <div><FaMapMarkerAlt size={20} color="red" /></div>
                    <h2 className="md:font-semibold  md:text-lg ">{city}</h2>
                    <div className="font-semibold flex md:ml-auto"><div className="md:ml-32 ml-10"><FaStar size={20} color="gold" /></div>{rating}</div>
                  </div>
                  <div className="ml-5">
                    <h2 className="text-gray-400">{hotel_name}</h2>
                    <h2 className="text-gray-400">{label} rooms</h2>
                    <h2 className="font-semibold text-gray-700">€{price_per_night}/night</h2>
                  </div>

                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
