import styles from '../assets/styles/styles.module.scss';
import FIcoin from '../assets/img/FI-coin.png';

type Props = {
  coinCounter: number
}

export const CoinCounter: React.FC<Props> = ({coinCounter}) => {
  return (
    <div className={styles.coinCounter}>
      <div className={styles.coinCounterContent}>
        <img src={FIcoin} alt="FI-coin" />
        <p className={styles.cointCounterText}>{coinCounter}</p>
      </div>
    </div>
  )
}
