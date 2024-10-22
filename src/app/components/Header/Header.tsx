import React from 'react';
import Link from 'next/link';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>Star Wars App</div>
      <nav className={s.nav}>
        <Link href="/" className={s['nav-link']}>
          Home
        </Link>
        <Link href="/heroes" className={s['nav-link']}>
          Heroes
        </Link>
      </nav>
    </header>
  );
};

export default Header;
