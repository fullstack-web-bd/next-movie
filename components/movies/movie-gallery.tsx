import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function MovieGalleryImage({ image }) {
  if (!image) {
    return null;
  }

  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <img
        alt=""
        onClick={() => props.setOpenModal("default")}
        key={image}
        src={image}
        className="cursor-pointer w-40 h-40 object-cover rounded-lg"
      />

      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
        size={"5xl"}
        dismissible
      >
        <Modal.Body>
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9">
              <img
                alt=""
                key={image}
                src={image}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
