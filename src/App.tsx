import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ItemDetails from "./pages/ItemDetails";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import BookingReview from "./pages/BookingReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-review" element={<BookingReview />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
