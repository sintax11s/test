import styles from '../assets/styles/styles.module.scss';
import robot from '../assets/img/robot.png';
import cursor from '../assets/img/Cursor.png';

type Props = {
  setShowFirstOpen: (value: boolean) => void
}

export const FirstOpen: React.FC<Props> = ({setShowFirstOpen}) => {
  return (
    <div className={styles.firstOpenBlock} onClick={() => setShowFirstOpen(false)}>
      <img src={cursor} alt="" className={styles.cursor}/>
      <div className={styles.blurBlock}>
        <div className={styles.dialogWindow}>
          <p style={{marginBottom: 20, color: '#ffffff'}}>To start earning PIX tap the screen</p>
        </div>
        <img src={robot} style={{width: 230, height: 250, objectFit: 'cover'}}alt="" />
      </div>
    </div>
  )
}
