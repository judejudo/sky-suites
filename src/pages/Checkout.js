import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useDetails from "../Contexts/DescriptionContext";
import axios from "axios";
import AlipayLogo from "../assets/logos/alipay.png";
import AmericanExpressLogo from "../assets/logos/amexpress.png";
import ApplePayLogo from "../assets/logos/applepay.png";
import DinersLogo from "../assets/logos/dinersclub.png";
import DiscoverLogo from "../assets/logos/discover.png";
import GooglePayLogo from "../assets/logos/googlepay.png";
import JCBLogo from "../assets/logos/jcb.png";
import KlarnaLogo from "../assets/logos/klarna.png";
import MaestroLogo from "../assets/logos/maestro.png";
import MastercardLogo from "../assets/logos/mastercard.png";
import PaypalLogo from "../assets/logos/paypal.png";
import SamsungPayLogo from "../assets/logos/samsungpay.png";
import TrustlyLogo from "../assets/logos/trustly.png";
import UnionPayLogo from "../assets/logos/unionpay.png";
import VisaLogo from "../assets/logos/visa.png";
import WeChatLogo from "../assets/logos/wechat.png";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Contexts/Context";
import { FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setInDate, setOutDate } = useDetails();
  const data = useContext(DataContext);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const { totalPrice, apartmentId, evaluatedNights, singleId } = location.state || {};

  // useEffect(() => {
  //   console.log(totalPrice);
  //   console.log(evaluatedNights);
  // });
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

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const orderResponse = await axios.post(
        "https://vivapayment.vercel.app/create-order",
        {
          amount: totalPrice, // Directly use the variable, no curly braces
          customerTrns: "Transaction description",
          email: email, // Directly use the variable, no curly braces
          fullName: name, // Directly use the variable, no curly braces
          requestLang: "en",
        },
        {
          headers: {
            "Content-Type": "application/json", // Use application/json for JSON payload
          },
        }
      );

      const orderCode = orderResponse.data.orderCode;
      // console.log(orderCode);

      // Redirect to payment page
      window.location.href = `https://www.vivapayments.com/web2?ref=${orderCode}&color=ff6e01`;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };
  let priceWithTax = singleId.price_per_night * 1.14;

  return (
    <div className="py-5 mt-24 lg:mt-[170px] font-luxjost">
      {/* <div className=" mx-auto bg-white shadow-lg rounded-lg md:max-w-xl ">
        <div className="">
          <div className="w-full p-4 px-5 py-5">
            <span className="text-sm font-medium">Customer Information</span>
            <form onSubmit={formSubmit}>
              <div>
                <input
                  type="text"
                  name="mail"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <input
                type="text"
                name="name"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Full name*"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />

              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Address*"
                required
              />
              <div className="grid md:grid-cols-3 md:gap-2">
                <input
                  type="text"
                  name="mail"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Country*"
                />
                <input
                  type="text"
                  name="mail"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="City*"
                />
                <input
                  type="text"
                  name="mail"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Zipcode(optional)"
                />
              </div>
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Phone Number*"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
              />
              <div className="flex justify-between items-center pt-2">
                <Link
                  to={-1}
                  className="h-12 w-24 text-red-400 text-xs font-medium"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="h-12 w-48 rounded font-medium text-xs bg-red-400 text-white hover:bg-[#ff6e01] cursor-pointer transition-colors duration-300 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    `Proceed to Payment (${totalPrice})`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <Link to={-1} className="h-12 w-24 text-red-400  font-medium flex  ml-6 text-2xl">
        <FaArrowLeft className="mr-2" />
        Back
      </Link>
      <div className="grid md:grid-cols-2 gap-4 grid-row">
        <div className=" border shadow-xl rounded-xl md:ml-5 p-5">
          <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row ">
              <div className="">
                {singleId && (
                  <>
                    <img
                      src={getImage(singleId.main_photo_url)}
                      className="shadow-lg rounded-lg md:h-[150px] md:mx-auto md:w-[200px]"
                      alt="no image found"
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col md:justify-center md:pl-5 ">
                <h className="text-2xl">
                  {singleId.hotel_name}
                </h>
                <h>Entire unit</h>
                <h>{singleId.rating} rating </h>
              </div>
            </div>
            <div className="border border-t-1 border-t-gray-600 mt-4"></div>
            <h className="my-3 text-xl font-semibold">Price details</h>
            <div className="flex">
              <h>€{priceWithTax.toFixed(2)} x {evaluatedNights} nights</h>
              <h className="ml-auto">€{totalPrice}</h>
            </div>
            <div className="flex pt-2">
              <h className="font-medium">Total</h>
              <h className="ml-auto">€{totalPrice}</h>
            </div>
          </div>
        </div>
        <div className=" flex flex-col ">
          <div className="md:mx-auto text-2xl font-semi items-center mt-12">
            {" "}
            CUSTOMER BILLING INFORMATION{" "}
          </div>
          <form onSubmit={formSubmit} className="">
            <div className="flex flex-col md:mx-32 gap-2 ">
              <input
                type="text"
                name="name"
                className="border rounded border-orange-300  h-10 focus:outline-none focus:border-orange-600 px-2  text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="text"
                name="email"
                className="border border-t-12 border-orange-300 rounded h-10  focus:outline-none focus:border-orange-600 px-2  text-sm"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center  pt-2">
              <button
                type="submit"
                className="h-12 mx-auto md:w-[500px]  rounded font-medium text-lg bg-red-400 text-white hover:bg-[#ff6e01] cursor-pointer transition-colors duration-300 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  `Proceed To Payment `
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <p className="text-xl font-medium mt-5 mb-7">
          Accepted Payment Methods
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-w-2xl w-full">
          {[
            VisaLogo,
            MastercardLogo,
            AmericanExpressLogo,
            KlarnaLogo,
            ApplePayLogo,
            GooglePayLogo,
            SamsungPayLogo,
            PaypalLogo,
            DinersLogo,
            DiscoverLogo,
            AlipayLogo,
            WeChatLogo,
            TrustlyLogo,
            UnionPayLogo,
            JCBLogo,
            MaestroLogo,
          ].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-1 py-1 bg-gray-100 rounded-full"
            >
              <img
                src={logo}
                alt={`Payment Logo ${index + 1}`}
                className="h-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;

