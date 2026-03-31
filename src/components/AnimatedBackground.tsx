interface Blob {
  color: string;
  size: string;
  position: string;
  animationClass: string;
}

interface AnimatedBackgroundProps {
  variant?: "default" | "warm" | "cool" | "intense";
  className?: string;
}

const presets: Record<string, Blob[]> = {
  default: [
    { color: "hsl(24 90% 50% / 0.08)", size: "w-[600px] h-[600px]", position: "top-0 -left-48", animationClass: "animate-blob-1" },
    { color: "hsl(24 70% 40% / 0.06)", size: "w-[500px] h-[500px]", position: "bottom-0 -right-32", animationClass: "animate-blob-2" },
  ],
  warm: [
    { color: "hsl(24 90% 50% / 0.12)", size: "w-[700px] h-[700px]", position: "-top-32 -left-32", animationClass: "animate-blob-1" },
    { color: "hsl(28 80% 45% / 0.08)", size: "w-[500px] h-[500px]", position: "top-1/3 -right-48", animationClass: "animate-blob-3" },
  ],
  cool: [
    { color: "hsl(24 90% 50% / 0.1)", size: "w-[600px] h-[600px]", position: "-top-48 right-1/4", animationClass: "animate-blob-1" },
    { color: "hsl(220 40% 40% / 0.06)", size: "w-[500px] h-[500px]", position: "bottom-1/4 -left-32", animationClass: "animate-blob-2" },
  ],
  intense: [
    { color: "hsl(24 90% 50% / 0.15)", size: "w-[800px] h-[800px]", position: "-top-48 -left-48", animationClass: "animate-blob-1" },
    { color: "hsl(28 95% 55% / 0.1)", size: "w-[600px] h-[600px]", position: "top-1/2 -right-32", animationClass: "animate-blob-2" },
    { color: "hsl(20 80% 45% / 0.08)", size: "w-[500px] h-[500px]", position: "-bottom-32 left-1/3", animationClass: "animate-blob-3" },
  ],
};

const AnimatedBackground = ({ variant = "default", className = "" }: AnimatedBackgroundProps) => {
  const blobs = presets[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute ${blob.size} ${blob.position} rounded-full blur-[150px] will-change-transform ${blob.animationClass}`}
          style={{ background: blob.color }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
