import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import useDetails from "../Contexts/DescriptionContext";

const ProductDescription = () => {
  const data = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const singleId = data.filter((mydata) => mydata.id == id);

  const [nightsInput, setNightsInput] = useState('1');
  const [evaluatedNights, setEvaluatedNights] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (singleId[0]) {
<<<<<<< HEAD

      setPrice(singleId[0].price);
=======
      // setPrice(singleId[0].price);
      calculateTotalPrice(singleId[0].price, evaluatedNights);
>>>>>>> 820711e630fcd19c219c9e568bc185fe57c17685
    }
  }, [singleId, evaluatedNights]);

  // const {
  //   setPrice,
  // } = useDetails();

  const handleReserve = () => {
    const apartmentId = singleId[0]?.id; // Get the id of the selected apartment
    navigate("/checkout", { state: { totalPrice, apartmentId } });
  };

  const handleNightsChange = (e) => {
    const inputValue = e.target.value;
    setNightsInput(inputValue);

    const newNights = inputValue === '' ? 1 : Math.max(1, parseInt(inputValue) || 1);
    setEvaluatedNights(newNights);

    if (singleId[0]) {
      calculateTotalPrice(singleId[0].price, newNights);
    }
  };

  const calculateTotalPrice = (pricePerNight, numberOfNights) => {
    const subtotal = pricePerNight * numberOfNights;
    const tax = (subtotal * 14) / 100;
    setTotalPrice(subtotal + tax);
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
      <div className="mx-auto p-5 grid grid-cols font-luxjost lg:grid-cols-2 gap-8">
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
          <div className="mb-1">
            <label className="block text-gray-700">Number of Nights</label>
            <input
              type="number"
              min="1"
              value={nightsInput}
              onChange={handleNightsChange}
              className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 text-sm"
            />
          </div>
          <div className="mb-4">
            {singleId[0] && (
              <>
                <div className="flex justify-between">
                  <span className="text-lg font-medium">Price per night</span>
                  <span className="text-lg">€{singleId[0].price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-medium">Number of nights</span>
                  <span className="text-lg">{evaluatedNights}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-lg">€{singleId[0].price * evaluatedNights}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-medium">All Taxes (14%)</span>
                  <span className="text-lg">
                    €{((singleId[0].price * evaluatedNights * 14) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xl mt-4">
                  <span className="font-semibold text-gray-500">Total</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
          {
            evaluatedNights && (
              <button
                type="button"
                onClick={handleReserve}
                className="w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-10 py-2.5 text-center"
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