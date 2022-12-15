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
    entries: [
        {
          "quadrant": 3,
          "ring": 3,
          "label": "Blockchain",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 2,
          "ring": 2,
          "label": "Green Software Development",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 1,
          "ring": 2,
          "label": "SRE",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 2,
          "label": "AWS Glue",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 0,
          "label": "Airflow",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 0,
          "label": "Databricks",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 1,
          "label": "Flink",
          "link": "https://engineering.zalando.com/tags/apache-flink.html",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 1,
          "label": "Google BigQuery",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 3,
          "label": "Hadoop",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 1,
          "label": "Presto",
          "active": true,
          "moved": 0
        },
        {
          "quadrant": 3,
          "ring": 0,
          "label": "Spark",
          "link": "https://engineering.zalando.com/tags/apache-spark.html",
          "active": true,
          "moved": 0
        }
      ]
    //ENTRIES
  });