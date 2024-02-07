'use client'
import React, { useState, useEffect, useRef } from "react";
import { EventEmitter } from "@/events/EventEmitter";
import { pause, play, stop } from "@/events/audioEvents";
import {AudioPlayer} from "@/components/AudioPlayer";

export default function Home() {
  return (
    <AudioPlayer src="/freemusic.mp3" />
  );
}
