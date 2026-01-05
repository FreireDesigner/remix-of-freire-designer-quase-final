interface WaveDividerProps {
  variant: "blue-to-white" | "white-to-blue";
}

const WaveDivider = ({ variant }: WaveDividerProps) => {
  if (variant === "blue-to-white") {
    return (
      <div className="relative w-full h-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blueGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0038a8" />
              <stop offset="100%" stopColor="#0059fa" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,75 1440,50 L1440,0 L0,0 Z"
            fill="url(#blueGradient1)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-12 overflow-hidden">
      <svg
        className="absolute top-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0038a8" />
            <stop offset="100%" stopColor="#0059fa" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 C360,0 720,100 1080,50 C1260,25 1350,25 1440,50 L1440,100 L0,100 Z"
          fill="url(#blueGradient2)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
