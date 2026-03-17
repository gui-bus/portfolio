"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 120, height = 40 }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) {
    return <div style={{ width, height }} className={cn("animate-pulse bg-muted rounded", className)} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src={isDark ? "/logos/logo/white_logo.png" : "/logos/logo/black_logo.png"}
        alt="Guibus Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
