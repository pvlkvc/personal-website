import { useRef, useState } from "react";
import "../css/Home.css";

export default function Home() {
  const audioRef = useRef("src/assets/pronunciation.mp3");
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

  return (
    <>
      <section id="home">
        <div className="column section-container home-intro-container">
          <div className="home-text-container">
            <p className="home-text-upper">Hi! My name is</p>
            <div className="row center-aligned">
              <h1 className="home-text-middle">Anna Pawlukiewicz</h1>
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

            <p className="home-text-lower">
              A computer science student.
              <br />A coding enthusiast.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
