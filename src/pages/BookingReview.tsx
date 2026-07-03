import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/BookingReview.css";
import type { Booking as BookingType } from "../types/Booking";

function daysBetween(startStr: string, endStr: string) {
  const start = new Date(startStr);
  const end = new Date(endStr);
  const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return diff + 1; // inclusive
}

function BookingReview() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingState = location.state as {
    item: any;
    startDate: string;
    endDate: string;
  } | null;

  if (!bookingState) {
    return <p>No booking information found.</p>;
  }

  const { item, startDate, endDate } = bookingState;
  const totalDays = daysBetween(startDate, endDate);
  const totalCost = totalDays * item.price;

  function confirmBooking() {
    const booking: BookingType = {
      id: `${Date.now()}`,
      item,
      startDate,
      endDate,
      totalDays,
      totalCost,
    };

    try {
      const raw = localStorage.getItem("ns_bookings");
      const existing: BookingType[] = raw ? JSON.parse(raw) : [];
      existing.push(booking);
      localStorage.setItem("ns_bookings", JSON.stringify(existing));
    } catch (e) {
      console.error("Failed to save booking", e);
    }

    navigate("/confirmation", { state: booking });
  }

  return (
    <main className="review-container">
      <h1>Review Your Booking</h1>

      <div className="review-card">
        <h2>{item.name}</h2>

        <p>
          <strong>Owner:</strong> {item.owner}
        </p>

        <p>
          <strong>Price per day:</strong> R{item.price}
        </p>

        <p>
          <strong>Start Date:</strong> {startDate}
        </p>

        <p>
          <strong>End Date:</strong> {endDate}
        </p>

        <p>
          <strong>Total days:</strong> {totalDays}
        </p>

        <p>
          <strong>Total cost:</strong> R{totalCost}
        </p>
      </div>

      <div className="review-buttons">
        <Link to={`/booking/${item.id}`}>Back</Link>

        <button onClick={confirmBooking}>Confirm Booking</button>
      </div>
    </main>
  );
}

export default BookingReview;