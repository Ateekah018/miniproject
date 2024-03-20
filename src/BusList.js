import React from 'react';

function BusList({ bookings }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">รายการตั๋วรถตู้ที่จอง</h2>
        <ul className="list-group">
          {bookings.map((booking, index) => (
            <li key={index} className="list-group-item">
              <strong>ชื่อ:</strong> {booking.name}, {' '}
              <strong>วันที่:</strong> {booking.date}, {' '}
              <strong>เวลา:</strong> {booking.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BusList;
