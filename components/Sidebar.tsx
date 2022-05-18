import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";




const Sidebar = () => {
  const { theme, setTheme } = useTheme();


  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    
  };
  
  

  return (
    <>
    
      <div className={`container w-full h-300 animate-in fade-in zoom-in duration-1000 delay-0.5s fill-mode-backwards `} >
        
        <Image
          src="/images/eric-hero.jpg"
          alt="avatar"
          className=" mx-auto border rounded-t-md object-cover "
          height="512px"
          width="512px"
          layout="intrinsic"
          quality="100"
          
        />
      </div>
      <div className="bg-sky-900 -mt-1.5 py-2 filter backdrop-blur-xl bg-opacity-60 animate-in slide-in-from-bottom fade-in  duration-1000 delay-1s fill-mode-backwards" >
        <h3 className=" text-3xl font-medium tracking-wider font-ubuntu ">
          <span className="text-sky-100">Eric Milfont</span>
        </h3>
        <h3 className=" text-lg tracking-wider font-extralight">
          <span className="text-sky-100 ">Full Stack Web Developer</span>
        </h3>
        <h3 className=" text-sm tracking-widest font-ubuntu">
          <span className="text-green-300">Online</span>
        </h3>
      </div>
      <div className="container mt-3  animate-in slide-in-from-bottom fade-in duration-1000 delay-1.5s fill-mode-backwards">
        <div className="flex justify-center ">
        
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <div className="absolute whitespace-nowrap w-full inset-0 font-extralight text-xl text-gray-900 dark:text-white -ml-7 mt-px animate-pulse opacity-75"><div className="hidden dark:inline"><BsMoonFill /></div>
              </div>
              <input type="checkbox" name="toggle" id="toggle" onChange={changeTheme} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white  appearance-none cursor-pointer" checked={(theme === "light" ? true : false)}  />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"></label>
              <div className="absolute whitespace-nowrap w-full inset-0 font-extralight text-xl text-gray-900 dark:text-white ml-12 animate-pulse opacity-75"><div className="dark:hidden"><BsSunFill /></div>
              </div>
            </div>
        
        </div>
      </div> 
      <div className="container -mt-3 animate-in slide-in-from-bottom zoom-in duration-1000 delay-2s fill-mode-backwards "> 
        <div className="container my-10 uppercase text-lg">
        
          <a href="#_" className="relative px-12 py-4 tracking-wider text-white rounded-lg group ">
            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-500 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
            <span className="relative">Hire now!</span>
          </a>
        </div>
        
        
        
        <div className="container my-10 uppercase ">
          <Link href="/contact#main">
            <a  className="relative px-11 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Contact me</span>
            </a>
          </Link>
        </div>
        <div className="container my-10 uppercase ">
          <Link href="/resume#main">
            <a className="relative px-16 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Resume</span>
            </a>
          </Link>
        </div>
        <div className="container my-10 uppercase ">
          <Link href="/projects#main">
            <a  className="relative px-14 py-4 tracking-wider text-white rounded-lg group">
              <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-sky-800 dark:bg-gray-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg "></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-cyan-700 dark:bg-gray-700 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-lg"></span>
              <span className="relative">Projects</span>
            </a>
          </Link>
        </div>
        
        <div className="container max-w-screen-lg mx-auto mb-4">
            <div>

              <div className="flex flex-wrap justify-center gap-2">
              <Link href="http://instagram.com/ericmilfont">
                <button className="social-btn">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </button>
              </Link>
                <button className="social-btn">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </button>

                <button className="social-btn">
                  <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                  </svg>
                </button>

                <button className="social-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                  </svg>
                </button>

                
              </div>
            
          </div>
        </div>
      </div>
      


    </>
  );
};

export default Sidebar;
