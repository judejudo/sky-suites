import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';  // Import custom styles

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="md:absolute md:top-[320px]  flex flex-col md:left-[150px] bg-white font-luxjost justify-center p-4 md:p-6 shadow-xl mt-10 rounded-3xl mx-3 md:mx-20  max-w-full">
      <p className='md:mr-auto p-1 font-bold text-3xl text-orange-600'>Book Now</p>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col md:flex-row mb-4 md:mb-0 w-full md:space-x-4">
          <input 
            type="text" 
            placeholder="Search Destination" 
            className="flex-1 p-2 md:px-3 border text-lg border-gray-300 rounded-lg md:rounded-l-lg mb-4 h-14 md:w-[500px] md:mr-0" 
          />
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check in"
            className="p-2 border border-gray-300 w-full h-14 md:h-14 rounded-lg md:flex-1 mb-4 md:mb-0"
            calendarClassName="custom-datepicker"  // Apply custom styles
          />
          <span className="hidden md:block p-2 border-gray-300">-</span>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check out"
            className="p-2 border border-gray-300 w-full h-14 md:h-14  rounded-lg md:flex-1 mb-4 md:mb-0 md:rounded-r-lg"
            calendarClassName="custom-datepicker"  // Apply custom styles
          />
          <button className="p-2 bg-orange-600 text-white h-14 w-full md:w-32 rounded-lg ml-0 md:ml-2">Find a House</button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
