import React from 'react';
import workTypes from './workTypes';

const workData: workTypes[] = [{
    place: "TenizenCode",
    role: "Fullstack Developer",
    years: "Sep 2023 - Aug 2023",
    description: [
        "Develop a progressive web app (PWA) for the school canteen system using Laravel & jQuery",
        "Develop Company Profile using NextJS & TailwindCSS"
    ]
},
{
    place: "PT Laisindo Anugerah Jaya Abadi",
    role: "Frontend Developer",
    years: "Sep 2023 - Aug 2023",
    description: [
        "Develop Company Profile Website For Laisindo using Laravel & jQuery",
        "Develop Product Catalogue System using Laravel & jQuery"
    ]
},
{
    place: "PT Solusi Intek Indonesia",
    role: "Fullstack Developer - Intern",
    years: "Oct 2022 - Mar 2023",
    description: [
        "Develop an Internal website using Laravel & jQuery",
        "Develop an IoT Control Application using React Native and MQTT"
    ]
}
];

const work = () => {
    return (
        workData.map((index, key) => (
            <div key={key} className="work-detail">
                <div className="details flex justify-between">
                    <div className="detail-left">
                        <div className="work-place">
                            <h1 className="font-bold text-black">{index.place}</h1>
                        </div>
                        <div className="work-role">
                            <p className="text-sm">{index.role}</p>
                        </div>
                        <div className="work-years">
                            <h1 className="text-slate-600 text-sm">{index.years}</h1>
                        </div>
                    </div>
                </div>
                <div className="description text-sm text-slate-600 mt-1">
                    <div className="desc-list flex flex-col gap-1 text-[13px]">
                        {index.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </div>
            </div>
        ))

    );
};
export default work;

