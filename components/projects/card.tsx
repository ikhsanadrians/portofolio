import React from 'react';

type CardProps = {
    title: string;
    description: string;
    techStack: string[];
};

const ProjectsData: CardProps[] = [
    {
        title: "Laisindo.com",
        description: "Company Profile For PT Laisindo Anugerah Jaya Abadi",
        techStack: [
            "Laravel", "jQuery", "Bootstrap"
        ]
    },
    {
        title: "Connexsoft Web",
        description: "12 RPL SMKN 10 Jakarta Class website",
        techStack: [
            "Next", "TailwindCSS", "AOS"
        ]
    },
    {
        title: "TenizenMart Fintech",
        description: "Smart Canteen & Fintech System",
        techStack: [
            "Laravel", "jQuery", "Laravel-Wave", "Tailwind"
        ]
    },
    {
        title: "Mikro-IOT",
        description: "Application capable of controlling IoT providers like MQTT or Websocket.e",
        techStack: [
            "React Native", "Websockets", "MQTT"
        ]
    },
    {
        title: "Quora Clone",
        description: "UI clone of the Quora website with 98% identical features",
        techStack: [
            "React", "TailwindCSS", "Vite"
        ]
    },
    {
        title: "The Borobudur",
        description: "A website showcasing the Borobudur Temple",
        techStack: [
            "React", "TailwindCSS", "GSAP"
        ]
    },
    {
        title: "IOT Control Website",
        description: "A website serves as an IoT platform designed to control various electronics",
        techStack: [
            "Laravel", "jQuery", "TailwindCSS"
        ]
    },
    {
        title: "E-Library",
        description: "Library System Website",
        techStack: [
            "PHP", "jQuery", "Bootstrap"
        ]
    },
    {
        title: "Simple Chat Web App",
        description: "Simple Chat Web Application",
        techStack: [
            "HTML", "CSS", "Javascript", "Websockets"
        ]
    },
    {
        title: "Connexfest",
        description: "Event Ticketing App Design",
        techStack: [
            "Flutter",
        ]
    }
]

const Card = () => {
    return (
        ProjectsData.map((project, index) => (
            <div className="card border-[.9px] border-slate-200 p-3 rounded-md flex flex-col justify-between">
                <div className="project-details w-full">
                    <div className="title-project text-sm font-semibold">
                        {project.title}
                    </div>
                    <div className="description-project text-xs">
                        {project.description}
                    </div>
                </div>
                <div className="project-techstack flex flex-wrap gap-2 text-xs mt-8">
                    {project.techStack.map((tech, index) => (
                        <div key={index} className="stack text-xs font-medium bg-slate-100 w-fit px-2 py-1 rounded-md">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        ))

    );
};

export default Card;
