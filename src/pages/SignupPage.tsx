import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import facebookIcon from "../assets/login/facebook.png";
import eyeIcon from "../assets/login/eye.png";
import googleIcon from "../assets/login/google.png";
import accountIcon from "../assets/login/account.png";
import { useAuth } from "../context/AuthContext";

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

export function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return;
    }

    signUp({
      firstName,
      lastName,
      email,
      password,
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FCFCFD]">
      <Header accountMode="avatar" authHeader />

      <main className="mx-auto flex w-full max-w-[1920px] flex-col items-center px-4 pb-12 pt-[47px] md:px-8 md:pb-16 md:pt-[204px]">
        <section className="flex w-full flex-col items-center">
          <div className="mb-3 flex items-center gap-[9px] md:mb-2">
            <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-[#030711] text-[24px] font-bold leading-none text-white md:h-10 md:w-10 md:text-[22px]">
              S
            </span>
            <span className="text-[25px] font-bold leading-8 text-[#030711] md:text-[24px]">STYLE</span>
          </div>

          <p className="mb-[34px] text-center text-[17px] leading-6 text-[#6B7280] md:mb-[34px] md:text-[16px]">
            Create your account and start shopping
          </p>

          <div className="w-full max-w-[358px] rounded-[13px] bg-white px-6 pb-7 pt-7 shadow-[0_10px_30px_rgba(3,7,17,0.12)] md:max-w-[480px] md:px-7 md:pb-7 md:pt-7">
            <header className="mb-7 text-center md:mb-6">
              <h1 className="text-[24px] font-bold leading-8 text-[#030711] md:text-[24px]">Create Account</h1>
              <p className="mx-auto mt-2 max-w-[285px] text-[16px] leading-6 text-[#6B7280] md:max-w-none md:text-[15px] md:leading-5">
                Join our community and discover amazing fashion
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
              <span className="whitespace-nowrap text-[12px] font-medium text-[#6B7280] md:text-[11px]">OR CREATE WITH EMAIL</span>
              <span className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <label className="grid min-w-0 gap-2">
                  <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">First name</span>
                  <span className="flex h-11 min-w-0 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                    <img src={accountIcon} alt="" className="h-5 w-5 shrink-0 object-contain opacity-70 md:h-[18px] md:w-[18px]" />
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="First name"
                      className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                    />
                  </span>
                </label>

                <label className="grid min-w-0 gap-2">
                  <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Last name</span>
                  <span className="flex h-11 min-w-0 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 md:h-10">
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Last name"
                      className="h-full min-w-0 flex-1 bg-transparent text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                    />
                  </span>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Email address</span>
                <span className="flex h-11 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                  <MailIcon />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Password</span>
                <span className="flex h-11 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                  <LockIcon />
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Create a password"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                  />
                  <img src={eyeIcon} alt="" className="h-5 w-5 shrink-0 object-contain md:h-[18px] md:w-[18px]" />
                </span>
                <span className="text-[12px] leading-4 text-[#6B7280] md:text-[11px]">Must be at least 8 characters long</span>
              </label>

              <label className="grid gap-2">
                <span className="text-[15px] font-semibold text-[#030711] md:text-[14px]">Confirm password</span>
                <span className="flex h-11 items-center rounded-[10px] border border-[#D9DDE4] bg-white px-3 text-[#6B7280] md:h-10">
                  <LockIcon />
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Confirm your password"
                    className="h-full min-w-0 flex-1 bg-transparent pl-3 text-[16px] text-[#030711] outline-none placeholder:text-[#6B7280] md:text-[14px]"
                  />
                  <img src={eyeIcon} alt="" className="h-5 w-5 shrink-0 object-contain md:h-[18px] md:w-[18px]" />
                </span>
              </label>

              <div className="grid gap-4 md:gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-[2px] h-5 w-5 shrink-0 rounded-full border-[1.5px] border-[#030711] md:h-4 md:w-4" />
                  <p className="text-[14px] font-semibold leading-5 text-[#030711] md:text-[13px] md:leading-[18px]">
                    I agree to the Terms of Service and Privacy Policy
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-[2px] grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#030711] text-white md:h-4 md:w-4">
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3 w-3">
                      <path d="m4 8.2 2.45 2.35L12 5.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-[14px] font-semibold leading-5 text-[#030711] md:text-[13px] md:leading-[18px]">
                    Subscribe to our newsletter for exclusive offers and updates
                  </p>
                </div>
              </div>

              <button type="submit" className="mt-1 h-12 rounded-[10px] bg-[#030711] text-[16px] font-medium text-white md:h-11 md:text-[14px]">
                Create Account
              </button>
            </form>

            <p className="mt-7 text-center text-[15px] text-[#6B7280] md:mt-6 md:text-[14px]">
              Already have an account? <Link to="/login" className="font-semibold text-[#030711]">Sign in</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
