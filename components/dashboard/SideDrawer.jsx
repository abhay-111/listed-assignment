'use client'
import { NavListItems } from "../ui/NavListItems";
import { data } from "../../helpers/dummy";
export const SideDrawer = () => {
  return (
    <section className="h-full  min-w-[280px] hidden md:flex flex-col justify-between bg-black rounded-[30px] py-[60px] pl-[50px]">
      <div className="h-full w-full flex flex-col gap-[60px]">
        <p className="text-[36px] leading-[44px] font-bold text-white font-montserrat">
          Board.
        </p>

        <ul className="flex flex-col gap-[40px]">
          {data.navItems.map((item,index) => {
            return (
              <NavListItems
                key={index}
                index={index+1}
                text={item.text}
                iconUrl={item.iconUrl}
              ></NavListItems>
            );
          })}
        </ul>
      </div>
      <div  className="flex flex-col gap-[20px] text-white">
        <p className="text-[14px] leading-[17px]">Help</p>
        <p className="text-[14px] font-[400] leading-[17px]">Contact Us</p>
      </div>
    </section>
  );
}
