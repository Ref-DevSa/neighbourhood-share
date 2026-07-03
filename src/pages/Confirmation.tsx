import { Link, useLocation } from "react-router-dom";
import "../styles/Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const booking = location.state;

  return (
    <main className="confirmation-container">
      <h1>Booking Confirmed!</h1>

      <p>Your booking has been submitted successfully.</p>

      <p>
        <strong>Start Date:</strong> {booking.startDate}
      </p>

      <p>
        <strong>End Date:</strong> {booking.endDate}
      </p>

      <Link to="/">Back to Home</Link>
    </main>
  );
}

export default Confirmation;