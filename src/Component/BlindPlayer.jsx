import { useEffect, useRef, useState } from "react";
import tracks from "../assets/tracks.json";
import { Button } from "react-bootstrap";
import { PauseFill, Play, PlayFill } from "react-bootstrap-icons";
const BlindPlayer = ({ trackId }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    const track = tracks[trackId];
    if (!track) return;
    const audio = audioRef.current;
    audio.src = `/audio/${track.file}`;
    audio.currentTime = track.start;

    const timeout = setTimeout(() => {
      audio.pause();
    }, track.duration * 1000);
    return () => clearTimeout(timeout);
  }, [trackId]);
  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <audio ref={audioRef} />
      <div style={{ width: "150px", position: "relative" }} className="   ">
        <img
          src="/img/Gemini_Generated_Image_thpp1qthpp1qthpp-removebg-preview (1).png"
          alt=""
          className=" w-100"
        />
      </div>
      <div class="cards ">
        <div class="card red">
          <h1 className=" card-text text-center">CANZONE</h1>
          {/* <p class="tip">Hover Me</p> */}
          <p class="second-text">Lorem Ipsum</p>
        </div>
        <div class="card blue">
          <h1 className=" card-text text-center">ANNO</h1>
          {/* <p class="tip">Hover Me</p> */}
          <p class="second-text">Lorem Ipsum</p>
        </div>
        <div class="card green">
          <h1 className=" card-text text-center">AUTORE</h1>
          {/* <p class="tip">Hover Me</p> */}
          <p class="second-text">Lorem Ipsum</p>
        </div>
      </div>

      {isPlaying ? (
        <div class="comic-brutal-button-container mt-auto">
          <button onClick={handlePause} class="comic-brutal-button">
            <div class="button-inner">
              <span class="button-text">
                <PauseFill
                  style={{ fontSize: "2em" }}
                  onClick={() => {
                    setIsPlaying(false);
                  }}
                />
              </span>
              <div class="halftone-overlay"></div>
              <div class="ink-splatter"></div>
            </div>
            <div class="button-shadow"></div>
            <div class="button-frame"></div>
          </button>
        </div>
      ) : (
        <div class="comic-brutal-button-container mt-auto">
          <button onClick={handlePlay} class="comic-brutal-button">
            <div class="button-inner">
              <span class="button-text">
                <PlayFill
                  style={{ fontSize: "2em" }}
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                />
              </span>
              <div class="halftone-overlay"></div>
              <div class="ink-splatter"></div>
            </div>
            <div class="button-shadow"></div>
            <div class="button-frame"></div>
          </button>
        </div>
      )}

      {/* <Button onClick={handlePlay}>Avvia canzone!</Button> */}
    </>
  );
};
export default BlindPlayer;
