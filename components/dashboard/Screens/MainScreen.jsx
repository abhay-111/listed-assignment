import React from 'react'
import { ProductActivities } from "@/components/dashboard/ProductActivities";
import { ProductStat } from "@/components/dashboard/ProductStat";
import { ProductStatsInfo } from "@/components/dashboard/ProductStatsInfo";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
export const MainScreen = ({toggleNav}) => {
  return (
    <>
      <TopNavigation toggleNav={toggleNav}></TopNavigation>
      <ProductStatsInfo></ProductStatsInfo>
      <ProductActivities></ProductActivities>
      <ProductStat></ProductStat>
    </>
  );
}
