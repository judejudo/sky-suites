import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDetails from "../Contexts/DescriptionContext";
import axios from "axios";
import AlipayLogo from '../assets/logos/alipay.png';
import AmericanExpressLogo from '../assets/logos/amexpress.png';
import ApplePayLogo from '../assets/logos/applepay.png';
import DinersLogo from '../assets/logos/dinersclub.png';
import DiscoverLogo from '../assets/logos/discover.png';
import GooglePayLogo from '../assets/logos/googlepay.png';
import JCBLogo from '../assets/logos/jcb.png';
import KlarnaLogo from '../assets/logos/klarna.png';
import MaestroLogo from '../assets/logos/maestro.png';
import MastercardLogo from '../assets/logos/mastercard.png';
import PaypalLogo from '../assets/logos/paypal.png';
import SamsungPayLogo from '../assets/logos/samsungpay.png';
import TrustlyLogo from '../assets/logos/trustly.png';
import UnionPayLogo from '../assets/logos/unionpay.png';
import VisaLogo from '../assets/logos/visa.png';
import WeChatLogo from '../assets/logos/wechat.png';


const Checkout = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setInDate, totalPrice, setOutDate } = useDetails();
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //////
      // console.log("Client ID:", clientId);
      // console.log("Client Secret:", clientSecret);
      // // Get access token
      // const tokenResponse = await axios.post(
      //   "/connect/token",
      //   new URLSearchParams({
      //     grant_type: "client_credentials",
      //   }),
      //   {
      //     auth: {
      //       username: clientId,
      //       password: clientSecret,
      //     },
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //     },
      //   }
      // );

      // const accessToken = tokenResponse.data.access_token;
      // console.log("Access Token:", accessToken);

      // Create payment order
      // Create payment order
      const orderResponse = await axios.post(
        "https://vivapayment.vercel.app/create-order",
        {
          amount: totalPrice, // Directly use the variable, no curly braces
          customerTrns: "Transaction description",
          email: email, // Directly use the variable, no curly braces
          fullName: name, // Directly use the variable, no curly braces
          requestLang: "en"
        },
        {
          headers: {
            "Content-Type": "application/json", // Use application/json for JSON payload
          },
        }
      );

      const orderCode = orderResponse.data.orderCode;
      console.log(orderCode);

      // Redirect to payment page
      window.location.href = `https://www.vivapayments.com/web2?ref=${orderCode}&color=ff6e01`;
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div className="py-5 mt-24 lg:mt-[170px]">
      <div className=" mx-auto bg-white shadow-lg rounded-lg md:max-w-xl ">
        <div className="">
          <div className="w-full p-4 px-5 py-5">
            {/* <div className="flex flex-row">
                  <h2 className="text-3xl font-semibold">Athletic</h2>
                  <h2 className="text-3xl text-green-400 font-semibold">Greens</h2>
                </div> */}

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
              {/* <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Apartment, suite, etc. (optional)"
              /> */}
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
                {/* <button
                  type="submit"
                  className="h-12 w-48 rounded font-medium text-xs bg-red-400 text-white"
                >
                  Proceed to Payment ({totalPrice})
                </button> */}
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
      </div>
      <div className="mt-6 flex flex-col items-center">
        <p className="text-sm font-medium mt-5 mb-7">Accepted Payment Methods</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 max-w-2xl w-full">
          {[VisaLogo, MastercardLogo, AmericanExpressLogo, KlarnaLogo, ApplePayLogo, GooglePayLogo, SamsungPayLogo, PaypalLogo, DinersLogo, DiscoverLogo, AlipayLogo, WeChatLogo, TrustlyLogo, UnionPayLogo, JCBLogo, MaestroLogo].map((logo, index) => (
            <div key={index} className="flex items-center justify-center px-1 py-1 bg-gray-100 rounded-full">
              <img src={logo} alt={`Payment Logo ${index + 1}`} className="h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
