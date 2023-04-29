import { useState } from 'react';
import styles from './App.module.scss';
import { Sidebar, Header } from './components'
import { Support } from './modules'

const App = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const handler = () => {
    setIsSideOpen((previous) => !previous);
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header handler={handler} isSideOpen={isSideOpen} />
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.sidebar} ${isSideOpen ? styles.open : styles.close}`}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Support />
        </div>
      </div>
    </div>
  )
}

export default App;