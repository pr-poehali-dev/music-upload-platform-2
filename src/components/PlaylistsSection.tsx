import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e0ab8ca-167a-400b-9981-d40a3b31d107/files/e62a7f88-522d-4de0-b269-208ac5196870.jpg";

const playlists = [
  { title: "Ночной Драйв", tracks: 24, coverUrl: HERO_IMAGE, gradient: "from-violet-600/40 to-blue-600/40" },
  { title: "Утренний Lo-Fi", tracks: 18, gradient: "from-amber-500/40 to-orange-600/40" },
  { title: "Рабочий Ритм", tracks: 32, coverUrl: HERO_IMAGE, gradient: "from-emerald-500/40 to-teal-600/40" },
  { title: "Инди Открытия", tracks: 15, gradient: "from-pink-500/40 to-rose-600/40" },
  { title: "Вечерний Джаз", tracks: 21, gradient: "from-yellow-500/40 to-amber-600/40" },
  { title: "Электро Волна", tracks: 28, coverUrl: HERO_IMAGE, gradient: "from-cyan-500/40 to-blue-600/40" },
];

const PlaylistsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Плейлисты</h2>
            <p className="text-muted-foreground mt-1">Подборки для любого настроения</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
            Создать плейлист <Icon name="Plus" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {playlists.map((playlist, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              style={{ animation: `slide-up 0.5s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
            >
              {playlist.coverUrl ? (
                <img src={playlist.coverUrl} alt={playlist.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${playlist.gradient}`} />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-bold text-lg text-white">{playlist.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Icon name="Music" size={14} className="text-white/60" />
                  <span className="text-sm text-white/60">{playlist.tracks} треков</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Icon name="Play" size={18} className="text-white ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistsSection;
