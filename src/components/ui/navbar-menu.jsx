// src/components/ui/navbar-menu.jsx
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-sm font-medium text-white hover:text-blue-400"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute `top-[calc(100%_+_1rem)]` left-1/2 -translate-x-1/2 pt-3">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-white/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-slate-100 dark:border-white/20 bg-white/90 dark:bg-black/90 shadow-md flex justify-center items-center space-x-6 px-8 py-3"
    >
      {children}
    </nav>
  );
};

// UPDATED: uses an icon component instead of an image src
export const ProductItem = ({ title, description, href, icon: Icon }) => {
  return (
    <a
      href={href}
      className="flex items-start space-x-3 rounded-xl px-2 py-2 hover:bg-slate-50 dark:hover:bg-white/5 transition"
    >
      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-900/40">
        {Icon && <Icon className="h-4 w-4 text-sky-600 dark:text-sky-300" />}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-0.5 text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-56">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-sm text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition"
    >
      {children}
    </a>
  );
};
