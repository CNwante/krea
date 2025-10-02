"use client";

import Navbar from "./Navbar";
import { Logo } from "./common/Logo";
import { WorkSpace } from "./layout/WorkSpace";
import RightActions from "./layout/RightActions";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-6 py-3 grid grid-cols-3 items-center">
        <div className="min-w-[200px] flex items-center gap-6">
          <Logo />
          <WorkSpace />
        </div>
        <Navbar variant="desktop" />
        <RightActions />
      </div>
    </header>
  );
};

export default Header;
