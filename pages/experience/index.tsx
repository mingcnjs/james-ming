import WorkHistoryItem from "@/components/WorkHistoryItem";
import { experienceItems } from "@/constants/experience.constant";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            {experienceItems.slice(0, 3).map((item, index) => (
              <WorkHistoryItem
                key={index}
                duration={item.duration}
                durationLabel={item.durationLabel}
                company={item.company}
                jobTitle={item.jobTitle}
                href={item.href}
                skills={item.skills}
              />
            ))}
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
              aria-label="View Full Resume"
              href="/resume/JamesMing.pdf"
              target="_blank"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Resume
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
