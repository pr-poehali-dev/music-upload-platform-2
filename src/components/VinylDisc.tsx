import { useState } from "react";

interface VinylDiscProps {
  size?: number;
  imageUrl?: string;
  isPlaying?: boolean;
  className?: string;
}

const VinylDisc = ({ size = 300, imageUrl, isPlaying = false, className = "" }: VinylDiscProps) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 groove-line vinyl-shadow ${isPlaying ? 'animate-spin-slow' : ''}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 rounded-full" style={{
          background: `repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,255,255,0.04) 2.5px, transparent 3px)`
        }} />

        <div
          className="absolute rounded-full overflow-hidden border-2 border-zinc-700"
          style={{
            width: size * 0.35,
            height: size * 0.35,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="cover" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/80 to-glow/80" />
          )}
        </div>

        <div
          className="absolute rounded-full bg-zinc-900 border border-zinc-600"
          style={{
            width: 8,
            height: 8,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.03) 30deg, transparent 60deg, transparent 180deg, rgba(255,255,255,0.02) 210deg, transparent 240deg)`
          }}
        />
      </div>

      {isPlaying && (
        <div className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            boxShadow: `0 0 ${size * 0.2}px ${size * 0.05}px hsl(var(--primary) / 0.2)`
          }}
        />
      )}
    </div>
  );
};

export default VinylDisc;
