import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';



export default function PieChartExample() {
  const data = [
    { name: 'Page A', uv: 590 },
    { name: 'Page B', uv: 590 },
    { name: 'Page C', uv: 868 },
  ];

return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'

    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Pie Chart Example</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {data.map((item, index) => (
          <div key={index} style={{
            backgroundColor: '#f3f3f3',
            padding: '10px 15px',
            borderRadius: '8px',
            minWidth: '100px'
          }}>
            <strong>{item.name}</strong>: {item.uv}
          </div>
        ))}
      </div>
    </div>
  );
}

