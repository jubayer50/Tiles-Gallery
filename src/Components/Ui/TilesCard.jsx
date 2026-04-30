import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const TilesCard = ({ tile }) => {
  return (
    <Card className="border hover:border-[#FF653F] transition delay-150 rounded-lg p-3">
      <div className="relative">
        <Image
          src={tile.image}
          alt={tile.title}
          width={600}
          height={600}
          className="rounded-lg object-cover w-full aspect-square"
        ></Image>

        <Chip className="absolute top-1 right-1 bg-[#FF653F] text-white">
          {tile.category}
        </Chip>
      </div>

      <div className=" mt-2 space-y-3">
        <Card.Header className=" space-y-3">
          <Card.Title className="font-bold text-lg hover:text-[#FF653F]">
            {tile.title}
          </Card.Title>
          <Card.Description className="line-clamp-2">
            {tile.description}
          </Card.Description>

          <p>Dimensions: {tile.dimensions}</p>

          <div className="flex items-center justify-between">
            <p>Material: {tile.material}</p>
            <p className="text-[#FF653F] font-semibold">Price: ${tile.price}</p>
          </div>
        </Card.Header>

        <Card.Footer className="">
          <Button className="bg-[#FF653F] w-full">View Details</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TilesCard;
