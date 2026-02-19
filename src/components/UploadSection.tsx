import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Загрузи свой трек</h2>
          <p className="text-muted-foreground mt-2">Поделись музыкой с тысячами слушателей</p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 cursor-pointer ${
              dragActive
                ? 'border-primary bg-primary/5'
                : fileName
                  ? 'border-green-500/50 bg-green-500/5'
                  : 'border-border/50 hover:border-primary/30'
            }`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              const file = e.dataTransfer.files[0];
              if (file) setFileName(file.name);
            }}
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'audio/*';
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) setFileName(file.name);
              };
              input.click();
            }}
          >
            {fileName ? (
              <>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-500" />
                </div>
                <p className="font-semibold text-foreground">{fileName}</p>
                <p className="text-sm text-muted-foreground mt-1">Файл готов к загрузке</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CloudUpload" size={32} className="text-primary" />
                </div>
                <p className="font-semibold text-foreground">Перетащи аудиофайл сюда</p>
                <p className="text-sm text-muted-foreground mt-1">или нажми для выбора • MP3, WAV, FLAC до 50MB</p>
              </>
            )}
          </div>

          {fileName && (
            <div className="mt-6 space-y-4" style={{ animation: 'slide-up 0.4s ease-out forwards' }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Название трека</label>
                  <Input placeholder="Мой крутой трек" className="bg-muted/30 border-border/50" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Исполнитель</label>
                  <Input placeholder="Имя артиста" className="bg-muted/30 border-border/50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Жанр</label>
                  <Input placeholder="Электронная" className="bg-muted/30 border-border/50" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Обложка</label>
                  <div className="flex items-center gap-2">
                    <Input type="file" accept="image/*" className="bg-muted/30 border-border/50" />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl gap-2 h-12 font-semibold">
                <Icon name="Upload" size={18} />
                Загрузить трек
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
