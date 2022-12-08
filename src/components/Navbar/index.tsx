import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from './styles';
import logo from '@/assets/logo-mercanet.svg';
import { menu } from '@/lib/navbar';
import { ButtonClient } from '../Button';
import { MobileMenu } from '../MobileMenu';

export const Navbar = ({ client }: any) => {
  const { asPath } = useRouter();

  return (
    <>
      <Container>
        <nav>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={logo} layout="fill" alt="Mercanet" />
              </a>
            </Link>
          </div>

          <ul className="nav__links">
            {menu.map((link) => (
              <li
                key={link.path}
                className={asPath === link.path ? `active` : `links`}
              >
                <Link href={link.path}>
                  <a className={asPath === link.path ? `active` : `links`}>
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="button">
          <a href={client} target="_blank" rel="noreferrer">
            <ButtonClient text="Área do cliente" />
          </a>
        </div>
        <MobileMenu client={client} />
      </Container>
    </>
  );
};
