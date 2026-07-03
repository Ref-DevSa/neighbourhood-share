import { Link, useParams } from "react-router-dom";
import { items } from "../data/items";
import "../styles/ItemDetails.css";

function ItemDetails() {
  const { id } = useParams();

  const item = items.find((currentItem) => currentItem.id === Number(id));

  if (!item) {
    return <h2>Item not found.</h2>;
  }

  return (
    <main className="details-container">
      <img src={item.image} alt={item.name} className="details-image" />

      <section className="details-info">
        <h1>{item.name}</h1>

        <p>
          <strong>Category:</strong> {item.category}
        </p>

        <p>
          <strong>Owner:</strong> {item.owner}
        </p>

        <p>
          <strong>Distance:</strong> {item.distance} km away
        </p>

        <p>
          <strong>Price:</strong> R{item.price} per day
        </p>

        <p>{item.description}</p>

        <Link to={`/booking/${item.id}`} className="book-button">
          Book Now
        </Link>
      </section>
    </main>
  );
}

export default ItemDetails;