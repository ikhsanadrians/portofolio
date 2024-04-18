import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Card from '@/components/projects/card';

const page = () => {
    return (
        <main className="overflow-y-hidden relative">
            <div className="absolute -top-[50rem] left-0 h-full w-64 bg-gradient-to-r from-slate-900 to-slate-700/15 rounded-full -z-10  blur-[130px] opacity-70">
            </div>
            <div className="container mx-auto lg:px-96 lg:pt-16 py-8 z-10">
                <div className="back">
                    <Link href="/" className="project-link group flex justify-start">
                        <div className="wrappers relative overflow-hidden w-fit">
                            <div className="link cursor-pointer">
                                <div className="link-text flex gap-2 items-center font-semibold mb-2">
                                    <FaArrowLeftLong />
                                    <p>Back</p>
                                </div>
                                <div className="line absolute group-hover:w-[100%] duration-200 w-[0%] rounded-2xl h-[2px] bg-slate-700 bottom-1"></div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="project-box w-full mt-3">
                    <div className="project-title">
                        <h1 className="font-extrabold text-lg">
                            Projects
                        </h1>
                    </div>
                    <div className="project-list mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-3">
                        <Card />
                    </div>
                </div>
            </div>
            <svg style={{ WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,100)), to(rgba(0,0,0,0))' }} className="absolute opacity-5 inset-0 h-full w-full -z-10" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg>
            <div className="absolute -bottom-[50rem] blur-[150px] opacity-40 right-0 h-full w-64 bg-gradient-to-r from-slate-900 to-slate-700/20 rounded-full -z-10">
            </div>
        </main>
    )
}

export default page
