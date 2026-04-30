import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const TilesCard = ({ tile }) => {
  return (
    <Card className="border hover:border-[#FF653F] transition delay-150 rounded-lg p-3">
      <div className="relative">
        <Image
          src={tile.image}
          alt={tile.title}
          width={300}
          height={300}
          className="rounded-lg object-cover w-full aspect-square"
        ></Image>

        <Chip className="absolute top-1 right-1 bg-[#FF653F] text-white">
          {tile.category}
        </Chip>
      </div>

      <div className=" mt-2 space-y-2">
        <Card.Header className=" space-y-2">
          <Card.Title className="font-bold text-lg hover:text-[#FF653F]">
            {tile.title}
          </Card.Title>
          <Card.Description></Card.Description>
        </Card.Header>

        <Card.Footer className="">
          <Button className="bg-[#FF653F] w-full">View Details</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TilesCard;
