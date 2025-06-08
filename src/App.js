import "./App.css";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import Chicago from "./components/Chicago";
import Specials from "./components/Specials";
import CustomersSay from "./components/CustomersSay";
import Main from "./components/Main";
import { useReducer,useEffect } from "react";

import { fetchAPI, submitAPI } from './api/api';


export const initializeTimes = (selectedDate) => {
 const times = fetchAPI(selectedDate);
return times;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return initializeTimes(state.payload);
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );


  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/about" element={<Chicago />} />
          <Route path="/menu" element={<Specials />} />
          <Route path="/testimonials" element={<CustomersSay />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
