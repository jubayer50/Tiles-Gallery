import Banner from "@/Components/HomePage/Banner/Banner";
import TilesCard from "@/Components/Ui/TilesCard";
import { tilesData } from "@/lib/fetchData";

const HomePage = async () => {
  const tiles = await tilesData();
  console.log(tiles);
  return (
    <div className="my-12 md:my-20">
      <Banner></Banner>

      <div className="mt-10 md:mt-15 px-2">
        <h2 className="font-bold text-2xl">Featured Tiles</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {tiles.slice(0, 4).map((tile) => (
            <TilesCard key={tile.id} tile={tile}></TilesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
