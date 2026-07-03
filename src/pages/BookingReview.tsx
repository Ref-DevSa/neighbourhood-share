import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/BookingReview.css";

function BookingReview() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state;

  if (!booking) {
    return <p>No booking information found.</p>;
  }

  function confirmBooking() {
    navigate("/confirmation", {
      state: booking,
    });
  }

  return (
    <main className="review-container">
      <h1>Review Your Booking</h1>

      <div className="review-card">

        <h2>{booking.item.name}</h2>

        <p>
          <strong>Owner:</strong> {booking.item.owner}
        </p>

        <p>
          <strong>Price:</strong> R{booking.item.price} per day
        </p>

        <p>
          <strong>Start Date:</strong> {booking.startDate}
        </p>

        <p>
          <strong>End Date:</strong> {booking.endDate}
        </p>

      </div>

      <div className="review-buttons">

        <Link to={`/booking/${booking.item.id}`}>
          Back
        </Link>

        <button onClick={confirmBooking}>
          Confirm Booking
        </button>

      </div>
    </main>
  );
}

export default BookingReview;