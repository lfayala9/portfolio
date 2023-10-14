import styles from './page.module.css'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Header from './components/Header'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Intro/>
      <Projects/>
    </main>
  )
}
