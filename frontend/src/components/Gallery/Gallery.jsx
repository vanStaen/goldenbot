import React, { useEffect, useState } from "react";
import { getUserImages } from "../../calls/getUserImages";
import { Image } from "./Image";

import "./Gallery.css";

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedImages, setFetchedImages] = useState([]);

  const fetchImages = async () => {
    try {
      const images = await getUserImages();
      setFetchedImages(images);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="gallery__main">
      {fetchedImages.map((image, index) => {
        return <Image image={image} key={index} />;
      })}
    </div>
  );
};
