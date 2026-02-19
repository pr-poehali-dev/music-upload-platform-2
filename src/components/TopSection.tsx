import Icon from "@/components/ui/icon";
import Equalizer from "./Equalizer";
import { useState } from "react";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e0ab8ca-167a-400b-9981-d40a3b31d107/files/e62a7f88-522d-4de0-b269-208ac5196870.jpg";

const topTracks = [
  { position: 1, title: "Digital Rain", artist: "Byte Collective", plays: "31.2K", change: "up", coverUrl: HERO_IMAGE },
  { position: 2, title: "Flow State", artist: "MC Wavez", plays: "28.7K", change: "up", coverUrl: HERO_IMAGE },
  { position: 3, title: "Midnight Drive", artist: "Neon Pulse", plays: "22.1K", change: "same" },
  { position: 4, title: "Solar Flare", artist: "Aurora Signal", plays: "19.5K", change: "down" },
  { position: 5, title: "Городские огни", artist: "Стеклянный ветер", plays: "15.4K", change: "up" },
  { position: 6, title: "Thunder Road", artist: "Crimson Tide", plays: "11.8K", change: "down" },
  { position: 7, title: "Рассвет", artist: "Тихий шум", plays: "8.2K", change: "same" },
  { position: 8, title: "Кассета", artist: "Ретро FM", plays: "6.7K", change: "up" },
];

const TopSection = () => {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <Icon name="TrendingUp" size={28} className="inline-block mr-2 text-primary" />
            Топ-чарт
          </h2>
          <p className="text-muted-foreground mt-2">Самые прослушиваемые треки этой недели</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {topTracks.map((track, i) => (
            <div
              key={i}
              onClick={() => setPlayingIdx(playingIdx === i ? null : i)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                playingIdx === i ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/30 border border-transparent'
              }`}
              style={{ animation: `slide-up 0.4s ease-out ${i * 0.06}s forwards`, opacity: 0 }}
            >
              <div className={`w-8 text-center font-bold text-lg ${track.position <= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                {track.position}
              </div>

              <div className="flex items-center justify-center w-5">
                {track.change === "up" && <Icon name="TrendingUp" size={14} className="text-green-500" />}
                {track.change === "down" && <Icon name="TrendingDown" size={14} className="text-red-400" />}
                {track.change === "same" && <Icon name="Minus" size={14} className="text-muted-foreground" />}
              </div>

              <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 relative">
                {track.coverUrl ? (
                  <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-glow/20 flex items-center justify-center">
                    <Icon name="Music" size={18} className="text-primary/50" />
                  </div>
                )}
                {playingIdx === i && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Equalizer barCount={3} />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm truncate text-foreground">{track.title}</div>
                <div className="text-xs text-muted-foreground truncate">{track.artist}</div>
              </div>

              <div className="flex items-center gap-1 text-muted-foreground">
                <Icon name="Headphones" size={14} />
                <span className="text-sm">{track.plays}</span>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20">
                <Icon name={playingIdx === i ? "Pause" : "Play"} size={14} className="text-primary" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSection;
