interface LogoProps {
  size?: number;
  showText?: boolean;
  animated?: boolean;
  className?: string;
}

export const Logo = ({ size = 40, showText = true, animated = false, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 160"
        width={size}
        height={(size * 160) / 220}
        className={animated ? "animate-logo-glow" : ""}
        aria-label="ET TOY'S logo"
      >
        <defs>
          <linearGradient id="etAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>
        {/* E */}
        <path
          d="M 60 20 L 20 20 L 20 60 L 0 60 L 0 100 L 20 100 L 20 140 L 60 140 L 60 110 L 35 110 L 35 50 L 60 50 Z"
          fill="url(#etAccent)"
        />
        {/* T */}
        <path
          d="M 80 20 L 160 20 L 160 50 L 135 50 L 135 140 L 105 140 L 105 50 L 80 50 Z"
          fill="hsl(var(--foreground))"
        />
        <circle cx="160" cy="110" r="12" fill="hsl(var(--foreground))" />
        <circle cx="190" cy="80" r="12" fill="url(#etAccent)" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-widest text-foreground" style={{ fontSize: size * 0.5 }}>
            ET TOY'S
          </span>
          <span className="text-[0.55rem] tracking-[0.3em] text-muted-foreground mt-1 hidden sm:block">
            GAMES &amp; ENTERTAINMENT
          </span>
        </div>
      )}
    </div>
  );
};
