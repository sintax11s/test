import { NavBar } from './components/NavBar'
import styles from '../src/assets/styles/styles.module.scss';
import { useEffect, useState } from 'react';
import { FirstOpen } from './components/FirstOpen';
import { Outlet } from 'react-router-dom';

function App() {
  const [showFirstOpen, setShowFirstOpen] = useState(false);

  useEffect(() => {
    const isFirstOpen = localStorage.getItem('isFirstOpen');
    if (!isFirstOpen) {
      setShowFirstOpen(true);
      localStorage.setItem('isFirstOpen', 'true');
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        {showFirstOpen && <FirstOpen setShowFirstOpen={setShowFirstOpen} />}
        <Outlet />
        <NavBar />
      </div>
    </>
  )
}

export default App
