import React, { useState } from 'react';
import Card from "../components/Card";
import Banner from "../components/Banner";
import Main from "../components/Main";
import BookingForm from "../components/Boookingform";

export default function Dashboard() {
  const [hotels, setHotels] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <>
      <Banner />
      <BookingForm setHotels={setHotels} setHasSearched={setHasSearched} />
      {/* <Main /> */}
      <Card hotels={hotels} hasSearched={hasSearched} />
    </>

  );
}
