import styles from './page.module.css'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Header from './components/Header'
import 'react-tooltip/dist/react-tooltip.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Intro/>
      <Projects/>
      <About/>
    </main>
  )
}
