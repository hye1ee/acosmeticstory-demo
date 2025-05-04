"use client";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center">
        <div className="w-full my-8 overflow-hidden shadow-lg bg-black">
          <video
            className="w-full h-auto max-h-[80vh] object-contain block"
            controls
            playsInline
            preload="metadata"
            controlsList="nodownload"
            autoPlay
            muted
            loop
          >
            <source src="/videos/teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>
    </div>
  );
}
