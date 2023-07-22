import React, { useEffect } from "react";
import "./navElement.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      //   ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      //   ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const NavElement = (props) => {
  //   useEffect(() => {
  //     return () => {
  //       const btn = document.querySelector(".element");
  //       btn.onmousemove = function (e) {
  //         const x = e.pageX - btn.offsetLeft;
  //         const y = e.pageY - btn.offsetTop;

  //         btn.style.setProperty("--x", x + "px");
  //         btn.style.setProperty("--y", y + "px");
  //       };
  //     };
  //   }, []);
  return (
    <motion.li variants={menuItemVariants} key={props.key} className="element">
      <Link to={{ pathname: props.link }}>
        <div className="icon-placeholder">{props.icon}</div>
        <div className="text-placeholder">{props.name}</div>
      </Link>
    </motion.li>
  );
};

export default NavElement;
