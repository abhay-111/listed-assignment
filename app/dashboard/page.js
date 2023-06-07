"use client";
import { ProductActivities } from "@/components/dashboard/ProductActivities";
import { ProductStat } from "@/components/dashboard/ProductStat";
import { ProductStatsInfo } from "@/components/dashboard/ProductStatsInfo";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { SideDrawer } from "@/components/dashboard/SideDrawer";
import { MobileNav } from "@/components/dashboard/MobileNav";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [showNav, setShowNav] = useState(false)
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="md:p-[40px] p-[16px] bg-[#F5F5F5] h-screen w-full flex gap-[40px] overflow-hidden">
      <SideDrawer></SideDrawer>
      <section className="h-full w-full md:p-[20px] flex flex-col gap-[40px] overflow-y-scroll no-scrollbar">
        <>
          {showNav && (
            <MobileNav
              showNav={showNav}
              toggleNav={setShowNav}
            ></MobileNav>
          )}
          <TopNavigation toggleNav={setShowNav}></TopNavigation>
          <ProductStatsInfo></ProductStatsInfo>
          <ProductActivities></ProductActivities>
          <ProductStat></ProductStat>
        </>
      </section>
    </div>
  );
}
