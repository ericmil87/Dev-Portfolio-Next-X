import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 bg-gray-400 dark:bg-dark-100 filter bg-opacity-50  ">
      <div className="container animate-in  fade-in  duration-1000 delay-0.5s fill-mode-backwards">
      <h6 className="my-3 text-xl font-medium">
        Over 20 years of experience working on Web Developement.
      </h6>
      <p className="my-3 h-full text-lg w-full justify-start  font-medium ">
      I can develop and guarantee the high availability in the cloud of digital products, as well as I know Digital Marketing and how to set up digital campaigns, create and manage ads, sales funnels, etc.
      <br/>
      I love to innovate and think “outside the box”. I founded more than 3 startups that received several awards and investments.
      <br/>
      I have been leading digital projects for over a decade, working with in-office or home-office teams around the world that way I am able to escale and manage your IT team and Projects.
      </p>
      </div>
      
      <div className=" lg:flex items-center justify-center lg:justify-end gap-4 -mx-2 ">
        <Link href="/projects">
          <a  className="block mt-2 lg:flex rounded-md px-3.5 py-2  overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-500 text-sky-900 tracking-wide animate-in slide-in-from-left fade-in  duration-1000 delay-2s fill-mode-backwards  ">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-sky-900 dark:text-sky-200  transition duration-300 group-hover:text-white ease">CHECK OUT MY PROJECTS</span>
          </a>
        </Link>
        <Link href="/resume">
        <a  className="block mt-2 lg:flex rounded-md px-3.5 py-2  overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-500 text-sky-900 tracking-wide animate-in slide-in-from-left fade-in  duration-1000 delay-1.5s fill-mode-backwards ">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-sky-900 dark:text-sky-200 transition duration-300 group-hover:text-white ease">DOWNLOAD RESUME</span>
        </a>
        </Link>
        <Link href="/contact">
        <a className="block mt-2 lg:flex rounded-md px-3.5 py-2  overflow-hidden relative group cursor-pointer border-2 font-medium border-sky-500 text-sky-900 tracking-wide  animate-in slide-in-from-left fade-in  duration-1000 delay-1s fill-mode-backwards">
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-sky-900 dark:text-sky-200 transition duration-300 group-hover:text-white ease">CONTACT ME</span>
        </a>
        </Link>
      </div>
      <div
        className="flex-grow p-4 mt-5 -mx-6  "
      
      >
        
        <h4 className="my-3 text-xl font-semibold tracking-wide animate-in slide-in-from-bottom fade-in  duration-1000 delay-2.5s fill-mode-backwards">
          What I can do for you
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-sky-900 text-white rounded-lg dark:bg-dark-200 md:col-span-1 animate-in slide-in-from-bottom fade-in  duration-1000 delay-2.5s fill-mode-backwards "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
