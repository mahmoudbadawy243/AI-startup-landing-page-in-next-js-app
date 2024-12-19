import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import HeaderButton from "@/components/HeaderButton";

export const Header = () => {
  return (
    <header className=" py-4 border-b border-white/15 md:border-none sticky top-0 z-20 backdrop-blur ">
      <div className="md:container px-8 ">
        <div className="flex justify-between items-center md:border border-white/15 md:p-3 rounded-xl max-w-3xl mx-auto  relative">
          {/* <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div> */}
          <div className="border border-white/15 h-10 w-10 rounded-lg  inline-flex justify-center items-center">
            <LogoIcon className="h-8 w-8" />
          </div>
          <nav className="md:flex gap-8 text-sm hidden ">
            <a href="#" className="text-white/70 hover:text-white transition">
              Feature
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Developers
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              ChangeLog
            </a>
          </nav>
          <div className="flex gap-4 items-center">
            <HeaderButton />
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
