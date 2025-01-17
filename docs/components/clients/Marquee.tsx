import React from "react";

export function Marquee({ children, ...props }) {
  return (
    <div className="overflow-x-hidden h-[40px]">
      <div className="relative">
        <div className="inline-block wrapper">{children}</div>
      </div>
    </div>
  );
}
