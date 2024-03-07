
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
                <div>
                    <Link href="/services/appdevelopment"> App Development </Link>
                </div>
                <div>
                    <Link href="/services/bingads"> Bing Ads </Link>
                </div>
                <div>
                    <Link href="/services/contentmarketing">Content Marketing </Link>
                </div> 
                <div>
                    <Link href="/services/conversionrateoptimization"> Conversion Rate Optimization </Link>
                </div>
                <div>
                    <Link href="/services/digitalmarketing"> Digital Marketing </Link>
                </div>
                <div>
                    <Link href="/services/emailmarketing"> E-Mail Marketing </Link>
                </div>
                <div>
                    <Link href="/services/facebookads"> Facebook Ads </Link>
                </div>
                <div>
                    <Link href="/services/googleads"> Google Ads </Link>
                </div>
                <div>
                    <Link href="/services/instagramads"> Instagram Ads </Link>
                </div>
                <div>
                    <Link href="/services/javascriptdevelopment"> Javascript Development </Link>
                </div>
                <div>
                    <Link href="/services/landingpageoptimization"> Landing Page Optimization </Link>
                </div>
                <div>
                    <Link href="/services/linkedinmarketing"> Linkedin Marketing </Link>
                </div>
                <div>
                    <Link href="/services/marketingconsultation"> Marketing Consultation </Link>
                </div>
                <div>
                    <Link href="/services/seo"> SEO </Link>
                </div>
                <div>
                    <Link href="/services/socialmediamarketing"> Social Media Marketing </Link>
                </div>
                <div>
                    <Link href="/services/webdesign"> Web Design </Link>
                </div>
                <div>
                    <Link href="/services/wordpressdevelopment"> Wordpress Development </Link>
                </div>
                <div>
                    <Link href="/services/youtubeads"> Youtube Ads </Link>
                </div>
            </Drawer>
        </>
    )
}

export default App
