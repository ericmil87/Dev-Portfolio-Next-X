import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      
      <div className="grid grid-cols-12 gap-6 px-5 my-8 lg:mb-0 md:mb-16 sm:px-2 md:px-3 lg:px-10 xl:px-20 ">
        {/* // do this div style later (after putting the content) */}
        <div className="h-full col-span-12 p-0 max-w-lg sm:mx-auto text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark  filter backdrop-blur-xl bg-opacity-20 ">
        
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12   overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500  filter bg-opacity-20 backdrop-blur-xl">
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
