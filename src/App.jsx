import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      setData(items);
    });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('myChart');
    if (!canvas) return;

    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Time Spent (seconds)',
          data: Object.values(data),
          backgroundColor: '#4e73df',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div style={{ padding: '10px', width: '300px' }}>
      <h2>Productivity Report</h2>
      <canvas id="myChart" width="280" height="200"></canvas>
    </div>
  );
};

export default App;