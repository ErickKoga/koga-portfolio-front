"use client";

import * as PrimitiveProgress from "@radix-ui/react-progress";
import React from "react";

interface ProgressBar {
  value: number;
}

const ProgressBar = ({ value }: ProgressBar) => {
  const [progress, setProgress] = React.useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <PrimitiveProgress.Root
      className="relative w-full h-4 overflow-hidden bg-white rounded-sm shadow-base"
      style={{ transform: "translateZ(0)" }}
      value={progress}
    >
      <PrimitiveProgress.Indicator
        className="bg-zinc-900 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </PrimitiveProgress.Root>
  );
};

export default ProgressBar;
