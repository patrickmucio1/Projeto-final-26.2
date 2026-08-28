import { useState } from "react";
import { Header } from "../components/Header";
import facebookIcon from "../assets/login/facebook.png";
import eyeIcon from "../assets/login/eye.png";
import googleIcon from "../assets/login/google.png";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M3.75 5.75h16.5v12.5H3.75z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m4.5 7 7.5 5.5L19.5 7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="5.5" y="10" width="13" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 10V7.25A3.5 3.5 0 0 1 12 3.75a3.5 3.5 0 0 1 3.5 3.5V10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      <Header accountMode="icon" />

      <main className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-4 pb-12 pt-[48px] md:px-8 md:pb-16 md:pt-[245px]">
        <section className="flex w-full flex-col items-center">
          <div className="mb-3 flex items-center gap-[9px] md:mb-2">
            <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-[#030711] text-[24px] font-bold leading-none text-white md:h-10 md:w-10 md:text-[22px]">
              S
            </span>
            <span className="text-[25px] font-bold leading-8 text-[#030711] md:text-[24px]">STYLE</span>
          </div>

          <p className="mb-[34px] text-center text-[17px] leading-6 text-[#6B7280] md:mb-[34px] md:text-[16px]">
            Welcome back to your account
          </p>

          <div className="w-full max-w-[358px] rounded-[13px] bg-white px-6 pb-7 pt-7 shadow-[0_10px_30px_rgba(3,7,17,0.12)] md:max-w-[480px] md:px-7 md:pb-7 md:pt-7">
            <header className="mb-7 text-center md:mb-6">
              <h1 className="text-[24px] font-bold leading-8 text-[#030711] md:text-[24px]">Sign In</h1>
              <p className="mx-auto mt-2 max-w-[280px] text-[16px] leading-6 text-[#6B7280] md:max-w-none md:text-[15px] md:leading-5">
                Enter your credentials to access your account
              </p>
            </header>

            <div className="grid gap-3">
              <button type="button" className="flex h-11 w-full items-center justify-center gap-4 rounded-[10px] border border-[#D9DDE4] bg-white text-[15px] font-semibold text-[#030711] md:h-10 md:text-[14px]">
                <img src={googleIcon} alt="" className="h-5 w-5 object-contain md:h-[18px] md:w-[18px]" />
                <span>Continue with Google</span>
              </button>

              <button type="button" className="flex h-11 w-full items-center justify-center gap-4 rounded-[10px] border border-[#D9DDE4] bg-white text-[15px] font-semibold text-[#030711] md:h-10 md:text-[14px]">
                <img src={facebookIcon} alt="" className="h-5 w-5 object-contain md:h-[18px] md:w-[18px]" />
                <span>Continue with Facebook</span>
              </button>
            </div>

            <div className="my-7 flex items-center gap-3 md:my-6">
              <span className="h-px flex-1 bg-[#E5E7EB]" />
              <span className="whitespace-nowrap text-[12px] font-medium text-[#6B7280] md:text-[11px]">OR CONTINUE WITH EMAIL</span>
              <span className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <form onSubmit={(event) => event.preventDefault()} className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Email address</span>
                <span className="flex h-11 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                  <MailIcon />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="flex items-center justify-between gap-3">
                  <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Password</span>
                  <span className="text-[14px] text-[#030711] md:text-[13px]">Forgot password?</span>
                </span>
                <span className="flex h-11 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                  <LockIcon />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                  />
                  <img src={eyeIcon} alt="" className="h-5 w-5 shrink-0 object-contain md:h-[18px] md:w-[18px]" />
                </span>
              </label>

              <button type="submit" className="mt-1 h-12 rounded-[10px] bg-[#030711] text-[16px] font-medium text-white md:h-11 md:text-[14px]">
                Sign In
              </button>
            </form>

            <p className="mt-7 text-center text-[15px] text-[#6B7280] md:mt-6 md:text-[14px]">
              Don&apos;t have an account? <span className="font-semibold text-[#030711]">Sign up</span>
            </p>
          </div>

          <p className="mt-9 max-w-[350px] text-center text-[15px] leading-6 text-[#6B7280] md:mt-9 md:max-w-none md:text-[14px]">
            By signing in, you agree to our <span className="text-[#030711]">Terms of Service</span> and <span className="text-[#030711]">Privacy Policy</span>
          </p>
        </section>
      </main>
    </div>
  );
}
