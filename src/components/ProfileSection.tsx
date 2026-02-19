import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import VinylDisc from "./VinylDisc";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e0ab8ca-167a-400b-9981-d40a3b31d107/files/e62a7f88-522d-4de0-b269-208ac5196870.jpg";

const recentlyPlayed = [
  { title: "Midnight Drive", artist: "Neon Pulse" },
  { title: "Digital Rain", artist: "Byte Collective" },
  { title: "Рассвет", artist: "Тихий шум" },
  { title: "Flow State", artist: "MC Wavez" },
];

const recommendations = [
  { title: "Stellar Waves", artist: "Cosmic DJ", reason: "На основе «Midnight Drive»" },
  { title: "Тени города", artist: "Ноктюрн", reason: "Популярно у твоих друзей" },
  { title: "Bassline Theory", artist: "Sub Zero", reason: "Твой любимый жанр" },
];

const ProfileSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-glow mx-auto mb-4 flex items-center justify-center">
              <Icon name="User" size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Музыкант</h3>
            <p className="text-sm text-muted-foreground mt-1">Слушатель с 2025</p>

            <div className="grid grid-cols-3 gap-2 mt-6">
              <div className="bg-muted/30 rounded-xl p-3">
                <div className="text-lg font-bold text-foreground">47</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Треков</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-3">
                <div className="text-lg font-bold text-foreground">12</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Плейлисты</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-3">
                <div className="text-lg font-bold text-foreground">156</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Часов</div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4 rounded-xl border-border/50 text-foreground">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Icon name="Clock" size={18} className="text-primary" />
              Недавно прослушано
            </h3>
            <div className="space-y-3">
              {recentlyPlayed.map((track, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 cursor-pointer transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-glow/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Music" size={16} className="text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{track.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{track.artist}</div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Play" size={14} className="text-primary" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Icon name="Sparkles" size={18} className="text-glow" />
              Рекомендации для тебя
            </h3>
            <div className="space-y-3">
              {recommendations.map((track, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 cursor-pointer transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-glow/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={16} className="text-glow/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate">{track.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{track.artist}</div>
                    <div className="text-[10px] text-primary/70 mt-0.5">{track.reason}</div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Plus" size={14} className="text-primary" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-glow/10 border border-primary/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Brain" size={14} className="text-primary" />
                <span className="text-xs font-semibold text-foreground">Умные рекомендации</span>
              </div>
              <p className="text-[11px] text-muted-foreground">Система подбирает треки на основе твоей истории прослушивания</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
