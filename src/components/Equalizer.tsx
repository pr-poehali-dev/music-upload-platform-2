const Equalizer = ({ isActive = true, barCount = 5, className = "" }: { isActive?: boolean; barCount?: number; className?: string }) => {
  return (
    <div className={`flex items-end gap-[2px] h-5 ${className}`}>
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-primary transition-all"
          style={{
            height: isActive ? undefined : '4px',
            animation: isActive ? `eq-bar 0.${4 + (i % 3) * 2}s ease-in-out ${i * 0.1}s infinite` : 'none',
            minHeight: '4px',
            maxHeight: '20px',
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;
