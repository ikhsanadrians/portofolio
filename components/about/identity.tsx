import React from 'react';
import Image from "next/image";
import pictureProfile from "@/public/pictures/bw2.png"
import { CiMail } from "react-icons/ci";
import { MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Identity = () => {
    return (
        <>
            <div className="box-left">
                <div className="name-roles">
                    <div className="name">
                        <h1 className="text-[22px] lg:text-2xl font-bold">Ikhsan Adriansyah</h1>
                    </div>
                    <div className="role">
                        <p className="roles">Fullstack Developer</p>
                    </div>
                </div>
                <div className="locations flex items-center gap-1 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe size-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    <p className="text-[13px] text-xs">
                        East Jakarta , Indonesia
                    </p>
                </div>
                <div className="links flex gap-1 mt-2">
                    <div className="mail border-input group hover:bg-slate-200 duration-200 border-[.9px] p-[5px] rounded-lg">
                        <CiMail className="group-hover:fill-slate-900 fill-slate-600" />
                    </div>
                    <div className="phone border-input group hover:bg-slate-200 duration-200 border-[.9px] p-[5px] rounded-lg">
                        <MdPhone className="group-hover:fill-slate-900 fill-slate-600" />
                    </div>
                    <div className="github border-input group hover:bg-slate-200 duration-200 border-[.9px] p-[5px] rounded-lg">
                        <FaGithub className="group-hover:fill-slate-900 fill-slate-600" />
                    </div>
                    <div className="github border-input group hover:bg-slate-200 duration-200 border-[.9px] p-[5px] rounded-lg">
                        <FaLinkedin className="group-hover:fill-slate-900 fill-slate-600" />
                    </div>
                </div>
            </div>
            <div className="box-right">
                <div className="picture-img h-28 w-28 rounded-xl overflow-hidden shadow-2xl">
                    <Image src={pictureProfile} alt="profile-pics" className="w-full h-full object-cover brightness-90" />
                </div>
            </div>
        </>
    );
};

export default Identity;
