import React from "react";
import { TopProduct } from './TopProduct'
import { Schedule } from "./Schedule";

export const ProductStat = () => {
  return (
    <section className='flex md:flex-row flex-col md:pb-[0px] pb-[40px] w-full gap-[40px]'>
        <TopProduct></TopProduct>
        <Schedule></Schedule>
    </section>
  )
}
