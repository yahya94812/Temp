/**
 * Processes the graph data to assign x, y coordinates based on railway rules.
 * @param {object} data - The graph data { nodes, links }.
 * @param {object} options - Configuration for layout.
 */
export function processGraphLayout(data, options) {
  const {
    stationWidth = 600,
    stationGap = 200,
    trackHeight = 50,
    switchLength = 50,
  } = options;

  const processedNodes = new Map();
  const stationGroups = new Map();

  // Group nodes by station
  data.nodes.forEach(node => {
    if (!stationGroups.has(node.group)) {
      stationGroups.set(node.group, []);
    }
    stationGroups.get(node.group).push(node);
  });

  let currentX = 0;

  // Process each station group
  Array.from(stationGroups.keys()).sort().forEach(groupKey => {
    const groupNodes = stationGroups.get(groupKey);

    const entrySwitch = groupNodes.find(n => n.id.includes('-Entry'));
    const exitSwitch = groupNodes.find(n => n.id.includes('-Exit'));
    const mainTrackNodes = groupNodes.filter(n => n.type === 'mainline');
    const loopNodes = groupNodes.filter(n => n.type === 'loop');
    const sidingNodes = groupNodes.filter(n => n.type === 'siding');

    // 1. Position Switches and Mainline
    const baseY = 0;
    const entryX = currentX;
    const exitX = currentX + stationWidth;
    
    if(entrySwitch) processedNodes.set(entrySwitch.id, { ...entrySwitch, x: entryX, y: baseY });
    if(exitSwitch) processedNodes.set(exitSwitch.id, { ...exitSwitch, x: exitX, y: baseY });

    mainTrackNodes.forEach((node, i) => {
        const nodeX = entryX + (stationWidth / (mainTrackNodes.length + 1)) * (i + 1);
        processedNodes.set(node.id, { ...node, x: nodeX, y: baseY });
    });

    // 2. Position Loop Tracks
    const upperLoops = loopNodes.slice(0, Math.ceil(loopNodes.length / 2));
    const lowerLoops = loopNodes.slice(Math.ceil(loopNodes.length / 2));

    upperLoops.forEach((node, i) => {
        const y = baseY - (trackHeight * (i + 1));
        const x = entryX + stationWidth / 2;
        processedNodes.set(node.id, { ...node, x, y });
    });

    lowerLoops.forEach((node, i) => {
        const y = baseY + (trackHeight * (i + 1));
        const x = entryX + stationWidth / 2;
        processedNodes.set(node.id, { ...node, x, y });
    });
    
    // 3. Position Siding Tracks
    sidingNodes.forEach((node, i) => {
        const y = baseY + (trackHeight * (i + 1));
        // Sidings extend from the exit switch
        const x = exitX + stationWidth / 4;
        processedNodes.set(node.id, { ...node, x, y });
    });


    // Move to the next station position
    currentX += stationWidth + stationGap;
  });

  const nodes = Array.from(processedNodes.values());
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  // Create links with calculated coordinates
  const links = data.links.map(link => {
    const source = nodeMap.get(link.source);
    const target = nodeMap.get(link.target);
    return { ...link, source, target };
  });

  return { nodes, links, switchLength };
}