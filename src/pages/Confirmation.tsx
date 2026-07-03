import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();

  const booking = location.state;

  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1>Booking Confirmed!</h1>

      <p>Your booking has been submitted.</p>

      <p>
        <strong>Start Date:</strong> {booking.startDate}
      </p>

      <p>
        <strong>End Date:</strong> {booking.endDate}
      </p>

      <Link to="/">Return Home</Link>
    </main>
  );
}

export default Confirmation;