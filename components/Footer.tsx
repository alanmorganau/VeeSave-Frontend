'use client';

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '16px 24px',
        backgroundColor: '#000',
        color: '#fff',
        borderTop: '1px solid #333',
        fontSize: '13px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span> 2025 VeeSave  All Rights Reserved</span>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link href='/privacy' style={{ color: '#fff', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href='/terms' style={{ color: '#fff', textDecoration: 'none' }}>
            Terms of Use
          </Link>
        </nav>
      </div>
    </footer>
  );
}
