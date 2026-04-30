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
          <div className="space-y-2">
            <h2 className="font-bold text-2xl">Featured Tiles</h2>
            <p className="max-w-180 mx-auto">
              Discover our handpicked selection of premium tiles designed to
              elevate your space. Each piece combines durability with modern
              aesthetics.
            </p>
          </div>

          <div className="bg-gray-100 w-full max-w-310 mx-auto py-2 my-4 px-2 flex items-center gap-1 ">
            <Button className={"rounded-none px-2 md:px-4 bg-[#FF653F]"}>
              New Arrivals
            </Button>

            <div className="overflow-hidden">
              <Marquee pauseOnHover speed={35}>
                {tiles.slice(0, 4).map((tile) => (
                  <div key={tile.id} className="">
                    <span>
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
