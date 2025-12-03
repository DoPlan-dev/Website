"use client";

import React from "react";

interface SvgIconProps {
  src: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  color?: string;
  fill?: string;
  stroke?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
}

/**
 * SvgIcon Component
 * 
 * A flexible component for rendering SVG icons from SVGRepo or any SVG source.
 * 
 * Usage:
 * 1. Download SVG from https://www.svgrepo.com/
 * 2. Save to public/icons/svgrepo/your-icon.svg
 * 3. Use as: <SvgIcon src="/icons/svgrepo/your-icon.svg" size={24} />
 * 
 * Or import as React component:
 * import IconName from "@/public/icons/svgrepo/icon-name.svg";
 * <SvgIcon src={IconName} size={24} />
 */
export function SvgIcon({
  src,
  className = "",
  size,
  width,
  height,
  color,
  fill,
  stroke,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  ...props
}: SvgIconProps) {
  const finalWidth = width || size || 24;
  const finalHeight = height || size || 24;

  // If src is a string (path to SVG file)
  if (typeof src === "string") {
    return (
      <img
        src={src}
        alt={ariaLabel || ""}
        width={finalWidth}
        height={finalHeight}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        style={{
          color,
          fill: fill || color,
          stroke: stroke || color,
        }}
        {...props}
      />
    );
  }

  // If src is a React component (imported SVG)
  const IconComponent = src;
  return (
    <IconComponent
      width={finalWidth}
      height={finalHeight}
      className={className}
      style={{
        color,
        fill: fill || color,
        stroke: stroke || color,
      }}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
}

