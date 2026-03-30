import { motion } from "framer-motion";

interface Blob {
  color: string;
  size: string;
  position: string;
  delay?: number;
  duration?: number;
}

interface AnimatedBackgroundProps {
  variant?: "default" | "warm" | "cool" | "intense";
  className?: string;
}

const presets: Record<string, Blob[]> = {
  default: [
    { color: "hsl(24 90% 50% / 0.08)", size: "w-[600px] h-[600px]", position: "top-0 -left-48", delay: 0, duration: 20 },
    { color: "hsl(24 70% 40% / 0.06)", size: "w-[500px] h-[500px]", position: "bottom-0 -right-32", delay: 2, duration: 25 },
  ],
  warm: [
    { color: "hsl(24 90% 50% / 0.12)", size: "w-[700px] h-[700px]", position: "-top-32 -left-32", delay: 0, duration: 18 },
    { color: "hsl(28 80% 45% / 0.08)", size: "w-[500px] h-[500px]", position: "top-1/3 -right-48", delay: 3, duration: 22 },
    { color: "hsl(20 85% 50% / 0.06)", size: "w-[400px] h-[400px]", position: "bottom-0 left-1/4", delay: 5, duration: 20 },
  ],
  cool: [
    { color: "hsl(24 90% 50% / 0.1)", size: "w-[600px] h-[600px]", position: "-top-48 right-1/4", delay: 0, duration: 22 },
    { color: "hsl(220 40% 40% / 0.06)", size: "w-[500px] h-[500px]", position: "bottom-1/4 -left-32", delay: 4, duration: 26 },
  ],
  intense: [
    { color: "hsl(24 90% 50% / 0.15)", size: "w-[800px] h-[800px]", position: "-top-48 -left-48", delay: 0, duration: 16 },
    { color: "hsl(28 95% 55% / 0.1)", size: "w-[600px] h-[600px]", position: "top-1/2 -right-32", delay: 2, duration: 20 },
    { color: "hsl(20 80% 45% / 0.08)", size: "w-[500px] h-[500px]", position: "-bottom-32 left-1/3", delay: 4, duration: 24 },
    { color: "hsl(30 70% 50% / 0.06)", size: "w-[400px] h-[400px]", position: "top-1/4 left-1/2", delay: 6, duration: 18 },
  ],
};

const AnimatedBackground = ({ variant = "default", className = "" }: AnimatedBackgroundProps) => {
  const blobs = presets[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute ${blob.size} ${blob.position} rounded-full blur-[150px]`}
          style={{ background: blob.color }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0.4, 0.8, 0.5, 0.9, 0.4],
            scale: [0.8, 1.1, 0.9, 1.05, 0.8],
            x: [0, 30, -20, 15, 0],
            y: [0, -20, 15, -10, 0],
          }}
          transition={{
            duration: blob.duration || 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay || 0,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
