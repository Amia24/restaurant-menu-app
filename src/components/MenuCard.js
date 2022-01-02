import React from 'react'
import menuCard from './menuCard.css'
const MenuCard = ({menuData}) => {
    return (
        <div className='cards'>
         {
             menuData.map((cur) => {
                 return(
                    <div className="card" key={cur.id}>
                        <div className='header-div'>
                            <div className='card-header'>
                                    &nbsp;{cur.id}
                            </div>
                            <h3><i>{cur.name}</i></h3>
                            <h3><i>{cur.price}</i></h3>
                        </div>
                        <div className='card-body'>
                        <p>
                         {cur.description}
                        </p>
                        </div>
                        
                        <img src={cur.image} className='center'/>
                        
                        <button className='center'>Order</button>
                    </div>
                 )
             })
         }
        </div>
        )   
}

export default MenuCard