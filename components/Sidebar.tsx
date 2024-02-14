import SidebarLink from "@/components/SidebarLink";
import { SidebarLinkProps } from "@/types/propTypes";
import { Link } from "react-scroll";

const sidebarItems: SidebarLinkProps[] = [
  {
    to: "about",
    href: "/#about",
    offset: -100,
    label: "About",
  },
  {
    to: "experience",
    href: "#experience",
    offset: -50,
    label: "Experience",
  },
  {
    to: "projects",
    href: "#projects",
    offset: -100,
    label: "Projects",
  },
  {
    to: "certification",
    href: "#certification",
    offset: -100,
    label: "Certifications",
  },
  {
    to: "contact",
    href: "#contact",
    offset: -100,
    label: "Contact me",
  },
];

const Header = () => {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link
              activeClass="active"
              to="/"
              href="#"
              spy={true}
              smooth={true}
              duration={500}
            >
              James Ming
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Senior Software Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-relaxed text-justify">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
          <p className="max-w-xs leading-relaxed text-justify">
            I enjoy taking on new challenges and collaborating with other
            developers to create innovative and impactful products that solve
            real-world problems.
          </p>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-12 w-max">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <SidebarLink
                    to={item.to}
                    href={item.href}
                    offset={item.offset}
                    label={item.label}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200"
              href="https://www.linkedin.com/in/james-m-b311a52a5/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200"
              href="https://github.com/mingcnjs"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200"
              href="mailto:james.ming.ca@gmail.com?subject=Subject&body=Body%20goes%20here"
            >
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z" />
                <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0" />
              </svg>
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a className="block hover:text-slate-200" href="tel:+17786524842">
              <span className="sr-only">Phone</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
