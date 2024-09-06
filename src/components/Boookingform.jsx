import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { addDays, format } from 'date-fns';
import data from '../Data/data';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { FaMapMarkerAlt } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = ({ setHotels, setHasSearched }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [location, setLocation] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const onChange = (event) => {
    setLocation(event.target.value);
  }

  const onSearch = async (searchTerm) => {
    setIsSearching(true);
    const defaultCheckIn = addDays(new Date(), 1);
    const defaultCheckOut = addDays(defaultCheckIn, 7);

    const formattedCheckIn = checkInDate ? format(checkInDate, 'yyyy-MM-dd') : format(defaultCheckIn, 'yyyy-MM-dd');
    const formattedCheckOut = checkOutDate ? format(checkOutDate, 'yyyy-MM-dd') : format(defaultCheckOut, 'yyyy-MM-dd');
    // console.log("search:", searchTerm);
    // console.log("latitude:", selectedLocation.lat);
    // console.log("longitude:", selectedLocation.lng);
    // console.log("checkin:", formattedCheckIn);
    // console.log("checkout:", formattedCheckOut);

    if (selectedLocation) {
      try {

        const response = await axios.get('http://api.sky-swift.com/api/foreignApartments', {
          params: {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
            arrival_date: formattedCheckIn,
            departure_date: formattedCheckOut,
          }
        });
        setHotels(response.data);
        setHasSearched(true);
        // console.log(response.data);
      } catch (error) {
        console.error('Error Searching for Apartments', error);
        toast.error('An error occurred while searching. Please try again.');
      } finally {
        setIsSearching(false);
      }
    } else {
      setIsSearching(false);
    }
  }

  return (
    <div className="md:absolute 
  md:top-[320px] 
  md:left-1/2 
  md:transform 
  md:-translate-x-1/2 
  flex 
  flex-col 
  bg-white 
  font-luxjost 
  justify-center 
  p-4 
  md:p-6 
  shadow-xl 
  mt-10 
  rounded-3xl 
  z-30
  mx-3 
  md:mx-0
  max-w-full
  md:max-w-[calc(100%-40px)]">
      <p className='md:mr-auto p-1 font-bold text-3xl text-orange-600'>Book Now</p>
      <p className='md:mr-auto p-1  text-lg text-orange-600'>Welcome to Your Home Away From Home</p>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col md:flex-row mb-4 md:mb-0 w-full md:space-x-4">
          <input
            type="text"
            value={location}
            onChange={onChange}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            placeholder="Search Destination"
            className="flex-1 p-2 md:px-3 border text-lg border-gray-300 rounded-lg md:rounded-l-lg mb-4 h-14 md:w-[500px] md:mr-0"
          />
          {showDropdown && (
            <div className='dropdown mt-20 absolute z-10 w-[400px] bg-white border border-gray-300 rounded-lg max-h-80 overflow-y-auto dropdownleft'>
              {data
                .filter((item) =>
                  item.city.toLowerCase().includes(location.toLowerCase())
                )
                .slice(0, 7)
                .map((item, index) => (
                  <div
                    key={index}
                    className='dropdown-row p-2 hover:bg-gray-100 cursor-pointer flex items-center'
                    onClick={() => {
                      setLocation(item.city);
                      setSelectedLocation(item);
                      setShowDropdown(false);
                    }}
                  >
                    <FaMapMarkerAlt size={15} color="#c3c3c3" /> <span className="ml-1">{item.city}, {item.country}</span>
                  </div>
                ))
              }
            </div>
          )}
          {/* <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            placeholderText="Check in"
            className="p-2 border border-gray-300 w-full h-14 md:h-14 rounded-lg md:flex-1 mb-4 md:mb-0"
            calendarClassName="custom-datepicker"
            dateFormat="yyyy-MM-dd"
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
            calendarClassName="custom-datepicker"
            dateFormat="yyyy-MM-dd"
          /> */}
          <button
            onClick={() => onSearch(location)}
            className="p-2 bg-orange-600 text-white h-14 w-full md:w-32 rounded-lg ml-0 md:ml-2 flex items-center justify-center"
            disabled={isSearching}
          >
            {isSearching ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              'Find a House'
            )}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
