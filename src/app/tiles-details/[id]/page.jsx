import { tilesData } from "@/lib/fetchData";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const TilesDetailPage = async ({ params }) => {
  const { id } = await params;

  const tiles = await tilesData();

  const targetTiles = tiles.find((tile) => tile.id === id);

  console.log(targetTiles, "target tiles");

  return (
    <Card className="border max-w-210  mx-auto my-10 border-[#FF653F] rounded-lg p-3">
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        <div className="flex-1">
          <Image
            src={targetTiles.image}
            alt={targetTiles.title}
            width={600}
            height={600}
            className="rounded-lg object-cover h-100 aspect-square"
          ></Image>
        </div>

        <div className="space-y-3 md:space-y-5 flex-1">
          <Card.Header className="space-y-3 md:space-y-5">
            <Card.Title className="font-bold text-2xl text-[#FF653F]">
              {targetTiles.title}
            </Card.Title>

            <div className="flex justify-between items-center ">
              <Chip className="bg-[#FF653F] text-white">
                Category: {targetTiles.category}
              </Chip>
              <Chip className="bg-[#FF653F] text-white">
                {targetTiles.inStock ? "In stock" : "Out of stock"}
              </Chip>
            </div>

            <Card.Description>{targetTiles.description}</Card.Description>

            <p>Dimensions: {targetTiles.dimensions}</p>

            <div className="flex items-center justify-between text-lg font-semibold">
              <p>Material: {targetTiles.material}</p>
              <p className="text-[#FF653F]">Price: ${targetTiles.price}</p>
            </div>
          </Card.Header>
        </div>
      </div>
    </Card>
  );
};

export default TilesDetailPage;
