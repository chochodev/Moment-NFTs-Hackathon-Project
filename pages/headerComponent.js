import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import styles from '../styles/Home.module.css';
import Logo from '../public/logo.png';

export default function Header({ data }) {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const router = useRouter();

  const signin = (e) => {
    e.preventDefault();
    authenticate({ signingMessage: 'Signin — Moments.NFT' });
  };

  useEffect(() => {
    if (isAuthenticated && data != 'logout') {
      router.push('/createnft');
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Moments.NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
          <a href="/">
            <Image src={Logo} alt="Moments Logo" />
          </a>
          <div className="flex">
            <a
              href="#"
              className="mr-12 text-md font-medium text-gray-500 dark:text-white hover:underline"
            >
              About
            </a>

            {data === 'logout' ? (
              <button
                onClick={logout}
                className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400 "
              >
                Logout
              </button>
            ) : (
              <button
                onClick={(e) => signin(e)}
                className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400 "
              >
                Mint NFT
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
