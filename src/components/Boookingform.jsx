import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';  // Import custom styles

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 border border-gray-300 rounded-lg md:mx-20 md:h-32 mx-auto">
        <p className='md:mr-auto '>Book Now</p>
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex flex-col md:flex-row w-full mb-4 md:mb-0">
          <input type="text" placeholder="Destination" className="flex-1 p-2 md:px-3 border border-gray-300 rounded-lg md:rounded-l-lg mb-4 md:mb-0" />
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check in"
            className="p-2 border border-gray-300 w-full md:w-auto md:flex-1 mb-4 md:mb-0"
            calendarClassName="custom-datepicker"  // Apply custom styles
          />
          <span className="hidden md:block p-2 border border-gray-300">-</span>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check out"
            className="p-2 border border-gray-300 w-full md:w-auto md:flex-1 mb-4 md:mb-0 md:rounded-r-lg"
            calendarClassName="custom-datepicker"  // Apply custom styles
          />
          <button className="p-2 bg-red-600 text-white rounded-lg ml-0 md:ml-2">Find a house</button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
