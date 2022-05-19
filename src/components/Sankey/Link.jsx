// Libraries
import React, { useState } from "react";
import { linkHorizontal } from "d3-shape";

function horizontalSourceO(d) {
  const y = (d.source.y1 - d.source.y0) / 2 + d.source.y0;
  return [d.source.x1, y];
}

function horizontalTargetO(d) {
  const y = (d.target.y1 - d.target.y0) / 2 + d.target.y0;
  return [d.target.x0, y];
}

function horizontalSource(d) {
  return [d.source.x1, d.y0];
}

function horizontalTarget(d) {
  return [d.target.x0, d.y1];
}

function sankeyLinkHorizontal() {
  return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}

function sankeyLinkHorizontalO() {
  return linkHorizontal().source(horizontalSourceO).target(horizontalTargetO);
}

// Component
export default function Link({ link, color, setHoveredLinkValue }) {
  const linkWidth = link.width;

  const path = sankeyLinkHorizontal()(link);

  return (
    <path
      d={path}
      style={{
        fill: "none",
        stroke: color,
        strokeWidth: linkWidth && !isNaN(linkWidth) ? linkWidth : 0
      }}
      onMouseEnter={() => setHoveredLinkValue(link.value)}
      onMouseLeave={() => setHoveredLinkValue('')}
    >
      <title>
        {link.source.name} -&gt; {link.target.name}: {link.value}
      </title>
    </path>
  );
}
