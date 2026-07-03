import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ItemDetails from "./pages/ItemDetails";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import BookingReview from "./pages/BookingReview";
import MyBookings from "./pages/MyBookings";
import { AuthProvider, RequireAuth } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route
            path="/booking/:id"
            element={
              <RequireAuth>
                <Booking />
              </RequireAuth>
            }
          />
          <Route
            path="/booking-review"
            element={
              <RequireAuth>
                <BookingReview />
              </RequireAuth>
            }
          />
          <Route
            path="/confirmation"
            element={
              <RequireAuth>
                <Confirmation />
              </RequireAuth>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <RequireAuth>
                <MyBookings />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
