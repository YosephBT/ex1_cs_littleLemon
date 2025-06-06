import { useState, useEffect } from "react";
const BookingForm = (props) => {
  const [bookingData, setBookingData] = useState({
    booking_date: "",
    booking_time: "",
    guests: 0,
    occasion: "",
  });
  useEffect(() => {
    console.log(props);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
    props.dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });

  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setATime(() => props.dispatch(bookingData));
    console.log("Form submitted:", bookingData);
    setBookingData({
      booking_date: "",
      booking_time: "",
      guests: 0,
      occasion: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="booking_date">Booking Date:</label>
          <input
            type="date"
            id="booking_date"
            onChange={handleChange}
            name="booking_date"
            value={bookingData.bookingData}
            required
          />
        </div>
        <div>
          <label htmlFor="booking_time">Booking Time:</label>
          <select name="booking_time" id="booking_time" onChange={handleChange}>
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
          <select name="occasion" onChange={handleChange} id="occasion">
            <option value=""> Select Occasion</option>
            <option
              selected={bookingData.occasion === "Birthday"}
              value="Birthday"
            >
              Birthday
            </option>
            <option
              selected={bookingData.occasion === "Anniversary"}
              value="Anniversary"
            >
              Anniversary
            </option>
          </select>
        </div>
        <div>
          <input type="submit" value="Make Your reservation" />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
