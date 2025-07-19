import React from 'react';
export default function FooterPage() {
    return (
        <footer style={{
            width: '100%',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#8884d8',
            textAlign: 'center',
            position: 'relative',
            bottom: 0,
            left: 0,
            boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
            color: '#ffffff',
        }}>
            <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} MENNA. All rights reserved.
            </p>
        </footer>
    );
}