import styles from '../assets/styles/styles.module.scss';

interface Props {
  children: React.ReactNode,
}

export const TapBar: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.tapBarMain}>
      {children}
    </div>
  )
}
