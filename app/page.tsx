import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Work from "@/components/work/work";
import Skill from "@/components/skills/skill"
import About from "@/components/about/about"
import Identity from "@/components/about/identity";

export default function Home() {
  return (
    <main className="container mx-auto lg:px-96 lg:pt-16 py-8">
      <div className="identity-box flex justify-between">
        <Identity />
      </div>
      <div className="about-box mt-10">
        <About />
      </div>
      <div className="work-box mt-10 w-full">
        <div className="work-title">
          <h1 className="font-extrabold text-lg">
            Work Experience
          </h1>
        </div>
        <div className="work-list flex flex-col gap-5 mt-3">
          <Work />
        </div>
      </div>
      <div className="skills-box mt-10 w-full">
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
    </main>
  );
}
