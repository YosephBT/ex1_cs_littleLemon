import { useState } from 'react';
import { fetchAPI, submitAPI } from '../api/api';


const BookingForm = (props) => {
  const [bookingData, setBookingData] = useState({
    booking_date: '',
    booking_time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'guests' ? parseInt(value) || 1 : value;
    setBookingData({ ...bookingData, [name]: newValue });
    if (name === 'booking_time') {
      props.dispatch({ type: 'UPDATE_TIMES', payload: new Date().toISOString().split("T")[0] });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted:', bookingData);
    props.setATime(bookingData.booking_time);
    // props.dispatch({ type: 'SUBMIT_BOOKING', payload: bookingData });
    submitAPI(bookingData);
    setBookingData({
      booking_date: '',
      booking_time: '',
      guests: 1,
      occasion: '',
    });
    if (props.onSubmit) {
      props.onSubmit(bookingData);
    }
  };

  return (
    <>
      <h2>Book Now</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="booking_date">Booking Date:</label>
          <input
            type="date"
            id="booking_date"
            onChange={handleChange}
            name="booking_date"
            value={bookingData.booking_date} 
            required
          />
        </div>
        <div>
          <label htmlFor="booking_time">Booking Time:</label>
          <select
            name="booking_time"
            id="booking_time"
            onChange={handleChange}
            value={bookingData.booking_time}
            required
          >
            <option value="">Select a time</option>
            {props.availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            onChange={handleChange}
            name="guests"
            min="1"
            max="10"
            value={bookingData.guests}
            required
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion:</label>
          <select
            name="occasion"
            onChange={handleChange}
            id="occasion"
            value={bookingData.occasion}
            required
          >
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <input
            data-testid="btnSubmit"
            type="submit"
            value="Make Your reservation"
          />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
