import { NavListItems } from "../ui/NavListItems";
import { data } from "../../helpers/dummy";
export const MobileNav = ({showNav , toggleNav}) => {
    const mountedStyle = {
      animation: "inAnimation 250ms ease-in",
    };
    const unmountedStyle = {
      animation: "outAnimation 270ms ease-out",
      animationFillMode: "forwards",
    };
  return (
    <div
      onClick={() => toggleNav(false)}
      className="h-full z-[2] w-full fixed top-0 left-0 p-[12px]"
    >
      <section
        style={showNav ? mountedStyle : unmountedStyle}
        className="h-full  relative  w-[240px] flex flex-col justify-between bg-black rounded-[30px] py-[60px] pl-[50px]"
      >
        <button
          className="absolute top-[24px] right-[24px] text-white"
          onClick={() => toggleNav(false)}
        >
          <img
          className="h-[24px] w-[24px]"
            src="https://res.cloudinary.com/qtalk/image/upload/v1678376094/super-bio/icons/X_lvjq8w.svg"
            alt=""
          />
        </button>
        <div className="h-full w-full flex flex-col gap-[60px]">
          <p className="text-[24px] leading-[44px] font-bold text-white font-montserrat">
            Board.
          </p>

          <ul className="flex flex-col gap-[40px]">
            {data.navItems.map((item,index) => {
              return (
                <NavListItems
                key={index}
                  text={item.text}
                  isActive={item.isActive}
                  iconUrl={item.iconUrl}
                ></NavListItems>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-[20px] text-white">
          <p className="md:text-[14px] text-[12px] leading-[17px]">Help</p>
          <p className="md:text-[14px] text-[12px] font-[400] leading-[17px]">
            Contact Us
          </p>
        </div>
      </section>
    </div>
  );
};
