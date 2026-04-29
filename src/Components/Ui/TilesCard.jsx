import { Button, Card } from "@heroui/react";
import Image from "next/image";

const TilesCard = ({ tile }) => {
  return (
    <Card className="border rounded-lg p-3">
      <div className="">
        <Image
          src={tile.image}
          alt={tile.title}
          width={300}
          height={300}
          className="rounded-lg object-cover w-full aspect-square"
        ></Image>
      </div>

      <div className="">
        <Card.Header className="">
          <Card.Title className="font-bold text-lg">{tile.title}</Card.Title>
          <Card.Description></Card.Description>
        </Card.Header>

        <Card.Footer className="">
          <Button className=" w-full">View Details</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TilesCard;
