import { useState } from "react";
import { Gallery } from "../../pages/gallery/Gallery";

export const Layout = () => {
  const [isGallery, setIsGallery] = useState(false);

  return (
    <main>
      <Gallery isGallery={isGallery} setGalleryView={setIsGallery} />
    </main>
  );
};
