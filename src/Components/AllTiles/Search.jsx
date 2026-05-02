"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import TilesCard from "../Ui/TilesCard";

const Search = ({ tiles }) => {
  const [search, setSearch] = useState("");
  const [filteredTiles, setFilteredTiles] = useState(tiles);

  const handleSearchBtn = () => {
    const searchTile = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(search.toLowerCase()),
    );

    setFilteredTiles(searchTile);
  };

  return (
    <div>
      <div className="bg-[#FF653F15] py-2 px-3 rounded-md max-w-200 mx-auto flex items-center justify-between gap-4 mt-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="py-1.5 px-4 flex-1 border border-[#FF653F] rounded-md"
          type="text"
          placeholder="Search tiles"
        />
        <Button
          onClick={handleSearchBtn}
          className={"bg-[#FF653F] py-2 rounded-md text-white"}
        >
          Search
        </Button>
      </div>

      <div className="mt-5 md:mt-7 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredTiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default Search;
