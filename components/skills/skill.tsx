import React from 'react'

const skill = () => {

    const skills: string[] = [
        'Laravel',
        'React',
        'Next',
        'Typescript',
        'NodeJs',
        'Javascript',
        'jQuery',
        'TailwindCSS',
        'mySQL',
        'React Native',
        'SASS',
        'GIT',
        'RestAPI',
        'PHP',
        'HTML',
        'CSS',
        'Express'
    ];

    return (
        <div className="skills-list mt-2 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <div key={index} className="skill text-sm font-medium bg-gradient-to-r from-slate-700 to-slate-900 w-fit text-white px-4 py-[.9px] rounded-md">
                    {skill}
                </div>
            ))}
        </div>
    );
}

export default skill
