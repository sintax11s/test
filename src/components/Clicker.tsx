import styles from '../assets/styles/styles.module.scss';
import drill from '../assets/img/drill.png';
import { vibrate } from '../utils/vibroFunction';
import { useState } from 'react';

type Props = {
  energy: number
  coinCounter: number
  setEnergy: (value: (prev: number) => number) => void
  setCoinCounter: (value: (prev: number) => number) => void
}

export const Clicker: React.FC<Props> = ({
  coinCounter,
  energy,
  setEnergy,
  setCoinCounter,
}) => {
  const coinsPerClick = 1;
  const [touches, setTouches] = useState<{ x: number; y: number }[]>([]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const newTouch = event.touches[0];
    const touchX = newTouch.clientX;
    const touchY = newTouch.clientY;

    if (energy - coinsPerClick >= 0) {
      vibrate();
      setEnergy((prev: number) => prev - coinsPerClick);
      setCoinCounter((prev: number) => prev + coinsPerClick);

      localStorage.setItem('coins', String(coinCounter + coinsPerClick));

      const newTouches = [...touches, { x: touchX, y: touchY }];
      setTouches(newTouches);

      newTouches.forEach((touch) => {
        const clickElement = document.createElement('div');
        clickElement.classList.add(styles.clickNumber);
        clickElement.textContent = '+' + coinsPerClick;
        clickElement.style.left = `${touch.x}px`;
        clickElement.style.top = `${touch.y}px`;
        document.body.appendChild(clickElement);
        setTimeout(() => {
          clickElement.classList.add(styles.active);
        }, 10);
        setTimeout(() => {
          clickElement.classList.add(styles.fadeOut);
        }, 900);
        setTimeout(() => {
          document.body.removeChild(clickElement);
        }, 1200);
      });

      setTouches([]);
    }
  };

  return (
    <div className={styles.clicker}>
      <div
        style={{
          pointerEvents: energy - coinsPerClick >= 0 ? 'auto' : 'none',
        }}
        className={styles.clickerButton}
        onTouchStart={handleTouchStart}
      >
        <img className={styles.clickerImage} src={drill} alt="Tool" />
      </div>
    </div>
  );
};


