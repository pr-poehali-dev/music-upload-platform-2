import { useState } from "react";
import TrackCard from "./TrackCard";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e0ab8ca-167a-400b-9981-d40a3b31d107/files/e62a7f88-522d-4de0-b269-208ac5196870.jpg";

const genres = ["Все", "Электронная", "Рок", "Хип-хоп", "Джаз", "Lo-Fi", "Инди"];

const mockTracks = [
  { title: "Midnight Drive", artist: "Neon Pulse", duration: "3:42", plays: 15400, genre: "Электронная", coverUrl: HERO_IMAGE },
  { title: "Городские огни", artist: "Стеклянный ветер", duration: "4:15", plays: 8200, genre: "Инди" },
  { title: "Digital Rain", artist: "Byte Collective", duration: "2:58", plays: 22100, genre: "Lo-Fi", coverUrl: HERO_IMAGE },
  { title: "Рассвет", artist: "Тихий шум", duration: "5:01", plays: 6700, genre: "Джаз" },
  { title: "Thunder Road", artist: "Crimson Tide", duration: "3:33", plays: 11800, genre: "Рок" },
  { title: "Flow State", artist: "MC Wavez", duration: "3:19", plays: 31200, genre: "Хип-хоп", coverUrl: HERO_IMAGE },
  { title: "Кассета", artist: "Ретро FM", duration: "4:47", plays: 4300, genre: "Lo-Fi" },
  { title: "Solar Flare", artist: "Aurora Signal", duration: "3:55", plays: 19500, genre: "Электронная" },
];

const CatalogSection = () => {
  const [activeGenre, setActiveGenre] = useState("Все");

  const filteredTracks = activeGenre === "Все"
    ? mockTracks
    : mockTracks.filter(t => t.genre === activeGenre);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Каталог</h2>
            <p className="text-muted-foreground mt-1">Исследуй свежие треки от независимых артистов</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            Все треки <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeGenre === genre
                  ? "bg-primary text-white"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTracks.map((track, i) => (
            <div key={i} style={{ animation: `slide-up 0.5s ease-out ${i * 0.08}s forwards`, opacity: 0 }}>
              <TrackCard {...track} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
