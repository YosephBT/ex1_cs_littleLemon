import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { Routes, Route } from 'react-router-dom';
import { useReducer } from "react";

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};
const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
