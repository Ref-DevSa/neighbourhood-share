import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function Home() {

const [search,setSearch]=useState("");

return(

<>
<Header/>

<section className="hero">
<h1>Borrow Tools From Your Neighbours</h1>

<p>Find useful equipment near you.</p>

<SearchBar
search={search}
onSearchChange={setSearch}
/>

</section>

</>

);

}

export default Home;