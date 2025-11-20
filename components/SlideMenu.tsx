'use client';

import Link from 'next/link';
import React from 'react';

export default function SlideMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '72px',
        right: '0',
        width: '220px',
        backgroundColor: '#FFF',
        border: '1px solid #DDD',
        borderTop: 'none',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        transition: 'max-height 0.25s ease',
        overflow: 'hidden',
        maxHeight: isOpen ? '500px' : '0px',
        zIndex: 2000,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', padding: '8px' }}>
        <Link href='/' style={itemStyle}>Home</Link>
        <Link href='/login' style={itemStyle}>Login</Link>
        <Link href='/register' style={itemStyle}>Register</Link>
        <Link href='/privacy' style={itemStyle}>Privacy Policy</Link>
        <Link href='/terms' style={itemStyle}>Terms of Use</Link>

        <div style={{ borderTop: '1px solid #CCC', margin: '6px 0' }} />

        <Link href='/settings' style={itemStyle}>Settings</Link>
        <Link href='/account' style={itemStyle}>Account</Link>
      </div>
    </div>
  );
}

// Shared item style
const itemStyle: React.CSSProperties = {
  padding: '10px 6px',
  textDecoration: 'none',
  color: '#000',
  fontWeight: 500,
  fontSize: '15px',
  borderRadius: '4px',
  cursor: 'pointer',
};
