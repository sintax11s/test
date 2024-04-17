import { useEffect, useState } from 'react';
import styles from '../assets/styles/styles.module.scss';
import { Chest } from '../components/Chest';
import { Clicker } from '../components/Clicker';
import { CoinCounter } from '../components/CoinCounter';
import { Enegry } from '../components/Enegry';
import { ProgressBar } from '../components/ProgressBar';

export const Mine = () => {
  const maxEnergy = 100;
  const energyPerTap = 1;
  const [energy, setEnergy] = useState(maxEnergy);
  const [coinCounter, setCoinCounter] = useState(0);

  useEffect(() => {
    const storedCoins = localStorage.getItem('coins');

    if (storedCoins !== null) {
      setCoinCounter(parseInt(storedCoins));
    }

    if (energy <= maxEnergy) {
      const intervalId = setInterval(() => {
        setEnergy(prev => {
          const nextEnergy = prev + energyPerTap;
          return nextEnergy <= maxEnergy ? nextEnergy : maxEnergy;
        });
      }, 1000);
  
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className={styles.mine}>
      <div className={styles.topBar}>
        <Enegry energy={energy} maxEnergy={maxEnergy}/>
        <Chest />   
      </div>
      <CoinCounter coinCounter={coinCounter}/>
      <Clicker
        coinCounter={coinCounter}
        energy={energy} 
        setEnergy={setEnergy} 
        setCoinCounter={setCoinCounter}
      />
      <ProgressBar coinCounter={coinCounter}/>
    </div>
  )
}
