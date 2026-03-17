"use client";

export default function RacingTrackBackground() {
  return (
    <div className="fixed left-12 top-0 h-full w-12 z-40 flex justify-center">

      {/* Track Road */}
      <div className="relative h-full w-6 bg-gray-900 border-l-4 border-r-4 border-gray-700">

        {/* Animated dashed center line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 track-dash"></div>

      </div>

    </div>
  );
}