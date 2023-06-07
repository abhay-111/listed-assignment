
'use client'
import { Input } from "./ui/Input";
import { signIn} from 'next-auth/react'
export const SignInForm = () => {
  const inputConfig = [
    {
      id:1,
      labelText: "Email Address",
      type: "text",
      placeholder: "Enter your email address",
    },
    {
      id:2,
      labelText: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <section className="max-w-[385px]  md:p-[0px] flex flex-col items-center">
      <p className="md:text-[36px] text-[24px] font-bold self-start leading-[44px] font-montserrat">
        Sign In
      </p>
      <p className="md:text-[16px] text-[12px] self-start leading-[19px] mt-[5px]">
        Sign in to your account
      </p>
      <div className="flex w-full gap-[20px] justify-between mt-[26px]">
        {/* TODO: Break in component */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex md:w-[180px] w-[150px] h-[30px] bg-white rounded-[10px] items-center gap-[10px] justify-center font-montserrat"
        >
          <img
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685693166/ykzektfqmzw2wsusxesf.svg"
            className="h-[14px] w-[14px]"
            alt=""
          />
          <p className="md:text-[12px] text-[10px]  leading-[15px] text-[#858585]">
            Sign in with Google
          </p>
        </button>
        <button className="flex md:w-[180px] w-[150px] h-[30px] bg-white rounded-[10px] gap-[10px] items-center justify-center font-montserrat">
          <img
            src="https://res.cloudinary.com/dqzjevzuo/image/upload/v1685693164/i3zuq767odwknkdn9yew.svg"
            className="h-[14px] w-[14px]"
            alt=""
          />
          <p className="md:text-[12px] text-[10px] leading-[15px] text-[#858585]">
            Sign in with Apple
          </p>
        </button>
      </div>
      <div className="w-full p-[30px] bg-white rounded-[20px] mt-[25px]">
        <div className="w-full flex flex-col gap-[20px]">
          {inputConfig.map((item) => {
            return (
              <Input
                placeholder={item.placeholder}
                labelText={item.labelText}
                type={item.type}
                key={item.id}
              ></Input>
            );
          })}

          <p className="text-[#346BD4] md:text-[16px] text-[12px] leading-[19px]">
            Forgot Password?
          </p>

          <button className="w-full font-montserrat bg-black rounded-[10px] flex items-center h-[40px] justify-center font-bold md:text-[16px] text-[12px] text-white">
            Sign In
          </button>
        </div>
      </div>
      <p className="md:text-[16px] text-[12px] mt-[20px] leading-[19px] text-[#858585]">
        Don’t have an account?{" "}
        <span className="text-[#346BD4]">Register here</span>
      </p>
    </section>
  );
}
