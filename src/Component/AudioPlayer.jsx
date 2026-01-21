import React, { useState, useRef } from "react";
import "../Style/MusicPlayer.css";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  // Formatta i secondi in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const updateProgress = () => {
    const { currentTime, duration } = audioRef.current;
    if (duration) {
      const percentage = (currentTime / duration) * 100;
      setProgress(percentage);
      setCurrentTime(formatTime(currentTime));
    }
  };

  const onLoadedMetadata = () => {
    setDuration(formatTime(audioRef.current.duration));
  };

  const handleProgressClick = (e) => {
    const container = e.currentTarget;
    const { left, width } = container.getBoundingClientRect();
    const clickX = e.clientX - left;
    const newProgress = (clickX / width) * audioRef.current.duration;
    audioRef.current.currentTime = newProgress;
  };

  return (
    <div style={{ width: "300px", padding: "20px" }}>
      {/* Elemento Audio Nascosto */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={onLoadedMetadata}
      />

      {/* Barra di Avanzamento */}
      <div className="progress-container" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Timer */}
      <div className="time-info">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>

      {/* Controlli Semplici */}
      <button onClick={() => audioRef.current.play()}>Play</button>
      <button onClick={() => audioRef.current.pause()}>Pause</button>
    </div>
  );
};

export default AudioPlayer;
