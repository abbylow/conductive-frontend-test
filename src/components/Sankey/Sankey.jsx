// Libraries
import React, { useEffect, useState } from "react";
import { sankey as d3sankey } from "d3-sankey";
import { useWindowSize } from "react-use";

// Component
export default function Sankey({
  data,
  // width,
  // height,
  nodeWidth,
  nodePadding,
  children
}) {
  // Handling Size
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const sankeyWidth = windowWidth - 100;
  const sankeyHeight = windowHeight - 100;

  // State & Data
  const [graph, setGraph] = useState({
    nodes: [],
    links: []
  });

// TODO: remove
useEffect(() => {
  // console.log(graph)
}, [graph])

  useEffect(() => {
    setGraph(
      d3sankey()
        .nodeWidth(nodeWidth)
        .nodePadding(nodePadding)
        .extent([
          [0, 0],
          [sankeyWidth, sankeyHeight - 50]
        ])(data)
    );
  }, [nodePadding, nodeWidth, sankeyWidth, sankeyHeight, data]);

  if (children)
    return (
      <svg width={sankeyWidth} height={sankeyHeight}>
        {children({ graph })}
      </svg>
    );

  return <g />;
}
