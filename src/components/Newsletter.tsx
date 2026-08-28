import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#030711] px-4 pb-6 pt-[78px] text-white md:px-5 md:py-[104px]">
      <div className="mx-auto max-w-[650px] text-center">
        <h2 className="text-[31px] font-bold leading-[1.2] tracking-[-0.02em] md:text-[36px]">Stay in Style</h2>
        <p className="mx-auto mt-5 max-w-[350px] text-[20px] leading-7 text-[#D1D5DB] md:max-w-[610px] md:text-[15px] md:leading-6">
          Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-9 flex w-full max-w-[360px] flex-col gap-4 md:mt-8 md:max-w-[520px] md:flex-row md:gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setSubmitted(false);
            }}
            placeholder="Enter your email"
            className="h-12 w-full rounded-[12px] border-0 bg-white px-4 text-left text-[16px] text-[#030711] outline-none placeholder:text-[#9CA3AF] md:flex-1 md:rounded-[8px] md:text-[13px]"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="h-11 w-full rounded-[12px] bg-white px-7 text-[14px] font-semibold text-[#030711] md:h-12 md:w-auto md:rounded-[8px] md:text-[12px]"
          >
            Subscribe
          </button>
        </form>

        {submitted && <p className="mt-3 text-[12px] text-[#D1D5DB]">Thanks for subscribing!</p>}
      </div>
    </footer>
  );
}
