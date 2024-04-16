import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import Card from '@/components/projects/card';

const page = () => {
    return (
        <main className="container mx-auto lg:px-96 lg:pt-16 py-8">
            <div className="back">
                <Link href="/" className="project-link group flex justify-start"> {/* Fixed the link by adding href="/projects" */}
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
        </main>
    )
}

export default page
