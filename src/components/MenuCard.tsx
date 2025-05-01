import React from 'react';
import styles from '../styles/menuCard.module.scss';
import { MenuItem } from '../types/menuItem';

interface MenuCardProps {
    menuData: MenuItem[];
}
const MenuCard = ({menuData}: MenuCardProps) => {
    return (
        <div className={styles.cards}>
         {
             menuData.map((cur) => {
                 return(
                    <div className={styles.card} key={cur.id}>
                        <div className={styles.headerDiv}>
                            <div className={styles.cardHeader}>
                                    &nbsp;{cur.id}
                            </div>
                            <h3><i>{cur.name}</i></h3>
                            <h3><i>{cur.price}</i></h3>
                        </div>
                        <div className={styles.cardBody}>
                        <p>
                         {cur.description}
                        </p>
                        </div>
                        
                        <img src={cur.image} className={styles.center}/>
                        
                        <button className={styles.center}>Order</button>
                    </div>
                 )
             })
         }
        </div>
        )   
}

export default MenuCard