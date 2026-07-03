import { Link, useLocation } from "react-router-dom";
import "../styles/Confirmation.css";
import type { Booking as BookingType } from "../types/Booking";

function Confirmation() {
  const location = useLocation();
  const booking = location.state as BookingType | null;

  if (!booking) {
    return (
      <main className="confirmation-container">
        <h1>No booking data</h1>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="confirmation-container">
      <h1>Booking Confirmed!</h1>

      <p>Your booking has been submitted successfully.</p>

      <p>
        <strong>Item:</strong> {booking.item.name}
      </p>

      <p>
        <strong>Start Date:</strong> {booking.startDate}
      </p>

      <p>
        <strong>End Date:</strong> {booking.endDate}
      </p>

      <p>
        <strong>Total days:</strong> {booking.totalDays}
      </p>

      <p>
        <strong>Total cost:</strong> R{booking.totalCost}
      </p>

      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default Confirmation;