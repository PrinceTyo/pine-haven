"use client";

import { useState } from "react";
import Image from "next/image";

export default function RoomGallery({
  images,
  roomName,
}: {
  images: { image: string }[];
  roomName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const MAIN_HEIGHT = 528;
  const GAP = 16;

  const thumbnailCount = images.length - 1;
  const thumbnailHeight =
    thumbnailCount > 1
      ? (MAIN_HEIGHT - GAP * (thumbnailCount - 1)) / thumbnailCount
      : MAIN_HEIGHT;

  return (
    <div className="flex items-start gap-4">
      <div className="w-[20%] flex flex-col gap-4">
        {images.map((item, index) => {
          if (index === activeIndex) return null;
          return (
            <Image
              key={item.image}
              src={item.image}
              alt={roomName}
              width={370}
              height={230}
              onClick={() => setActiveIndex(index)}
              style={{ height: `${thumbnailHeight}px` }}
              className="w-full object-cover rounded-sm cursor-pointer hover:opacity-80 transition"
            />
          );
        })}
      </div>
      <div className="w-[80%]">
        <Image
          src={images[activeIndex].image}
          alt={roomName}
          width={770}
          height={430}
          priority
          className="w-full h-132 object-cover rounded-sm"
        />
      </div>
    </div>
  );
}
