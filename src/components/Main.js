import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Main = () => {
  return (
    <main>
      <Router>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      </Router>
    </main>
  );
};

export default Main;
