import React from "react";
import { TopProduct } from './TopProduct'
import { Schedule } from "./Schedule";

export const ProductStat = () => {
  return (
    <section className='flex w-full gap-[40px]'>
        <TopProduct></TopProduct>
        <Schedule></Schedule>
    </section>
  )
}
