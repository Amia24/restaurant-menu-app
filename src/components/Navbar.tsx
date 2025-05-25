import styles from '../styles/menuCard.module.scss';
import styles2 from '../styles/header.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

interface NavbarProps {
  filterItem: (cur: string) => void;
  menuList: string[];
}

const HamburgerIcon = GiHamburgerMenu as React.FC;
const CrossIcon = RxCross2 as React.FC;

const Navbar = ({ filterItem, menuList }: NavbarProps) => {
  const [btnSelected, setBtnSelected] = useState<string>('All');

  //state for hamburger click to show menu
  const [hideMenu, setHideMenu] = useState<boolean>(true);

  const handleClick = (cur: string): void => {
    filterItem(cur);
    setBtnSelected(cur);
  }
  return (
    <header className={styles2.header}>
      <div className={styles2.container}>
        <div className={styles2.logo}>Restaurent Menu</div>
        <nav className={`${styles2.navMenu} ${hideMenu ? styles2.hideMenu : ""}`}>
          <ul className={styles2.btnGrp}>
            {
              menuList.map((cur) => {
                return (
                  <li className={`${styles2.btn} ${btnSelected === cur ? styles2.btnSelected : ""}`} onClick={() => handleClick(cur)}>
                    {cur}
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <div className={styles2.hamburger} onClick={() => setHideMenu(!hideMenu)}>
          {hideMenu ? <HamburgerIcon /> : <CrossIcon />}
        </div>
      </div>
    </header>
  )
}

export default Navbar