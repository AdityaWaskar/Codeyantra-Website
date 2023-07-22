// import React, { useState } from 'react'
// import './navigation.css'
// import {Link} from 'react-router-dom'

// const Navigation = (props) => {
//   const [navState, setNavState] = useState(props.page)
//   return (
//     <nav>
//         <div className="left">
//             <Link to={{pathname:  `/`,}}>
//                     CODEYANTRA
//                   </Link>
//         </div>
//         <div className="middle">
//             <ul>
//                 <li className={navState === 'home' ? 'active' : 'inactive'} onClick={()=>{setNavState('home')}}>
//                     {/* <a href="">
//                       Home
//                     </a> */}
//                   <Link to={{pathname:  `/home`,}}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className={navState==='about' ? 'active': 'inactive'} onClick={()=>{setNavState('about')}}>
//                   {/* <a href="">
//                     About Us
//                   </a> */}
//                     <Link to={{pathname:  `/about`,}}>
//                       About Us
//                     </Link>
//                   </li>
//                 <li className={navState==='Team_members' ? 'active': 'inactive'} onClick={()=>{setNavState('Team_members')}}>
//                   {/* <a href="">
//                     Contact Us
//                   </a> */}
//                     <Link to={{pathname:  `/Team_members`,}}>
//                       Team Members
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     </nav>
//   )
// }

// export default Navigation

import React from "react";
import MenuToggler from "./menuToggler/MenuToggler";
import "./navigation.css";
import SubNav from "./SubNav";
import { motion, useCycle } from "framer-motion";

const sidebarVariants = {
  open: {
    clipPath: `circle(1000px at 40px 40px)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const Navigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  console.log(isOpen);
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.div className="background" variants={sidebarVariants} />
      <MenuToggler toggle={toggleOpen} />
      <SubNav isOpen={isOpen} />
    </motion.nav>
  );
};

export default Navigation;
