import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "../css/Home.css";

export default function Home() {
  const audioRef = useRef("src/assets/pronunciation.mp3");
  const vantaRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioPlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    let vantaEffect = null;

    if (!vantaEffect) {
      vantaEffect = WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xb5a7b0,
        shininess: 0.0,
        waveSpeed: 0.45,
        zoom: 0.81,
        THREE: window.THREE,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <section id="home" className="shared-col-1">
        <div
          ref={vantaRef}
          className="column-centered section home shared-col-1"
        >
          <h2>Hi! My name is</h2>
          <div className="row-centered">
            <h1
              onClick={handleAudioPlay}
              className="text-highlighted"
              style={{ userSelect: `none` }}
            >
              Anna Pawlukiewicz
            </h1>
            <img
              className="speaker-button"
              onClick={handleAudioPlay}
              src="assets/icons/speaker-grey.svg"
            />
            <audio
              ref={audioRef}
              src="assets/audio/pronunciation.mp3"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={handleAudioEnd}
            />
          </div>

          <h2>A computer science student</h2>
          <h2>A coding enthusiast</h2>
        </div>
      </section>
    </>
  );
}
