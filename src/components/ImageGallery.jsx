import { useState } from "react";

function ImageGallery() {
  const [images, setImages] = useState([
    "https://i.ibb.co/D4yyVsM/image-8.webp",
    "https://i.ibb.co/9NTRvqY/image-7.webp",
    "https://i.ibb.co/BsmBVpT/image-9.webp",
    "https://i.ibb.co/wS54mbS/image-2.webp",
    "https://i.ibb.co/xFw1MRZ/image-1.webp",
    "https://i.ibb.co/VpdQx9W/image-3.webp",
    "https://i.ibb.co/YP3fCDG/image-4.webp",
    "https://i.ibb.co/mF9hh6k/image-5.webp",
    "https://i.ibb.co/YpHQDSj/image-6.webp",
    "https://i.ibb.co/fG1kQrg/image-10.jpg",
    "https://i.ibb.co/D7t7rqc/image-11.jpg",
  ]);

  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImageIndex, setFeatureImageIndex] = useState(0);

  const handleImageClick = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  const handleDeleteImages = () => {
    const remainingImages = images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    setImages(remainingImages);
    setSelectedImages([]);
  };

  const handleSetFeatureImage = () => {
    setFeatureImageIndex(selectedImages[0]);
    setSelectedImages([]);
  };

  return (
      <div className="container">
            <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container relative ${
              selectedImages.includes(index) ? "selected" : ""
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover"
            />
            {selectedImages.includes(index) && (
              <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40 transition-opacity duration-300"></div>
            )}
          </div>
        ))}
        <div className="gallery-options p-4 col-span-full">
          <button
            className="bg-red-500 text-white p-2 m-2 rounded"
            onClick={handleDeleteImages}
          >
            Delete Selected
          </button>
          <button
            className="bg-green-500 text-white p-2 m-2 rounded"
            onClick={handleSetFeatureImage}
          >
            Set as Feature Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
