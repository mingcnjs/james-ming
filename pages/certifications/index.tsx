import { imageItems } from "@/constants/image.constant";
import Image from "next/image";
import { useState } from "react";

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const handleOpenModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section
        id="certification"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Certifications"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Certifications
          </h2>
        </div>
        <div className="w-full flex flex-wrap">
          {imageItems.map((image, index) => (
            <div className="w-1/2 p-2" key={index}>
              <Image
                className="w-full h-auto transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                src={image.src}
                width={300}
                height={500}
                alt={image.alt}
                onClick={() => handleOpenModal(`${image.src}`)}
              />
            </div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <span
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => handleCloseModal()}
          >
            &times;
          </span>
          <Image
            src={modalImageSrc}
            height={1000}
            width={1000}
            alt="Modal Image"
          />
        </div>
      )}
    </>
  );
};

export default Certifications;
