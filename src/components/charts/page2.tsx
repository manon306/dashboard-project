import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 4567, amt: 2400}, {name: 'Page C', uv: 200, pv: 1398, amt: 2400}, {name: 'Page D', uv: 278, pv: 3908, amt: 2400}, {name: 'Page E', uv: 189, pv: 4800, amt: 2400}, {name: 'Page F', uv: 239, pv: 3800, amt: 2400}, {name: 'Page G', uv: 349, pv: 4300, amt: 2400}];

export default function PieChart2(){
    return(
                    <div style={{ maxWidth: '600px',
                        margin: '40px auto',
                        padding: '30px',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                  }}>
                    <h2 style={{ marginBottom: '20px', color: '#333' }}>Bar Chart Example</h2>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                    </BarChart>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: 'wrap', gap: '10px' }}>
                        {data.map((item, index) => (
                            <div key={index} style={{ backgroundColor: '#f3f3f3', padding: '10px 15px', borderRadius: '8px', minWidth: '100px' }}>
                                <strong>{item.name}</strong>: {item.uv}
                            </div>
                        ))}
                    </div>

        </div>
    )
}
