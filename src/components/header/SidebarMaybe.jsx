import React, { useRef, useImperativeHandle } from "react";

const SidebarMaybe = (props, ref) => {
  const sidebarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      sidebarRef.current?.classList.toggle("translate-x-[100%]");
    },
  }));

  return (
    <aside
      onClick={() => ref.current.toggle()}
      ref={sidebarRef}
      className="fixed right-0 top-0 z-[2] h-screen w-[70%] translate-x-[100%] bg-red-400 duration-300 sm:w-[60%] md:hidden"
    ></aside>
  );
};

export default React.forwardRef(SidebarMaybe);
