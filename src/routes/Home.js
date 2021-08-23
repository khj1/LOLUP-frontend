import React, { useState, useCallback } from "react";
import Categories from "../components/Categories";
import DuoList from "../components/DuoList";

function Home() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <DuoList category={category} />
    </>
  );
}

export default Home;
