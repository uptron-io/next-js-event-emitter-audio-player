'use client'
import { useEffect, useRef } from "react";
import { EventEmitter } from "@/events/EventEmitter";
import { pause, play, stop } from "@/events/audioEvents";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const eventEmitter = new EventEmitter();

  useEffect(() => {
    const audio = audioRef.current;

    eventEmitter.subscribe('play', () => play(audio as HTMLAudioElement));
    eventEmitter.subscribe('pause', () => pause(audio as HTMLAudioElement));
    eventEmitter.subscribe('stop', () => stop(audio as HTMLAudioElement));

    return () => {
      eventEmitter.unsubscribe('play', () => play(audio as HTMLAudioElement));
      eventEmitter.unsubscribe('pause', () => pause(audio as HTMLAudioElement));
      eventEmitter.unsubscribe('stop', () => stop(audio as HTMLAudioElement));
    }
  }, [audioRef.current]);

  const onPlay = () => {
    eventEmitter.dispatch('play');
  }

  const onPause = () => {
    eventEmitter.dispatch('pause');
  }

  const onStop = () => {
    eventEmitter.dispatch('stop');
  }

  return (
    <div>
      <audio ref={audioRef} controls src="/freemusic.mp3" />
      <div className="flex justify-between w-[300px]">
        <button onClick={onPlay}>play</button>
        <button onClick={onPause}>pause</button>
        <button onClick={onStop}>stop</button>
      </div>
    </div>
  );
}