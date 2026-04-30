import TilesCard from "@/Components/Ui/TilesCard";
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

      <div className="mt-5 md:mt-7 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {tiles.map((tile) => (
          <TilesCard key={tile.id} tile={tile}></TilesCard>
        ))}
      </div>
    </div>
  );
};

export default AllTilesPage;
