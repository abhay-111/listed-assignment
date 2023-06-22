'use client'
import { SideDrawer } from "@/components/dashboard/SideDrawer";
import { MobileNav } from "@/components/dashboard/MobileNav";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { toggleMobileNav } from "../store/reducers/mainSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Layout({ children }) {
  const showMobileNav = useSelector((store)=> store.main.showMobileNav)
  const dispatch = useDispatch()
  return (
    <div className="md:p-[40px] p-[16px] bg-[#F5F5F5] h-screen w-full flex gap-[40px] overflow-hidden">
      <SideDrawer></SideDrawer>
      <section className="h-full w-full md:p-[20px] flex flex-col gap-[40px] overflow-y-scroll no-scrollbar">
        <TopNavigation toggleNav={()=> dispatch(toggleMobileNav())}></TopNavigation>
        <>{showMobileNav && <MobileNav showNav={showMobileNav}  ></MobileNav>}</>
        {children}
      </section>
    </div>
  );
}
