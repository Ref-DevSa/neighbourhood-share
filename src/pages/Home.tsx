import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ItemCard from "../components/ItemCard";
import { items } from "../data/items";
import "../styles/Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [distance, setDistance] = useState("");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || item.category === category;

    const matchesDistance =
      distance === "" || item.distance <= Number(distance);

    return matchesSearch && matchesCategory && matchesDistance;
  });

  return (
    <>
      <Header />

      <section className="hero">
        <h1>Borrow Tools From Your Neighbours</h1>
        <p>Find useful equipment close to home.</p>

        <SearchBar
          search={search}
          onSearchChange={setSearch}
        />

        <FilterPanel
          category={category}
          distance={distance}
          onCategoryChange={setCategory}
          onDistanceChange={setDistance}
        />
      </section>

      <section className="item-grid">
        {filteredItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
          />
        ))}
      </section>
    </>
  );
}

export default Home;