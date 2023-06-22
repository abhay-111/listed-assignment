"use client";
import { MainScreen } from "@/components/dashboard/Screens/MainScreen";
import React, { useEffect, useState } from "react";
import { MobileNav } from "@/components/dashboard/MobileNav";
import dynamic from "next/dynamic";
import { Map } from "@/components/dashboard/Screens/MapScreen";
import { useSelector } from "react-redux";
export default function Page() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const screen = useSelector((store) => store.main.count);
  console.log(screen);
  const chooseCurrentComponent = () => {
    if (screen == 1) {
      setCurrentComponent(<Map></Map>);
    } else {
      setCurrentComponent(<MainScreen></MainScreen>);
    }
  };
  useEffect(() => {
    setDomLoaded(true);
    chooseCurrentComponent();
  }, [screen]);
  return <>{currentComponent}</>;
}
