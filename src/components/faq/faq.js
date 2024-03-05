"use client";
import './faq.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./gsap.css"
gsap.registerPlugin( ScrollTrigger );


export default function FAQ(params) {
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
                            <label for="accordion1" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>{params.q1}</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm"> {params.a1}
</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion2" />
                        <div className='flex justify-between '>
                            <label for="accordion2" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>{params.q2}</label>
                            <MdKeyboardArrowDown className='text-3xl   ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm">{params.a2}</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion3" />
                        <div className='flex justify-between '>
                            <label for="accordion3" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>{params.q3}</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm ">{params.a3}</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion4" />
                        <div className='flex justify-between '>
                            <label for="accordion4" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>{params.q4}</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm ">{params.a4}</div>
                    </div>

                    <div className="accordion-item border-b-2 p-5">
                        <input type="checkbox" id="accordion5" />
                        <div className='flex justify-between '>
                            <label for="accordion5" className="accordion-item-title lg:text-xl text-lg"><span className="icon"></span>{params.q5}</label>
                            <MdKeyboardArrowDown className='text-3xl  ' />
                        </div>
                        <div className="accordion-item-desc lg:text-xl text-sm">{params.a5}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
