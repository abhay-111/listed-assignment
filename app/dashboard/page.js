import { TopNavigation } from '@/components/dashboard/TopNavigation'
import { UserStats } from '@/components/dashboard/UserStats'
import React from 'react'

export default function Page(){
  return (
    <>
      <TopNavigation></TopNavigation>
      <UserStats></UserStats>
    </>
  );
}
