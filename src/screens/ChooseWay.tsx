import { TapBar } from '../components/TapBar';
import styles from '../assets/styles/styles.module.scss';
import { Link } from 'react-router-dom';
import clickerIcon from '../assets/img/chooseWayIcons/clicker-icon.png';
import dashboardIcon from '../assets/img/chooseWayIcons/dashboard-icon.png';
import webGameIcon from '../assets/img/chooseWayIcons/webGame-icon.png';
import walletIcon from '../assets/img/chooseWayIcons/wallet-icon.png';
import languageIcon from '../assets/img/chooseWayIcons/language-icon.png';

export const ChooseWay = () => {
  return (
    <div className={styles.chooseWayBlock}>
      <h1 className={styles.chooseWayTitle}>
        Choose Your Way
      </h1>
      <div className={styles.chooseWayLinksBlock}>
        <TapBar>
          <Link to="/clicker" className={styles.chooseLink}>
            <div className={styles.imgBackground}>
              <img src={clickerIcon} alt="" />
            </div>
            <p className={styles.chooseWayLinkName}>Clicker<span>&gt;</span></p>
          </Link>
        </TapBar>
        <TapBar>
          <a href="https://dashboard.pixelverse.xyz/login" className={styles.chooseLink}>
            <div className={styles.imgBackground}>
              <img src={dashboardIcon} alt="" />
            </div>
            <p className={styles.chooseWayLinkName}>Dashboard<span>&gt;</span></p>
          </a>
        </TapBar>
        <TapBar>
          <a href="https://play.pixelverse.xyz/" className={styles.chooseLink}>
            <div className={styles.imgBackground}>
              <img src={webGameIcon} alt="" />
            </div>
            <p className={styles.chooseWayLinkName}>Web Game<span>&gt;</span></p>
          </a>
        </TapBar>
        <TapBar>
          <a href="" className={styles.chooseLink}>
            <div className={styles.imgBackground}>
              <img src={walletIcon} alt="" />
            </div>
            <p className={styles.chooseWayLinkName}>Connect Wallet<span>&gt;</span></p>
          </a>
        </TapBar>
        <TapBar>
          <a href="" className={styles.chooseLink}>
            <div className={styles.imgBackground}>
              <img src={languageIcon} alt="" />
            </div>
            <p className={styles.chooseWayLinkName}>Language <span>&gt;</span></p>
          </a>
        </TapBar>  
      </div>
    </div>
  )
}
