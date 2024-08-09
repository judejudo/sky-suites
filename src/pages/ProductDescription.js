import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import useDetails from "../Contexts/DescriptionContext";

const ProductDescription = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const singleId = data.filter((mydata) => mydata.id == id);

  useEffect(() => {
    if (singleId[0]) {

      setPrice(singleId[0].price);
    }
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
    const apartmentId = singleId[0]?.id; // Get the id of the selected apartment
    navigate("/checkout", { state: { totalPrice, apartmentId } });
  };

  const handleDate = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    setInTime(newTime);
    setInDate(newDate);
  };

  const handleDate2 = (e) => {
    const newDate = new Date(e.target.value);
    const newTime = new Date(e.target.value).getTime();
    setOutDate(newDate);
    setOutTime(newTime);
  };

  const getImage = (imagePath) => {
    try {
      return require(`../${imagePath}`);
    } catch (err) {
      console.error(`Image not found: ${imagePath}`);
      return null;
    }
  };

  return (
    <div>
      <div className="border-t-2 border-t-orange-500 w-[1330px] mt-[90px] mx-auto"></div>
      <div className="mx-auto p-5  grid grid-cols font-luxjost  lg:grid-cols-2  gap-8 ">
      <div className="">
        {singleId[0] && (
          <>
            <h1 className="text-2xl font-semibold mb-4">
              {singleId[0].typeofplace}, {singleId[0].name}
            </h1>
            <img
              src={getImage(singleId[0].image)}
              className="shadow-lg rounded-sm md:h-96 md:mx-auto md:w-[500px]"
              alt="no image found"
            />
          </>
        )}
      </div>
      <div className="bg-white h-96 md:mt-10 shadow-lg rounded-lg p-6 border-t-4 border-t-orange-400 border-b-4 border-b-orange-400">
        <h2 className="text-xl font-semibold mb-6">Reserve your stay</h2>
        {/* <div className="grid grid-cols-2 gap-4 mb-4">
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
        </div> */}
        <div className="mb-4 md:pt-14">
          {singleId[0] && (
            <>
              <div className="flex justify-between">
                <span className="text-lg font-medium">Price per night</span>
                <span className="text-lg">€{singleId[0].price} /night</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg font-medium">All Taxes (14%)</span>
                <span className="text-lg">
                  €{(singleId[0].price * 14) / 100}
                </span>
              </div>
              <div className="flex justify-between  text-xl mt-4">
                <span className="font-semibold text-gray-500">Total</span>
                {/* <span>{outDate && inDate && totalPrice}</span> */}
                <span>€{ totalPrice}</span>
              </div>
            </>
          )}
        </div>
        {/* {outDate && inDate && (
          <button
            type="button"
            onClick={handleReserve}
            className=" w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center"
          >
            Reserve
          </button>
        )} */}
        { (
          <button
            type="button"
            onClick={handleReserve}
            className=" w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center"
          >
            Reserve
          </button>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default ProductDescription;
