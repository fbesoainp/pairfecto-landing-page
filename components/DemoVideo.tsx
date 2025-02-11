import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative">
      <video 
        ref={videoRef}
        className="w-full rounded-lg shadow-lg" 
        loop 
        muted 
        controls={false}
        playsInline
      >
        <source src="/videos/demo.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button 
          onClick={handlePlay} 
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl rounded-lg"
        >
          <Play size={50} />
        </button>
      )}
    </div>
  );
}