"use client";

import { useState } from "react";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

export default function ProductGallery({ images, title }) {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="relative h-full w-full">
      <Image src={images[activeProduct]} alt={title} fill sizes="(max-width: 900px) 100vw, 55vw" loading="eager" className="object-contain" />

      <div className="flex gap-4 absolute top-full left-0 z-20 mt-4">
        {images.map((image, index) => (
          <Thumbnail key={index} imgsrc={image} index={index} setActiveProduct={setActiveProduct} isActive={activeProduct === index} />
        ))}
      </div>
    </div>
  );
}
