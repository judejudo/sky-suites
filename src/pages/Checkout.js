import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDetails from "../Contexts/DescriptionContext";
import axios from "axios";

const Checkout = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");

  const { setInDate,totalPrice,setOutDate } = useDetails();
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Client ID:", clientId);
      console.log("Client Secret:", clientSecret);

      // Get access token

      const tokenResponse = await axios.post(
        "/connect/token",
        new URLSearchParams({
          grant_type: "client_credentials",
        }),
        {
          auth: {
            username: clientId,
            password: clientSecret,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = tokenResponse.data.access_token;
      console.log("Access Token:", accessToken);

      // Create payment order
      const orderResponse = await axios.get(
        "/api/create-orders",
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
    <div className="py-5 mt-20">
      <div className=" mx-auto bg-white shadow-lg rounded-lg md:max-w-xl ">
        <div className="">
          <div className="w-full p-4 px-5 py-5">
            {/* <div className="flex flex-row">
                  <h2 className="text-3xl font-semibold">Athletic</h2>
                  <h2 className="text-3xl text-green-400 font-semibold">Greens</h2>
                </div> */}

            <span>Customer Information</span>
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
              <input
                type="text"
                name="mail"
                className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <div className="grid md:grid-cols-3 md:gap-2">
                <input
                  type="text"
                  name="mail"
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Zipcode*"
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
                  placeholder="State*"
                />
              </div>
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
                  className="h-12 w-48 rounded font-medium text-xs bg-red-400 text-white"
                >
                  Proceed to Payment ({totalPrice})
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
