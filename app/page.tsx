import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Work from "@/components/work/work";
import Skill from "@/components/skills/skill"
import About from "@/components/about/about"
import Identity from "@/components/about/identity";

export default function Home() {
  return (
    <main className="overflow-y-hidden relative">
      <div className="absolute -top-[50rem] left-0 h-full w-64 bg-gradient-to-r from-slate-900 to-slate-700/15 rounded-full -z-10  blur-[130px] opacity-90">
      </div>
      <div className="container lg:px-96 lg:pt-16 py-8 h-full  mx-auto">
        <div className="identity-box flex justify-between z-10">
          <Identity />
        </div>
        <div className="about-box mt-10 z-10">
          <About />
        </div>
        <div className="work-box mt-10 w-full z-10">
          <div className="work-title">
            <h1 className="font-extrabold text-lg">
              Work Experience
            </h1>
          </div>
          <div className="work-list flex flex-col gap-5 mt-3">
            <Work />
          </div>
        </div>
        <div className="skills-box mt-10 w-full z-10">
          <div className="skills-title">
            <h1 className="font-extrabold text-lg">
              Languages and Tools
            </h1>
          </div>
          <div className="skills-list mt-2 flex flex-wrap gap-2">
            <Skill />
          </div>
        </div>
        <Link href="/projects" className="project-link mt-8 group flex justify-end"> {/* Fixed the link by adding href="/projects" */}
          <div className="wrappers relative overflow-hidden w-fit">
            <div className="link cursor-pointer">
              <div className="link-text flex gap-2 items-center font-semibold mb-2">
                <p>See All My Project</p>
                <FaArrowRightLong />
              </div>
              <div className="line absolute group-hover:w-[100%] duration-200 w-[0%] rounded-2xl h-[2px] bg-slate-700 bottom-1"></div>
            </div>
          </div>
        </Link>
      </div>
      <svg style={{ WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,100)), to(rgba(0,0,0,0))' }} className="absolute opacity-5 inset-0 h-full w-full -z-10" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg>
      <div className="absolute -bottom-[50rem] blur-[130px] opacity-90 right-0 h-full w-64 bg-gradient-to-r from-slate-900 to-slate-700/20 rounded-full -z-10">
      </div>

    </main>
  );
}
