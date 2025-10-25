const PulseWave = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="absolute w-16 h-16 bg-primary rounded-full opacity-20 animate-ping"></div>
      <div className="absolute w-12 h-12 bg-primary rounded-full opacity-40 animate-pulse"></div>
      <div className="relative w-8 h-8 bg-primary rounded-full shadow-glow"></div>
    </div>
  );
};

export default PulseWave;
