"use client";

import { useEffect, useState } from "react";

type LocationTagProps = {
  location?: string;
  timeZone?: string;
  className?: string;
};

function formatLocalTime(timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(new Date());
}

export default function LocationTag({
  location = "Denton, TX, USA",
  timeZone = "America/Chicago",
  className = "",
}: LocationTagProps) {
  const [localTime, setLocalTime] = useState(() => formatLocalTime(timeZone));

  useEffect(() => {
    const updateTime = () => setLocalTime(formatLocalTime(timeZone));
    updateTime();
    const interval = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(interval);
  }, [timeZone]);

  return (
    <div className={`location-tag group ${className}`} aria-label={`${location}, local time ${localTime}`}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)] motion-safe:animate-pulse motion-reduce:animate-none" />
      <span className="location-tag-text">
        <span className="location-tag-line location-tag-location">{location}</span>
        <span className="location-tag-line location-tag-time">{localTime}</span>
      </span>
    </div>
  );
}
