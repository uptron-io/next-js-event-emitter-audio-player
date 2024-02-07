import React, { useState, useEffect, useRef } from "react";
import { EventEmitter } from "@/events/EventEmitter";
import { pause, play, stop } from "@/events/audioEvents";
import { ProgressBar } from "@/components/ProgressBar";

interface AudioPlayerProps {
  src: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const eventEmitter = new EventEmitter();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    eventEmitter.subscribe('play', () => play(audio as HTMLAudioElement));
    eventEmitter.subscribe('pause', () => pause(audio as HTMLAudioElement));
    eventEmitter.subscribe('stop', () => stop(audio as HTMLAudioElement));

    const handleTimeUpdate = () => {
      if (!isSeeking) {
        setCurrentTime(audio?.currentTime || 0);
      }
      setDuration(audio?.duration || 0);
    };

    audio?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      eventEmitter.unsubscribe('play', () => play(audio as HTMLAudioElement));
      eventEmitter.unsubscribe('pause', () => pause(audio as HTMLAudioElement));
      eventEmitter.unsubscribe('stop', () => stop(audio as HTMLAudioElement));
      audio?.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [audioRef.current, isSeeking]);

  const onPlay = () => {
    eventEmitter.dispatch('play');
  };

  const onPause = () => {
    eventEmitter.dispatch('pause');
  };

  const onStop = () => {
    eventEmitter.dispatch('stop');
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const bar = e.currentTarget;
      const clickPosition = e.clientX - bar.getBoundingClientRect().left;
      const percentage = clickPosition / bar.clientWidth;
      const seekTime = duration * percentage;

      setCurrentTime(seekTime);
      audioRef.current.currentTime = seekTime;
    }
  };

  return (
    <div>
      <audio ref={audioRef} controls src={src} />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        isSeeking={isSeeking}
        onSeek={handleSeek}
        setIsSeeking={setIsSeeking}
      />
      <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
        <div className="flex-auto flex items-center justify-evenly">
          <button
            onClick={onPlay}
            type="button"
            className="hidden sm:block lg:hidden xl:block"
          >
            <img src="/play.svg" alt="play" width={48}/>
          </button>
        </div>
        <button
          type="button"
          onClick={onPause}
          className="flex-auto flex items-center justify-evenly"
        >
          <img src="/pause.svg" alt="pause" width={48} />
        </button>
        <div className="flex-auto flex items-center justify-evenly">
          <button
            type="button"
            onClick={onStop}
          >
            <img src="/stop.svg" alt="stop" width={48} />
          </button>
        </div>
      </div>
    </div>
  );
};
