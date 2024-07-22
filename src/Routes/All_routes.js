import Checkout from "../pages/Checkout";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/dashboard.page";
import Error from "../pages/Error";
import Login from "../pages/Login";
import ProductDescription from "../pages/ProductDescription";
import Signup from "../pages/Signup";
import Success from "../pages/Success"; // Import the SuccessPage component
import Fail from "../pages/Fail"; // Import the SuccessPage component

export const allRoutes = [
  {
    id: "1",
    path: "/login",
    component: <Login />,
    isprotected: false,
    issemiprotected: true,
  },
  {
    id: "2",
    path: "/description/:id",
    component: <ProductDescription />,
    isprotected: true,
    issemiprotected: false,
  },
  {
    id: "3",
    path: "/signup",
    component: <Signup />,
    isprotected: false,
    issemiprotected: true,
  },
  {
    id: "4",
    path: "/",
    component: <Dashboard />,
    isprotected: false,
    issemiprotected: false,
  },
  {
    id: "5",
    path: "/checkout",
    component: <Checkout />,
    isprotected: true,
    issemiprotected: false,
  },
  {
    id: "6",
    path: "*",
    component: <Error />,
    isprotected: false,
    issemiprotected: false,
  },
  {
    id: "7",
    path: "/contact",
    component: <ContactUs />,
    isprotected: true,
    issemiprotected: false,
  },
  {
    id: "8", // Ensure the ID is unique
    path: "/success",
    component: <Success />, // Use the SuccessPage component
    isprotected: true,
    issemiprotected: false,
  },
  {
    id: "9", // Ensure the ID is unique
    path: "/fail",
    component: <Fail />, 
    isprotected: true,
    issemiprotected: false,
  },
];
