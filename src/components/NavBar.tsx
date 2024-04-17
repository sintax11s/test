import styles from '../assets/styles/styles.module.scss';
import { TapBar } from './TapBar';
import refIcon from '../assets/img/navBarIcons/refIcon.png';
import taskIcon from '../assets/img/navBarIcons/taskIcon.png';
import mineIconActive from '../assets/img/navBarIcons/MineActiveIcon.png';
import mineNotActiveIcon from '../assets/img/navBarIcons/mineNotActiveIcon.png';
import boostIcon from '../assets/img/navBarIcons/boostIcon.png';
import statsIcon from '../assets/img/navBarIcons/statsIcon.png';
import { NavLink, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className={styles.navBar}>
        <div>
          <TapBar>
            <ul className={styles.navList}>
              <li>
                <NavLink 
                  to="/clicker/ref" 
                  end
                  className={({isActive}) => [
                    styles.navItem, 
                    isActive ? styles.activeNavItem : ''
                  ].join(' ')}
                >
                  <img src={refIcon} alt="Ref" />
                  <p>Ref</p>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/clicker/tasks" 
                  end
                  className={({isActive}) => [
                    styles.navItem, 
                    isActive ? styles.activeNavItem : ''
                  ].join(' ')}
                >
                  <img src={taskIcon} alt="Task" />
                  <p>Tasks</p>
                </NavLink>
              </li>
              <li style={{marginRight: 55}}>
                <NavLink 
                  to="/clicker" 
                  end
                  className={({isActive}) => [
                    styles.mineButton,
                    styles.navItem, 
                    isActive ? styles.activeNavItem : ''
                  ].join(' ')}
                >
                  <img src={location.pathname === '/clicker' ? mineIconActive : mineNotActiveIcon} alt="Mine" style={{width: 64, height: 64}}/>
                  <p>Mine</p>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/clicker/boost"
                  end
                  className={({isActive}) => [
                    styles.navItem, 
                    isActive ? styles.activeNavItem : ''
                  ].join(' ')}
                >
                  <img src={boostIcon} alt="Boost" />
                  <p>Boost</p>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/clicker/stats"
                  end
                  className={({isActive}) => [
                    styles.navItem, 
                    isActive ? styles.activeNavItem : ''
                  ].join(' ')}
                >
                  <img src={statsIcon} alt="stats" />
                  <p>Stats</p>
                </NavLink>
              </li>
            </ul>
          </TapBar>
        </div>
    </div>
  )
}
