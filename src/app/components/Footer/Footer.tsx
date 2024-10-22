import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.links}>
        <Link
          href={'https://bit.ly/CV-Tetiana-Kostiuk'}
          className={s.links__item}
        >
          CV
        </Link>

        <Link
          href={'https://github.com/tetianakostiuk1/star-wars'}
          className={s.links__item}
        >
          GitHub
        </Link>

        <span className={s.links__item}>Tetiana Kostiuk</span>
      </div>
    </footer>
  );
};

export default Footer;
