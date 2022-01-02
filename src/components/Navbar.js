import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
         <nav>
           <div className='btn-grp'>
             {
                 menuList.map((cur) => {
                     return(
                        <button className='btn' onClick={() => filterItem(cur)}>
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