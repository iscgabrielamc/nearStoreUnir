import { useState } from "react";

function ProductFilter({ onFilter }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ query, category });
  };

  return (
    <form className="nearstore-filter" onSubmit={handleSubmit}>
      <input
        className="nearstore-filter__input"
        type="text"
        placeholder="Buscar por nombre o marca..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="nearstore-filter__select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        
      >
        <option value="all">Todas las categorías</option>
        <option value="Audio">Audio</option>
        <option value="Wearables">Wearables</option>
        <option value="Periféricos">Periféricos</option>
      </select>
      <button className="nearstore-filter__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default ProductFilter;
