import Header from "../components/Header";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <h1>Borrow Tools From Your Neighbours</h1>

        <p>
          Find useful equipment near you without buying new.
        </p>
      </section>
    </>
  );
}

export default Home;