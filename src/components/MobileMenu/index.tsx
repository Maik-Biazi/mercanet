import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import imgBars from '@/assets/Menu/bars.svg';
import imgClose from '@/assets/Menu/close.svg';
import { menu } from '@/lib/navbar';
import { Container } from './styles';
import { ButtonClient } from '../Button';

export function MobileMenu({ ...props }: any) {
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Container>
        <div className="navbar">
          <Image src={imgBars} alt="Ativar menu" onClick={showSidebar} />
        </div>
        <nav className={sidebar ? `nav-menu active` : `nav-menu`}>
          <div className="container">
            <div className="navbar-toggle">
              <Image src={imgClose} alt="Close Menu" onClick={showSidebar} />
            </div>
            <ul className="nav-menu-items">
              {menu.map((item) => (
                <li key={item.path} className="nav-text">
                  <Link href={item.path}>
                    <a
                      className={`${
                        router.asPath === item.path ? `active` : ``
                      }`}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <a href={props.client} target="_blank" rel="noreferrer">
              <ButtonClient text="Área do cliente" />
            </a>
          </div>
        </nav>
      </Container>
    </>
  );
}
