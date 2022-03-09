import Head from 'next/head'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react';

import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css' 

export default function Home() {
  const { data: session, status } = useSession()
  return (
    <div className={styles.container}>
          {status === "authenticated" && 
          <>
            <h1>Welcome Friends</h1>
            <button className="signout" onClick={() => signOut()}>Sign Out</button>
          </>
          }
          {status !== "authenticated" && <LoginForm />}
    </div>
  )
}
