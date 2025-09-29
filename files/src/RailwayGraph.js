import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { processGraphLayout } from './graph-layout';

const RailwayGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const { nodes, links, switchLength } = processGraphLayout(data, {
        stationWidth: 400,
        stationGap: 250,
        trackHeight: 60,
    });

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous render

    const width = 1600;
    const height = 600;
    svg.attr('width', width).attr('height', height);
    
    // Set up zoom and pan
    const zoom = d3.zoom().on('zoom', (event) => {
      g.attr('transform', event.transform);
    });
    svg.call(zoom);

    const g = svg.append('g')
      .attr('transform', 'translate(50, 250)'); // Initial position

    // --- Render Links ---
    g.append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('class', d => `link ${d.type}`)
      .attr('d', d => {
        const { source, target } = d;
        // Straight line for mainline tracks on the same y-level
        if (d.type === 'mainline' || (source.y === target.y)) {
          return `M${source.x},${source.y} L${target.x},${target.y}`;
        }
        // Angled line for diverging/converging tracks
        if (d.type === 'diverge') {
          const midX = target.x - switchLength;
          return `M${source.x},${source.y} L${midX},${target.y} L${target.x},${target.y}`;
        }
        if (d.type === 'converge') {
          const midX = source.x + switchLength;
          return `M${source.x},${source.y} L${midX},${source.y} L${target.x},${target.y}`;
        }
        // Default to straight line
        return `M${source.x},${source.y} L${target.x},${target.y}`;
      });

    // --- Render Nodes ---
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${d.x},${d.y})`);

    node.append('circle')
      .attr('r', 5)
      .attr('class', d => `node ${d.type}`);

    node.append('text')
      .attr('dy', -10)
      .attr('text-anchor', 'middle')
      .text(d => d.label || d.id);
      
    // Add tooltips
    node.append('title')
        .text(d => `ID: ${d.id}\nType: ${d.type}\nGroup: ${d.group}`);

  }, [data]);

  return (
    <div className="graph-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default RailwayGraph;