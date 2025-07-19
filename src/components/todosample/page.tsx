import React, { useState } from 'react';

export default function TodoSamplePage() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, input.trim()]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '40px auto',
            padding: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Mini Todo App</h2>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a task..."
                    style={{
                        padding: '10px',
                        width: '70%',
                        borderRadius: '8px',
                        border: '1px solid #ccc'
                    }}
                />
                <button onClick={addTask} style={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#8884d8',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }}>Add</button>
            </div>

            <ul style={{
                listStyle: 'none',
                padding: 0,
                maxHeight: '200px',
                overflowY: 'scroll',
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 #f1f1f1',
                marginTop: '10px'
            }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{
                        backgroundColor: '#f9f9f9',
                        padding: '10px',
                        marginBottom: '8px',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)} style={{
                            backgroundColor: '#ff4d4d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            cursor: 'pointer'
                        }}>Delete</button>
                    </li>
                ))}
            </ul>

            {/* custom scrollbar (webkit-based) */}
            <style>{`
                ul::-webkit-scrollbar {
                    width: 6px;
                }
                ul::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                ul::-webkit-scrollbar-thumb {
                    background-color: #888;
                    border-radius: 10px;
                }
                ul::-webkit-scrollbar-thumb:hover {
                    background: red;
                }
            `}</style>
        </div>
    );
}
