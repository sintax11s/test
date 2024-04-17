import styles from '../assets/styles/styles.module.scss';

type Props = {
  energy: number
  maxEnergy: number
}

export const Enegry: React.FC<Props> = ({energy, maxEnergy}) => {
  return (
    <div className={styles.enegry}>
      <p className={styles.enegryCounter}>{energy}/{maxEnergy}</p>
    </div>
  )
}
