/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

// Temporary sample data - replace with your actual photos later
const samplePhotos = [
  {
    id: 1,
    src: "https://static.zara.net/assets/public/f7ba/f5e1/5f8d47579f04/5fd4d1d1f139/T4922640100-h1/T4922640100-h1.jpg",
    alt: "Photo 1",
    title: "Photo Title 1",
    description: "Photo description 1",
  },
  {
    id: 2,
    src: "https://static.zara.net/assets/public/0875/e394/89254998a286/0f90b7f5f1b5/40293211220-a11/40293211220-a11.jpg",
    alt: "Photo 2",
    title: "Photo Title 2",
    description: "Photo description 2",
  },
  {
    id: 3,
    src: "https://static.zara.net/assets/public/15a0/28df/1b324de382bb/599b9b8fc71d/41542013999-a11/41542013999-a11.jpg",
    alt: "Photo 3",
    title: "Photo Title 3",
    description: "Photo description 3",
  },
  {
    id: 4,
    src: "https://static.zara.net/assets/public/9b12/a47a/656b42b3b484/e5696e086bd6/46199040712-h11/46199040712-h11.jpg",
    alt: "Photo 4",
    title: "Photo Title 4",
    description: "Photo description 4",
  },
  // Add more photos as needed
];

export default function ZinePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {samplePhotos.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-4 group cursor-pointer"
            onClick={() => setSelectedPhoto(photo.id)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ maxHeight: "600px" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-light">{photo.title}</h3>
                <p className="text-white/80 text-sm">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={samplePhotos.find((p) => p.id === selectedPhoto)?.src || ""}
              alt={samplePhotos.find((p) => p.id === selectedPhoto)?.alt || ""}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
