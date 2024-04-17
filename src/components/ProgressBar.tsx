import styles from '../assets/styles/styles.module.scss';
import leagueIcon from '../assets/img/LeagueIcon.png';

type Props = {
  coinCounter: number;
}

export const ProgressBar: React.FC<Props> = ({ coinCounter }) => {
  const maxLeague = 900;
  const progress = (coinCounter / maxLeague) * 100;

  const clampedProgress = Math.min(progress, 100);

  return (
    <div className={styles.progressBarBlock}>
      <div className={styles.league}>
        <a href="" className={styles.leagueLink}>
          <img src={leagueIcon} alt="" />
          <p className={styles.leagueName}>Wooden League &gt;</p>
        </a>
        <p className={styles.leagueCounter}><span style={{color: '#B364D8'}}>{coinCounter}</span>/{maxLeague}</p>
      </div>
      <div className={styles.progressBarPosition}>
        <div className={styles.progressBar}>
          <div style={{ width: `${clampedProgress}%` }} className={styles.progressBarFill}></div>
        </div>
      </div>
    </div>
  );
};

