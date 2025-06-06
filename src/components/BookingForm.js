import { useState } from "react";
const BookingPage = () => {
    const [bookingData, setBookingData] = useState({booking_date:'',booking_time:'',guests:0,occasion:''});
    const [availableTimes, setAvailableTimes]=useState([]);

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setBookingData({...bookingData,[name]:value})
    }

    const submitHandler = (e)=>{
        e.preventDefault();
         console.log('Form submitted:', bookingData);
        setBookingData({booking_date:'',booking_time:'',guests:0,occasion:''});
    }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label for="booking_date">Booking Date:</label>
          <input type="date" id="booking_date" onChange={handleChange} name="booking_date" value={bookingData.bookingData} required />
        </div>
        <div>
          <label for="booking_date">Booking Time:</label>
          <input type="time" id="booking_time" onChange={handleChange} name="booking_time" value={bookingData.booking_time} required  />
        </div>
        <div>
          <label for="guests">Number of Guests:</label>
          <input type="number" id="guests" onChange={handleChange} name="guests" min="1" max="10" value={bookingData.guests}  required />
        </div>
        <div>
          <label for="occasion">Occasion:</label>
          <select name="occasion" onChange={handleChange} id="occasion">
            <option value=""> Select Occasion</option>
            <option selected={bookingData.occasion === 'Birthday'} value="Birthday">Birthday</option>
            <option selected={bookingData.occasion ==='Anniversary'} value="Anniversary">Anniversary</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Make Your reservation" />
        </div>
      </form>
    </>
  );
};

export default BookingPage;
