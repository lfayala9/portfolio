import styles from './page.module.css'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
export default function Home() {
  return (
    <main className={styles.main}>
      <Intro/>
      <Projects/>
    </main>
  )
}
