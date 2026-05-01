import ProfileUpdate from "@/Components/MyProfile/ProfileUpdate/ProfileUpdate";
import { Card } from "@heroui/react";
import Image from "next/image";

const MyProfilePage = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div>
        <h2 className="text-center font-bold text-2xl mb-5">
          Update Your Profile
        </h2>

        <Card className="border border-[#FF653F] p-6 text-center">
          <div>
            <Image
              src={""}
              alt=""
              width={30}
              height={30}
              className="mx-auto rounded-full border border-[#FF653F]"
            ></Image>

            <div className="mt-4">
              <h2 className="text-bold text-xl">Name</h2>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <ProfileUpdate></ProfileUpdate>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyProfilePage;
