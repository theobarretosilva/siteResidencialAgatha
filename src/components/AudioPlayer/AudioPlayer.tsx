import React, { useState, useRef } from 'react';
import * as S from './AudioPlayer.styles'

const AudioPlayer: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <S.AudioControlButton onClick={toggleAudio}>
        {isPlaying ? '⏸️' : '▶️'}
      </S.AudioControlButton>
    </>
  );
};

export default AudioPlayer;
