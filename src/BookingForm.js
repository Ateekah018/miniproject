import React, { useState } from 'react';

function BookingForm({ onAddBooking }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, date, time };
    onAddBooking(newBooking);
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">ฟอร์มการจอง</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="รายละเอียดต้นทาง,ปลายทาง"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">จอง</button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
