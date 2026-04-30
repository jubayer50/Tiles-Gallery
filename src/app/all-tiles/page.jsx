import TilesCard from "@/Components/Ui/TilesCard";
import { tilesData } from "@/lib/fetchData";
import { Button } from "@heroui/react";

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

      <div className="bg-[#FF653F20] py-2 px-3 rounded-md max-w-200 mx-auto flex items-center justify-between gap-4 mt-5">
        <input
          className="py-1.5 px-4 flex-1 border border-[#FF653F] rounded-md"
          type="text"
          placeholder="Search tiles"
        />
        <Button className={"bg-[#FF653F] py-2 rounded-md text-white"}>
          Search
        </Button>
      </div>

      <div className="mt-5 md:mt-7 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
