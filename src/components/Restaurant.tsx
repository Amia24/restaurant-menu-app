import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import Menu from './MenuApi'

const uniqueList = [
    ...new Set(
        Menu.map((cur) => {
            return cur.category;
        })),
    "All"
];


const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category: string) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((cur) => {
            return cur.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant