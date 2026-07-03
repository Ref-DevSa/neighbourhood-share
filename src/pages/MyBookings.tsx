import React from "react";
import { Link } from "react-router-dom";
import type { Booking as BookingType } from "../types/Booking";

function MyBookings() {
  let bookings: BookingType[] = [];

  try {
    const raw = localStorage.getItem("ns_bookings");
    bookings = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read bookings", e);
  }

  if (!bookings.length) {
    return (
      <main style={{ padding: 20 }}>
        <h1>My Bookings</h1>
        <p>No bookings yet.</p>
        <Link to="/">Browse items</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>My Bookings</h1>
      <ul>
        {bookings.map((b) => (
          <li key={b.id} style={{ marginBottom: 12 }}>
            <strong>{b.item.name}</strong>
            <div>
              {b.startDate} → {b.endDate} ({b.totalDays} days)
            </div>
            <div>Total: R{b.totalCost}</div>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Browse</Link>
    </main>
  );
}

export default MyBookings;
