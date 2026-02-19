import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "catalog", label: "Каталог", icon: "Library" },
  { id: "top", label: "Топ", icon: "TrendingUp" },
  { id: "upload", label: "Загрузка", icon: "Upload" },
  { id: "playlists", label: "Плейлисты", icon: "ListMusic" },
  { id: "profile", label: "Профиль", icon: "User" },
];

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-glow flex items-center justify-center">
            <Icon name="Disc3" size={18} className="text-white" />
          </div>
          <span className="font-montserrat font-bold text-lg tracking-tight">
            VINYL<span className="text-primary">WAVE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex items-center transition-all duration-300 ${searchOpen ? 'w-48' : 'w-8'}`}>
            {searchOpen && (
              <input
                type="text"
                placeholder="Поиск треков..."
                className="w-full bg-muted/50 border border-border/50 rounded-lg px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            )}
            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <Icon name="Search" size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border/30 px-2 py-1">
        <div className="flex items-center justify-around">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-lg transition-colors ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="text-[10px]">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
