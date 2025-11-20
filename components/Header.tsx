'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import SlideMenu from './SlideMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px 24px',
        backgroundColor: '#FFD400',
        borderBottom: '1px solid #E0B800',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      {/* Left Logo */}
      <Link
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        <Image
          src='/VeeSaveLogo.png'
          alt='VeeSave Logo'
          width={48}
          height={48}
          style={{ cursor: 'pointer' }}
        />
      </Link>

      {/* Center Title */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '22px',
          fontWeight: 700,
          color: '#000',
        }}
      >
        Welcome to VeeSave
      </div>

      {/* Right Menu Cluster */}
      <nav
        style={{
          marginLeft: 'auto',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <Link href='/login' style={navStyle}>Login</Link>
        <Link href='/register' style={navStyle}>Register</Link>

        {/* Menu Icon */}
        <Image
          src='/VeeSaveMenuIcon.png'
          alt='Menu Icon'
          width={40}
          height={40}
          style={{ cursor: 'pointer' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>

      {/* Slide Down Menu */}
      <SlideMenu isOpen={isMenuOpen} />
    </header>
  );
}

const navStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
  fontWeight: 600,
};
