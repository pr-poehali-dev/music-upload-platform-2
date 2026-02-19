import { useState } from "react";
import Icon from "@/components/ui/icon";
import Equalizer from "./Equalizer";

interface TrackCardProps {
  title: string;
  artist: string;
  coverUrl?: string;
  duration: string;
  plays: number;
  genre: string;
}

const TrackCard = ({ title, artist, coverUrl, duration, plays, genre }: TrackCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-3 hover:border-primary/30 transition-all duration-300 hover:glow-box cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
        {coverUrl ? (
          <img src={coverUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-glow/30 flex items-center justify-center">
            <Icon name="Music" size={40} className="text-primary/60" />
          </div>
        )}

        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered || isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          {isPlaying ? (
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Equalizer barCount={4} />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors">
              <Icon name="Play" size={20} className="text-white ml-0.5" />
            </div>
          )}
        </div>

        <span className="absolute bottom-2 right-2 text-xs bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full text-white/80">
          {duration}
        </span>
      </div>

      <h3 className="font-semibold text-sm text-foreground truncate">{title}</h3>
      <p className="text-xs text-muted-foreground truncate mt-0.5">{artist}</p>

      <div className="flex items-center justify-between mt-2">
        <span className="text-[10px] uppercase tracking-wider text-primary/80 font-medium bg-primary/10 px-2 py-0.5 rounded-full">{genre}</span>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Icon name="Headphones" size={12} />
          <span className="text-[11px]">{plays >= 1000 ? `${(plays / 1000).toFixed(1)}K` : plays}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
