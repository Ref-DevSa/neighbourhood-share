import type { Item } from "../types/Item";

export const items: Item[] = [
  {
    id: 1,
    name: "Cordless Drill",
    category: "Power Tools",
    distance: 2,
    price: 120,
    owner: "John",
    description: "Perfect for DIY projects around the house.",
    image: "https://picsum.photos/300?1",
  },
  {
    id: 2,
    name: "Ladder",
    category: "Home",
    distance: 5,
    price: 80,
    owner: "Sarah",
    description: "6-metre aluminium ladder.",
    image: "https://picsum.photos/300?2",
  },
  {
    id: 3,
    name: "Camping Tent",
    category: "Camping",
    distance: 8,
    price: 150,
    owner: "Mike",
    description: "4-person waterproof tent.",
    image: "https://picsum.photos/300?3",
  },
  {
    id: 4,
    name: "Pressure Washer",
    category: "Garden",
    distance: 12,
    price: 180,
    owner: "Emma",
    description: "Great for cleaning driveways and patios.",
    image: "https://picsum.photos/300?4",
  }
];