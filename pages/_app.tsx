import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState(true);
  const toggleSidebar = () => {
    setActive(active === true ? false : true);
    
  };
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      
      <div className="grid grid-cols-12 gap-6 px-5 my-3 lg:mb-0 md:mb-16 sm:px-2 md:px-3 lg:px-10 xl:px-20 ">
      {/*TODO BURGUER ICON*/}
      <button className="fixed hidden mx-auto mt-4 opacity-80 hover:opacity-100 inset-0 justify-center  w-10 h-10  rounded z-10 text-white bg-sky-700 font-xl " onClick={toggleSidebar}>
        <svg
            className='w-10 h-10'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg></button>
        {/* // do this div style later (after putting the content) */}
        <div className={`h-full 
                        col-span-12 
                        p-0 
                        ${active ? 'inline' : 'hidden'}
                        sm:mx-auto 
                        text-base 
                        text-center 
                        bg-white 
                        dark:bg-dark-500 
                        lg:col-span-3 
                        rounded-2xl 
                        shadow-custom-light 
                        
                        dark:shadow-custom-dark  
                        animate-in zoom-in fade-in
                        filter backdrop-blur-xl bg-opacity-20`}>
        
        
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div id="main" className="flex 
                        flex-col 
                        col-span-12   
                        overflow-hidden 
                        bg-white 
                        shadow-custom-light 
                        dark:shadow-custom-dark 
                        rounded-2xl 
                        
                        animate-in zoom-in fade-in
                        lg:col-span-9 
                        dark:bg-dark-500  
                        filter bg-opacity-20 backdrop-blur-xl">
          {/* //!navbar */}
          <Navbar />
          {/* //!about */}
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
