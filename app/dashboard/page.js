"use client";
import { ProductActivities } from "@/components/dashboard/ProductActivities";
import { ProductStat } from "@/components/dashboard/ProductStat";
import { ProductStatsInfo } from "@/components/dashboard/ProductStatsInfo";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <TopNavigation></TopNavigation>
      <ProductStatsInfo></ProductStatsInfo>
      <ProductActivities></ProductActivities>
      <ProductStat></ProductStat>
    </>
  );
}
