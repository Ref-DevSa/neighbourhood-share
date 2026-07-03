import { Link } from "react-router-dom";
import type { Item } from "../types/Item";
import "../styles/Card.css";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />

      <h2>{item.name}</h2>

      <p>{item.category}</p>

      <p>{item.distance} km away</p>

      <p>R{item.price}/day</p>

      <Link to={`/item/${item.id}`}>View Details</Link>
    </div>
  );
}

export default ItemCard;