import React, { useState } from "react";
import WorldMapSVG from "../component/WorldMapSVG";
import "../styles/SearchMap.css";

export default function SearchMapPage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="SearchMap-container">
      <div className="SearchMap-searchbar">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="국가명을 입력하세요"
        />
      </div>
      <div className="SearchMap-mapwrap">
        <WorldMapSVG />
      </div>
    </div>
  );
} 