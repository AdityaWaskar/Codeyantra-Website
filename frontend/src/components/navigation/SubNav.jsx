import React from "react";
import NavElement from "./navElement/NavElement";
import { AiFillHome } from "react-icons/ai";
import { MdRememberMe } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { motion } from "framer-motion";

const navigationVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const nav = [
  {
    name: "Home",
    icon: <AiFillHome />,
    link: "/",
  },
  {
    name: "About Us",
    icon: <MdRememberMe />,
    link: "/about",
  },
  {
    name: "Members",
    icon: <RiTeamFill />,
    link: "/Team_members",
  },
];

const SubNav = (props) => {
  return (
    <motion.ul
      variants={navigationVariants}
      className={!props.isOpen ? "displayNone" : null}
    >
      {nav.map((element, id) => (
        <NavElement
          name={element.name}
          key={id}
          icon={element.icon}
          link={element.link}
        />
      ))}
    </motion.ul>
  );
};

export default SubNav;
