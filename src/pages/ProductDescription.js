import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import useDetails from "../Contexts/DescriptionContext";

const ProductDescription = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const singleId = data.filter((myid) => {
    return myid?.id == id;
  });
  useEffect(() => {
    setPrice(singleId[0].price);
  }, [singleId]);

  const {
    inDate,
    setInDate,
    outDate,
    setOutDate,
    currentDate,
    setPrice,
    setInTime,
    setOutTime,
    totalPrice,
  } = useDetails();

  let date = JSON.stringify(inDate);
  date = date.slice(1, 11);
  let maxDate = JSON.stringify(outDate);
  maxDate = maxDate.slice(1, 11);

  const handleReserve = () => {
    navigate("/checkout", { state: totalPrice });
  };
  const handleDate = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    const date = newDate;
    setInTime(newTime);
    setInDate(date);
  };

  const handleDate2 = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    const date = newDate;
    setOutDate(date);
    setOutTime(newTime);
  };

  return (
    <div className=" mx-auto p-5 mt-10 grid grid-cols lg:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          {singleId[0].typeofplace}, {singleId[0].name}
        </h1>
        <img
          src={singleId[0].image}
          className="rounded-lg shadow-lg w-full"
          alt="no image found"
        />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{singleId[0].description}</p>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 ">
        <h2 className="text-3xl font-semibold mb-6">Reserve your stay</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Check-in Date</label>
            <input
              type="date"
              name="date"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 text-sm cursor-pointer"
              min={currentDate}
              max={maxDate}
              onChange={handleDate}
            />
          </div>
          <div>
            <label className="block text-gray-700">Check-out Date</label>
            <input
              type="date"
              name="mail"
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 text-sm cursor-pointer"
              onChange={handleDate2}
              min={date}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium">Price per night</span>
            <span className="text-lg">{singleId[0].price} /night</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-medium">All Taxes (14%)</span>
            <span className="text-lg">
              {(singleId[0].price * 14) / 100}
            </span>
          </div>
          <div className="flex justify-between font-semibold text-xl mt-4">
            <span>Total</span>
            <span>{outDate && inDate && totalPrice}</span>
          </div>
        </div>
        {outDate && inDate && (
          <button
            type="button"
            onClick={handleReserve}
            className="mt-4 w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center"
          >
            Reserve
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
