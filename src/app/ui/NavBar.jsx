import Link from "next/link";
import ima1 from '../../../public/2.png'

import Image from "next/image";


const NavBar = () => {
  
   
    
   
    
  

  const navlinke = [ 
    {
      name: 'Home',
      element: '/'
      
    },
    {
      name: 'Service',
      element: 'service'
      
    },
    {
      name: 'Staff',
      element: 'staff'
      
    },
    {
      name: 'Other',
      element: 'other'
      
    },
    
  ]
    
  
   


  

    return (
  
        <div  className="navbar  bg-[#FFE073]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlinke.map(user=><li key={user.element}> <Link  href={user.element}>{ user.name}</Link></li>)
       }
      </ul>
    </div>
  <Image src={ima1} className='w-11 ' alt="mosque"  ></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
        navlinke.map(user=><li key={user.element} ><Link href={user.element}>{user.name}</Link></li> )
       }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-success text-xs lg:text-lg  text-white">DONATE NOW</a>
  </div>
</div>


    );
};

export default NavBar;