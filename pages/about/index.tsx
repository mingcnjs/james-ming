import {
  backendSkills,
  frontendSkills,
  mobileSkills,
  toolsSkills,
} from "@/constants/about.constant";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-16 lg:mb-30 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          Accomplished Senior Full-Stack Developer with 12+ years of experience
          in driving user engagement via cutting-edge UI/UX solutions and ex-
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.zillow.com/"
            target="_blank"
            rel="noreferrer"
          >
            Zillow
          </a>{" "}
          developer.
        </p>
        <p className="mb-4 text-justify">
          Pioneered an in-house UI library at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.wreno.io/"
            target="_blank"
            rel="noreferrer"
          >
            Wreno
          </a>
          , slashing development cycles by 60+ hours, and led implementation of
          5 cross-platform applications at{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://app.sivo.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sivo
          </a>
          . related to the stuff that I have learned over the years in Web
          Development so it can help other people of the Dev Community.
        </p>
        <p className="mb-4 text-justify">
          Expert in{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            React
          </b>
          ,{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            React Native
          </b>
          ,{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            Node.js
          </b>
          ,{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            Express.js
          </b>
          ,{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            AWS
          </b>
          ,{" "}
          <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
            Database management
          </b>{" "}
          with proven mentorship ability. Seeking a high-growth organization to
          leverage advanced skills and make an immediate impact.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 ">
          Skill Sets
        </h2>
        <div>
          <ul
            className="mt-2 flex flex-wrap"
            aria-label="Frontend Technologies"
          >
            {frontendSkills.map((skill, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap" aria-label="Mobile Technologies">
            {mobileSkills.map((skill, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap" aria-label="Backend Technologies">
            {backendSkills.map((skill, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap" aria-label="Tools and Libraries">
            {toolsSkills.map((skill, index) => (
              <li className="mr-1.5 mt-2" key={index}>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
