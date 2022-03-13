import { useSession } from 'next-auth/react';

import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css' 
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session, status } = useSession() //session
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/habits')
  }
  return (
    <div className={styles.container}>
          {status === "authenticated" && 
          <>
            <h1>Loading</h1>
          </>
          }
          {status !== "authenticated" && <LoginForm />}
    </div>
  )
}
