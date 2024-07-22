import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Main from "../components/Main";
import BookingForm from "../components/Boookingform";

export default function Dashboard() {
  return (
    <>  
        <Banner />
        <BookingForm/>
        <Main />
        <Card/>
    </>
   
  );
}
