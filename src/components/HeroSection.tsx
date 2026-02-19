import VinylDisc from "./VinylDisc";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/5e0ab8ca-167a-400b-9981-d40a3b31d107/files/e62a7f88-522d-4de0-b269-208ac5196870.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-glow/5" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-glow/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6" style={{ animation: 'slide-up 0.8s ease-out forwards' }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Новая эра музыки</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Твоя музыка.
            <br />
            <span className="text-gradient">Твои правила.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Загружай треки, создавай плейлисты и открывай новые звуки.
            Платформа, созданная музыкантами для музыкантов.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 font-semibold"
              onClick={() => onNavigate('catalog')}
            >
              <Icon name="Play" size={18} />
              Слушать
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-border/50 text-foreground hover:bg-muted/50"
              onClick={() => onNavigate('upload')}
            >
              <Icon name="Upload" size={18} />
              Загрузить трек
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-2xl font-bold text-foreground">12K+</div>
              <div className="text-xs text-muted-foreground">Треков</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div>
              <div className="text-2xl font-bold text-foreground">3.4K</div>
              <div className="text-xs text-muted-foreground">Артистов</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div>
              <div className="text-2xl font-bold text-foreground">890</div>
              <div className="text-xs text-muted-foreground">Плейлистов</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center" style={{ animation: 'slide-up 1s ease-out 0.2s forwards', opacity: 0 }}>
          <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" />
          <div className="animate-float">
            <VinylDisc size={350} imageUrl={HERO_IMAGE} isPlaying={true} />
          </div>

          <div className="absolute -right-4 top-1/4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3 glow-box" style={{ animation: 'slide-up 1.2s ease-out 0.5s forwards', opacity: 0 }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-glow/30 flex items-center justify-center">
                <Icon name="TrendingUp" size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Сейчас в тренде</div>
                <div className="text-sm font-semibold text-foreground">+24% новых треков</div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 bottom-1/4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-3" style={{ animation: 'slide-up 1.2s ease-out 0.7s forwards', opacity: 0 }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-glow/30 to-primary/30 flex items-center justify-center">
                <Icon name="Headphones" size={18} className="text-glow" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Активных слушателей</div>
                <div className="text-sm font-semibold text-foreground">1,247 онлайн</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
