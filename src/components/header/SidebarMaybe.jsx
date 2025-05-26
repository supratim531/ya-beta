import React, { useRef, useImperativeHandle } from "react";

const SidebarMaybe = (props, ref) => {
  const sidebarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      sidebarRef.current?.classList.toggle("translate-y-[-60%]");
      sidebarRef.current?.classList.toggle("opacity-100");
    },
  }));

  return (
    <section
      ref={sidebarRef}
      className="fixed right-[1rem] top-[20%] z-[2] w-[40%] h-[20vh]  bg-[#5d5c5ca1] duration-300 sm:w-[60%] md:hidden opacity-0 backdrop-blur-[5px] rounded-[10px] shadow-md backdrop-brightness-50"
    >
      <ul className="md:hidden text-[1.5rem] text-white flex flex-col justify-center items-center h-full w-full gap-[1rem]">
          <li>
            <a className="hover:text-primary-blue" href="#service">Service</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#work">Work</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#course">Course</a>
          </li>
          <li>
            <a className="hover:text-primary-blue" href="#about">About</a>
          </li>
        </ul>
    </section>
  );
};

export default React.forwardRef(SidebarMaybe);
