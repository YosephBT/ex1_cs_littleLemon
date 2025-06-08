import BookingForm from "../components/BookingForm";
const BookingPage = (props) => {
  return (
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
  );
};

export default BookingPage;
