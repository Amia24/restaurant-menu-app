import React from 'react'
import { MenuItem } from '../types/menuItem'

interface NavbarProps {
  filterItem: (cur: string) => void;
  menuList: string[];
}

const Navbar = ({ filterItem, menuList }: NavbarProps) => {
  return (
    <>
      <nav>
        <div className='btn-grp'>
          {
            menuList.map((cur) => {
              return (
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