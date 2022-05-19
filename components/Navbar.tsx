import { useState, useEffect, FunctionComponent } from 'react'
import { Router, useRouter, withRouter } from 'next/router'

import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
   
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route} >
         <a >
            <span
               className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
               >
               {name}
            </span>
         </a>
      </Link>
   ) : null
}
/*interface NavbarProps {
   router: Router;
 }*/
const Navbar = ({router}:any) => {
   
   
   const [active, setActive] : any = useState('');
   

   /* new handler */
   

   useEffect(() => {
                              if (router.pathname == '/')  setActive('About')
                              else if (router.pathname == '/projects') setActive('Projects')
                              else if (router.pathname == '/resume') setActive('Resume')
                              
                              
      const handleRouteEnd = () => {
      
                              if (router.pathname == '/')  setActive('About')
                              else if (router.pathname == '/projects') setActive('Projects')
                              else if (router.pathname == '/resume') setActive('Resume')
                              else setActive('EYES')
                              
                                    };
      Router.events.on("routeChangeComplete", handleRouteEnd);
      Router.events.on("routeChangeError", handleRouteEnd);
      
      return () => {
         Router.events.off("routeChangeComplete", handleRouteEnd);
         Router.events.off("routeChangeError", handleRouteEnd);
   
      };
   }, []);
   /* ... */
   
   return (
     
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-green'>
            {active}
         </span>
         

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/#main'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume#main'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects#main'
            />
         </div>
      </div>
   )
}

export default withRouter(Navbar)
