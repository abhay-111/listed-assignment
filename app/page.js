import Image from 'next/image'
import { SignInForm } from '@/components/SignInForm';
export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <div className="h-full bg-[#000000] hidden  md:flex w-[40%] items-center justify-center">
        <p className="text-[72px] text-white font-[700] leading-[88px]">
          Board.
        </p>
      </div>
      <div className="h-full flex flex-1 items-center justify-center bg-[#F5F5F5]">
        <SignInForm />
      </div>
    </main>
  );
}
