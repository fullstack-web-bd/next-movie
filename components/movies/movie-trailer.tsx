import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export default function MovieTrailer({ movie }) {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const trailerId = movie?.trailer.split("v=")[1];

  return (
    <>
      {!movie?.trailer ? (
        <div className="flex flex-wrap gap-4">
          <div className="w-full text-center text-white font-bold">
            No Trailer Available
          </div>
        </div>
      ) : (
        <>
          <Button color="failure" onClick={() => props.setOpenModal("default")}>
            <i className="bi bi-youtube mr-4"></i> Watch Now
          </Button>

          <Modal
            show={props.openModal === "default"}
            onClose={() => props.setOpenModal(undefined)}
            size={"5xl"}
            dismissible
          >
            <Modal.Body>
              <div className="space-y-6">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${trailerId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}
