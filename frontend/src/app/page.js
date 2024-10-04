"use client"; // Use client-side rendering

import Navbar from '../components/Navbar'; 
import styles from './page.module.css'; 
import Link from 'next/link'; 
import Typography from '@mui/material/Typography'; 

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Link href="/Chat" passHref>
          <Typography
            variant="h2"
            sx={{
              color: '#7A6263',
              textAlign: 'center',
              margin: '40px auto',
              textDecoration: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              letterSpacing: '2px',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Chat Now
          </Typography>
        </Link>
      </main>
    </div>
  );
}
