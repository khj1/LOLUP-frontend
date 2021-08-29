import React, { useState, useCallback } from "react";
import Categories from '../buttons/Categories'
import DuoList from "./DuoList";

function Home() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <DuoList category={category} />
    </div>
  );
}

export default Home;
