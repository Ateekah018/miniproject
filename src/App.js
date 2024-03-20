import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookingForm from './BookingForm';
import BusList from './BusList';

function App() {
  const [bookingData, setBookingData] = useState([]);

  const addBooking = (newBooking) => {
    setBookingData([...bookingData, newBooking]);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">ระบบจองตั๋วรถตู้</h1>
      <div className="row">
        <div className="col-md-6">
          <BookingForm onAddBooking={addBooking} />
        </div>
        <div className="col-md-6">
          <BusList bookings={bookingData} />
        </div>
      </div>
    </div>
  );
}

export default App;
