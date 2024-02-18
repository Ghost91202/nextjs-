
"use client";
import React from 'react'
import { TfiAlignRight } from "react-icons/tfi";
import Link from 'next/link';
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const App = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer} className='text-white sm:hidden block'><TfiAlignRight/></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla p-10'
            >
                <Link href="/services"> SEO </Link>
            </Drawer>
        </>
    )
}

export default App
