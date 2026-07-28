"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  children?: React.ReactNode;
};

/**
 * Drop-in <video> replacement that only plays while it is on screen.
 *
 * Autoplaying videos keep decoding frames even when scrolled far out of
 * view, which competes with scrolling for CPU/GPU time. This component
 * starts playback when the video enters the viewport and pauses it when it
 * leaves. If the user manually paused the video, it stays paused when they
 * scroll away and back.
 */
export function LazyVideo({ autoPlay, children, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Whether playback should (re)start next time the video scrolls into view.
  const shouldPlayRef = useRef(!!autoPlay);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (shouldPlayRef.current && video.paused) {
            video.play().catch(() => {});
          }
        } else {
          // Remember whether it was actually playing when it left the
          // viewport — a user-initiated pause stays paused on return.
          shouldPlayRef.current = !video.paused;
          if (!video.paused) video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} {...props}>
      {children}
    </video>
  );
}
