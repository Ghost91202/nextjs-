"use client";
import './faq.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./gsap.css"
gsap.registerPlugin( ScrollTrigger );


export default function FAQ() {
    useEffect( () => {
        const tl = gsap.timeline( {
            scrollTrigger: {
                trigger: '.slide-container',
                start: 'bottom center',
                end: 'top center',
                scrub: 1,
            },
        } );

        tl.from( '.left-text', { x: '-100%', opacity: 0 } );
        tl.from( '.right-text', { x: '100%', opacity: 0 }, '-=1' );
        tl.to( '.left-text, .right-text', { x: '0%', opacity: 1, ease: 'power2.out' } );
    }, [] );
    return (
        <div className=" lg:p-10 flex pb-10 pt-10  justify-center w-screen bg-slate-900 font-mono text-white overflow-x-hidden items-center">
            <div className=" accordion relative w-screen justify-center flex lg:gap-10">
                <div className="slide-container  lg:text-6xl  text-2xl  lg:mb-0 -mb-32  overflow-hidden flex ">
                    <div className='h-44'> <div className="left-text">
                        <h1 className="text-left ">Frequently</h1>
                    </div>
                        <div className="right-text ">
                            <h1 className=" text-right text-blue-700">Asked Question</h1>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col  justify-center'>
                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion1" />
                        <div className='flex justify-between '>
                            <label for="accordion1" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>What is SEO, and why is it important for online businesses?</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm"> SEO, or Search Engine Optimization, is the practice of optimizing a website to improve its visibility on search engines like Google. It involves various techniques to enhance a site&apos;s ranking in search results. SEO is crucial for online businesses as it helps drive organic traffic, increases visibility, and ultimately leads to higher conversions.
</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion2" />
                        <div className='flex justify-between '>
                            <label for="accordion2" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>How long does it take to see results from SEO efforts?</label>
                            <MdKeyboardArrowDown className='text-3xl   ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm">The timeline for seeing results from SEO can vary based on several factors, such as the competitiveness of keywords, the current state of the website, and the effectiveness of the SEO strategy. Generally, it may take several weeks to months before noticeable improvements occur. However, long-term commitment to SEO is essential for sustained success.</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion3" />
                        <div className='flex justify-between '>
                            <label for="accordion3" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>What are the key components of a successful SEO strategy?</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm ">A successful SEO strategy involves various components, including keyword research, on-page optimization, quality content creation, link building, technical SEO, and user experience optimization. These elements work together to improve a website&apos;s relevance and authority in the eyes of search engines.</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion4" />
                        <div className='flex justify-between '>
                            <label for="accordion4" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>How does mobile optimization impact SEO?</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm ">Mobile optimization is crucial for SEO because search engines prioritize mobile-friendly websites. With the increasing use of smartphones, search engines like Google consider mobile responsiveness as a ranking factor. Websites that provide a seamless experience on mobile devices are more likely to rank higher in search results.</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion5" />
                        <div className='flex justify-between '>
                            <label for="accordion5" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>What is the role of backlinks in SEO, and how can they be acquired?</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm">Backlinks, or inbound links from other websites to yours, play a significant role in SEO. They are considered a vote of confidence and can improve a site&apos;s authority. Quality over quantity is crucial when acquiring backlinks. Strategies for obtaining backlinks include creating high-quality content, guest posting, reaching out to industry influencers, and participating in community activities. It&apos;s important to focus on natural and ethical link-building practices.</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
