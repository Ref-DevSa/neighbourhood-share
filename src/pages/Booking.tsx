import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Booking.css";
import { items } from "../data/items";

function Booking() {
  const { id } = useParams();

  const item = items.find((currentItem) => currentItem.id === Number(id));

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  function handleNext(event: React.FormEvent) {
    event.preventDefault();

    if (!startDate || !endDate) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (end < start) {
      alert("End date must be same or after start date.");
      return;
    }

    navigate("/booking-review", {
      state: {
        item,
        startDate,
        endDate,
      },
    });
  }

  return (
    <main className="booking-container">
      <h1>Book Item</h1>

      <form onSubmit={handleNext}>
        <label>
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            required
          />
        </label>

        <label>
          End Date
          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            required
          />
        </label>

        <button type="submit">Continue</button>
      </form>
    </main>
  );
}

export default Booking;
