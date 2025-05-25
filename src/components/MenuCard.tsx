import styles from '../styles/menuCard.module.scss';
import { MenuItem } from '../types/menuItem';

interface MenuCardProps {
    menuData: MenuItem[];
}
const MenuCard = ({ menuData }: MenuCardProps) => {
    return (
        <div className={styles.cards}>
            {
                menuData.map((cur) => {
                    return (
                        <div className={styles.card} key={cur.id}>
                            <div className={styles.imgContainer}>
                                <img src={cur.image} alt={cur.name} />
                            </div>
                            <div className={styles.headerDiv}>
                                <h3><i>{cur.name}</i></h3>
                                <h3><i>{cur.price}</i></h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>
                                    {cur.description}
                                </p>
                            </div>
                            <button className={styles.center}>Order</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuCard