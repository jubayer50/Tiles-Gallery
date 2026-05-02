import Search from "@/Components/AllTiles/Search";

import { tilesData } from "@/lib/fetchData";

const AllTilesPage = async () => {
  const tiles = await tilesData();

  return (
    <div className="my-7 md:my-10 px-2">
      <div className="space-y-3 text-center">
        <h2 className="font-bold text-2xl">All tiles page</h2>
        <p className="max-w-170 mx-auto">
          Explore all our available tiles in one place. Whether you prefer
          sleek, rustic, or luxurious designs, we have something for everyone.
        </p>
      </div>

      <Search tiles={tiles}></Search>
    </div>
  );
};

export default AllTilesPage;
