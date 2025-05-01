import React from 'react'
import styles from '../styles/menuCard.module.scss';

interface NavbarProps {
  filterItem: (cur: string) => void;
  menuList: string[];
}

const Navbar = ({ filterItem, menuList }: NavbarProps) => {
  return (
    <>
      <nav>
        <div className={styles.btnGrp}>
          {
            menuList.map((cur) => {
              return (
                <button className={styles.btn} onClick={() => filterItem(cur)}>
                  {cur}
                </button>
              )
            })
          }


        </div>

      </nav>

    </>
  )
}

export default Navbar