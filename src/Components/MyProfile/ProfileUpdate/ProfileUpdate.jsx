"use client";

import { authClient } from "@/lib/auth-client";
import { Person, PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const ProfileUpdate = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());

    await authClient.updateUser({
      image: data.image,
      name: data.name,
    });
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary" className={""}>
          {" "}
          <PencilToSquare></PencilToSquare>
          Update your Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Person className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Profile</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField className="w-full" name="image" type="text">
                      <Label>Image URL</Label>
                      <Input placeholder="Enter your Image URL" />
                    </TextField>

                    <Modal.Footer>
                      <Button type="submit" slot="close" className={"w-full"}>
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdate;
