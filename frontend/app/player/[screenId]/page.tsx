"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

/**
 * Fullscreen player for TV / digital screen
 */
export default function Player({ params }: any) {
  const [items, setItems] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    api.get(`/schedules/screen/${params.screenId}`).then(res => {
      const playlistItems =
        res.data[0]?.Playlist?.PlaylistItems || [];
      setItems(playlistItems);
    });
  }, []);

  useEffect(() => {
    if (!items.length) return;

    const timer = setTimeout(() => {
      setIndex((index + 1) % items.length);
    }, (items[index]?.duration || 5) * 1000);

    return () => clearTimeout(timer);
  }, [index, items]);

  if (!items.length) {
    return (
      <div className="h-screen w-screen flex items-center justify-center text-white bg-black">
        No content scheduled
      </div>
    );
  }

  return (
    <img
      src={items[index].Media.path}
      className="w-screen h-screen object-cover"
    />
  );
}
