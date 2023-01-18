import data from './entries.json' assert {type: "json"}

const entries = data.techs;

radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
      background: "#fff",
      grid: "#bbb",
      inactive: "#ddd"
    },
    title: "Opencast Tech Radar — 2022.12",
    quadrants: [
      { name: "Tools" },
      { name: "Techniques" },
      { name: "Trends" },
      { name: "Technology" },
    ],
    rings: [
      { name: "ADOPT", color: "#93c47d" },
      { name: "TRIAL", color: "#93d2c2" },
      { name: "ASSESS", color: "#fbdb84" },
      { name: "HOLD", color: "#efafa9" }
    ],
    print_layout: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries
    //ENTRIES
  });