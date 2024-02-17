'use client'
import React from "react";
import { AudioPlayer } from "@/components/AudioPlayer";

export default function Home() {
  return (
    <AudioPlayer src="/freemusic.mp3" />
  );
}
