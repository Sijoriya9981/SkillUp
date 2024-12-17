import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", link: "#service" },
  { id: 3, title: "About Us", link: "#" },
  { id: 4, title: "Our Team", link: "#" },
  { id: 5, title: "Contact Us", link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-10">
      {/* Navbar Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl">SkillUp</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden relative z-10">
          <IoMdMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />

          {/* Overlay and Dropdown */}
          {isMenuOpen && (
            <>
              {/* Transparent Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-10 z-20"
                onClick={toggleMenu}
              ></div>

              {/* Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-10 right-0 w-40 bg-white shadow-lg rounded-lg z-50"
              >
                <ul className="flex flex-col items-start gap-2 py-3 px-4">
                  {NavbarMenu.map((menu) => (
                    <li key={menu.id}>
                      <a
                        href={menu.path}
                        className="block text-left py-1 px-2 w-full hover:bg-gray-100 rounded"
                      >
                        {menu.title}
                      </a>
                    </li>
                  ))}
                  <button className="w-full text-left py-1 px-2 hover:bg-gray-100 rounded">
                    Sign In
                  </button>
                </ul>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
