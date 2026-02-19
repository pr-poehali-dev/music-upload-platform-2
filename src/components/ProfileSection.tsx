import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface UserProfile {
  name: string;
  bio: string;
  avatarUrl: string;
  genres: string[];
}

const ALL_GENRES = ["Электронная", "Рок", "Хип-хоп", "Джаз", "Lo-Fi", "Инди", "Поп", "Метал", "R&B", "Классика", "Фолк", "Регги"];

const DEFAULT_PROFILE: UserProfile = {
  name: "Музыкант",
  bio: "",
  avatarUrl: "",
  genres: [],
};

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

const loadProfile = (): UserProfile => {
  try {
    const saved = localStorage.getItem("vinylwave_profile");
    if (saved) return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
  } catch (_e) { /* ignore */ }
  return DEFAULT_PROFILE;
};

const ProfileSection = () => {
  const [profile, setProfile] = useState<UserProfile>(loadProfile);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editProfile, setEditProfile] = useState<UserProfile>(profile);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem("vinylwave_profile", JSON.stringify(profile));
  }, [profile]);

  const handleOpenSettings = () => {
    setEditProfile({ ...profile });
    setSaved(false);
    setSettingsOpen(true);
  };

  const handleSave = () => {
    setProfile({ ...editProfile });
    setSaved(true);
    setTimeout(() => {
      setSettingsOpen(false);
      setSaved(false);
    }, 800);
  };

  const toggleGenre = (genre: string) => {
    setEditProfile((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }));
  };

  const handleAvatarChange = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        setEditProfile((prev) => ({ ...prev, avatarUrl: ev.target?.result as string }));
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary/30"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-glow flex items-center justify-center">
                  <Icon name="User" size={40} className="text-white" />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-foreground">{profile.name}</h3>
            {profile.bio && (
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{profile.bio}</p>
            )}
            {!profile.bio && (
              <p className="text-sm text-muted-foreground mt-1">Слушатель с 2025</p>
            )}

            {profile.genres.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {profile.genres.slice(0, 4).map((g) => (
                  <span key={g} className="text-[10px] uppercase tracking-wider text-primary/80 font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                    {g}
                  </span>
                ))}
                {profile.genres.length > 4 && (
                  <span className="text-[10px] text-muted-foreground px-2 py-0.5">
                    +{profile.genres.length - 4}
                  </span>
                )}
              </div>
            )}

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

            <Button
              variant="outline"
              className="w-full mt-4 rounded-xl border-border/50 text-foreground"
              onClick={handleOpenSettings}
            >
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

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="bg-card border-border/50 rounded-2xl max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground flex items-center gap-2">
              <Icon name="Settings" size={20} className="text-primary" />
              Настройки профиля
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Настрой свой профиль под себя
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            <div className="flex items-center gap-4">
              <div
                className="relative w-20 h-20 rounded-full flex-shrink-0 cursor-pointer group"
                onClick={handleAvatarChange}
              >
                {editProfile.avatarUrl ? (
                  <img
                    src={editProfile.avatarUrl}
                    alt="avatar"
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-glow flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="Camera" size={20} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Фото профиля</p>
                <p className="text-xs text-muted-foreground">Нажми чтобы изменить</p>
                {editProfile.avatarUrl && (
                  <button
                    className="text-xs text-destructive hover:underline mt-1"
                    onClick={() => setEditProfile((p) => ({ ...p, avatarUrl: "" }))}
                  >
                    Удалить фото
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Имя</label>
              <Input
                value={editProfile.name}
                onChange={(e) => setEditProfile((p) => ({ ...p, name: e.target.value }))}
                placeholder="Как тебя зовут?"
                className="bg-muted/30 border-border/50"
                maxLength={30}
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">О себе</label>
              <Textarea
                value={editProfile.bio}
                onChange={(e) => setEditProfile((p) => ({ ...p, bio: e.target.value }))}
                placeholder="Расскажи о себе и своих музыкальных вкусах..."
                className="bg-muted/30 border-border/50 resize-none h-20"
                maxLength={150}
              />
              <div className="text-right text-[10px] text-muted-foreground mt-1">
                {editProfile.bio.length}/150
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Любимые жанры</label>
              <div className="flex flex-wrap gap-2">
                {ALL_GENRES.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      editProfile.genres.includes(genre)
                        ? "bg-primary text-white"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl gap-2 h-11 font-semibold"
              onClick={handleSave}
              disabled={!editProfile.name.trim()}
            >
              {saved ? (
                <>
                  <Icon name="Check" size={18} />
                  Сохранено!
                </>
              ) : (
                <>
                  <Icon name="Save" size={18} />
                  Сохранить
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProfileSection;