
import React from 'react';

type Photo = {
  id: number;
  src: string;
  alt: string;
};

type PhotoGridProps = {
  photos: Photo[];
};

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-square rounded-lg overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
