import React from 'react';
import RailwayGraph from './RailwayGraph';

// Define the graph data for three stations
const graphData = {
  nodes: [
    // Station 1
    { id: 'S1-Main', label: 'S1 Main', type: 'mainline', group: 1 },
    { id: 'S1-Loop1', label: 'S1 Loop 1', type: 'loop', group: 1 },
    { id: 'S1-Loop2', label: 'S1 Loop 2', type: 'loop', group: 1 },
    { id: 'S1-Siding1', label: 'S1 Siding', type: 'siding', group: 1 },
    { id: 'S1-Entry', type: 'switch', group: 1 },
    { id: 'S1-Exit', type: 'switch', group: 1 },

    // Station 2
    { id: 'S2-Main', label: 'S2 Main', type: 'mainline', group: 2 },
    { id: 'S2-Loop1', label: 'S2 Loop 1', type: 'loop', group: 2 },
    { id: 'S2-Siding1', label: 'S2 Siding', type: 'siding', group: 2 },
    { id: 'S2-Entry', type: 'switch', group: 2 },
    { id: 'S2-Exit', type: 'switch', group: 2 },

    // Station 3
    { id: 'S3-Main', label: 'S3 Main', type: 'mainline', group: 3 },
    { id: 'S3-Loop1', label: 'S3 Loop 1', type: 'loop', group: 3 },
    { id: 'S3-Loop2', label: 'S3 Loop 2', type: 'loop', group: 3 },
    { id: 'S3-Entry', type: 'switch', group: 3 },
    { id: 'S3-Exit', type: 'switch', group: 3 },
  ],
  links: [
    // --- Station 1 Connections ---
    { source: 'S1-Entry', target: 'S1-Main', type: 'mainline' },
    { source: 'S1-Main', target: 'S1-Exit', type: 'mainline' },
    // Loop 1
    { source: 'S1-Entry', target: 'S1-Loop1', type: 'diverge' },
    { source: 'S1-Loop1', target: 'S1-Exit', type: 'converge' },
    // Loop 2
    { source: 'S1-Entry', target: 'S1-Loop2', type: 'diverge' },
    { source: 'S1-Loop2', target: 'S1-Exit', type: 'converge' },
    // Siding
    { source: 'S1-Exit', target: 'S1-Siding1', type: 'diverge' },

    // --- Station 2 Connections ---
    { source: 'S2-Entry', target: 'S2-Main', type: 'mainline' },
    { source: 'S2-Main', target: 'S2-Exit', type: 'mainline' },
    // Loop 1
    { source: 'S2-Entry', target: 'S2-Loop1', type: 'diverge' },
    { source: 'S2-Loop1', target: 'S2-Exit', type: 'converge' },
    // Siding
    { source: 'S2-Exit', target: 'S2-Siding1', type: 'diverge' },

    // --- Station 3 Connections ---
    { source: 'S3-Entry', target: 'S3-Main', type: 'mainline' },
    { source: 'S3-Main', target: 'S3-Exit', type: 'mainline' },
    // Loop 1
    { source: 'S3-Entry', target: 'S3-Loop1', type: 'diverge' },
    { source: 'S3-Loop1', target: 'S3-Exit', type: 'converge' },
    // Loop 2
    { source: 'S3-Entry', target: 'S3-Loop2', type: 'diverge' },
    { source: 'S3-Loop2', target: 'S3-Exit', type: 'converge' },

    // --- Inter-station Connections (Mainline Loop) ---
    { source: 'S1-Exit', target: 'S2-Entry', type: 'mainline' },
    { source: 'S2-Exit', target: 'S3-Entry', type: 'mainline' },
    { source: 'S3-Exit', target: 'S1-Entry', type: 'mainline' },
  ],
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Railway Station Controller Panel</h1>
      </header>
      <main>
        <RailwayGraph data={graphData} />
      </main>
    </div>
  );
}

export default App;