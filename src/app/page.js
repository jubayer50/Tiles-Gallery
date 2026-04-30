import Banner from "@/Components/HomePage/Banner/Banner";
import TilesCard from "@/Components/Ui/TilesCard";
import { tilesData } from "@/lib/fetchData";
import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const HomePage = async () => {
  const tiles = await tilesData();

  return (
    <div className="my-12 md:my-20">
      <Banner></Banner>

      <div className="mt-10 md:mt-15 px-2">
        <div className=" text-center space-y-2">
          <h2 className="font-bold text-2xl">Featured Tiles</h2>

          <div className="bg-gray-50 p-3 flex items-center gap-2 ">
            <Button className={"rounded-none bg-[#FF653F]"}>
              New Arrivals
            </Button>

            <div className="max-w-290 mx-auto">
              <Marquee pauseOnHover speed={35} className="">
                {tiles.slice(0, 4).map((tile) => (
                  <div key={tile.id} className="">
                    <span className="mr-3 pr-2">
                      {tile.title} | Weekly Feature: Modern Geometric Patterns |
                      Join the Community...
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
          <p></p>
        </div>

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
