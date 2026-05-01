import ProfileUpdate from "@/Components/MyProfile/ProfileUpdate/ProfileUpdate";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Avatar, Card } from "@heroui/react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);

  return (
    <div className="flex items-center justify-center my-20">
      <div>
        <h2 className="text-center font-bold text-[22px] mb-5">
          Update Your Profile
        </h2>

        <Card className="border  p-6 text-center">
          <div>
            <Avatar className="mx-auto w-20 h-20 border border-[#FF653F]">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <div className="mt-4 space-y-1">
              <h2 className="font-bold text-xl">{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3">
            <ProfileUpdate></ProfileUpdate>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyProfilePage;
