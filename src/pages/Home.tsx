import { Link } from "react-router-dom";
import heroImage from "../assets/OnMove-15.svg";
import introImage from "../assets/OnMove-14.svg";
import rideImage from "../assets/OnMove-13.svg";
import offerImage from "../assets/OnMove-12.svg";
import benefit1 from "../assets/OnMove-10.svg";
import benefit2 from "../assets/OnMove-09.svg";
import benefit3 from "../assets/OnMove-08.svg";
import logo from "../assets/Gold-Onmove.png";

const heroPhrases = [
  "Find your next ride near you.",
  "Share routes, save time, and move smarter.",
  "Meet people on the way to the same destination.",
];

const benefits = [
  {
    title: "Quick solutions near you",
    text: "Discover rides around your area and get moving without wasting time.",
    image: benefit1,
  },
  {
    title: "Travel at no cost",
    text: "Post or join a ride and make everyday trips lighter on your wallet.",
    image: benefit2,
  },
  {
    title: "Connect with others",
    text: "Turn daily travel into a more social, friendly and useful experience.",
    image: benefit3,
  },
];

function SectionCard({
  eyebrow,
  title,
  text,
  image,
  reverse = false,
  buttonLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  buttonLabel?: string;
}) {
  return (
    <section className={`relative overflow-hidden py-20 sm:py-24 ${reverse ? "bg-brand-dark text-brand-cream" : "bg-brand-cream text-brand-dark"}`}>
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(204,166,87,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(17,24,39,0.08),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className={`${reverse ? "lg:order-2" : ""} space-y-6`}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className={`max-w-xl text-base leading-7 ${reverse ? "text-brand-cream/80" : "text-brand-dark/80"}`}>
            {text}
          </p>
          {buttonLabel ? (
            <Link
              to="/post_ride_page"
              className="inline-flex items-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-dark transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {buttonLabel}
            </Link>
          ) : null}
        </div>

        <div className={`${reverse ? "lg:order-1" : ""} flex justify-center`}>
          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/40 p-4 shadow-2xl backdrop-blur-sm">
            <img
              src={image}
              alt={title}
              className="h-[260px] w-full rounded-[1.5rem] object-cover sm:h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-brand-cream text-brand-dark">
      <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f9f4ea_0%,#fbf7f0_40%,#f7f0e5_100%)]" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-dark/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-16 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-brand-dark/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
              <img src={logo} alt="OnMove" className="h-6 w-6" />
              <span className="text-sm font-medium text-brand-dark/80">Move together, save together.</span>
            </div>

            <h1 className="max-w-2xl font-display text-5xl font-semibold leading-[1.02] text-brand-dark sm:text-6xl lg:text-7xl">
              Your city,
              <span className="block text-brand-gold">your ride,</span>
              <span className="block text-brand-dark">made easy.</span>
            </h1>

            <div className="mt-6 h-16 overflow-hidden sm:h-20">
              <div className="hero-marquee space-y-2 text-lg font-medium text-brand-dark/80 sm:text-2xl">
                {heroPhrases.map((phrase) => (
                  <p key={phrase} className="flex min-h-16 items-center sm:min-h-20">
                    {phrase}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-4 max-w-xl text-base leading-7 text-brand-dark/75 sm:text-lg">
              OnMove helps you find nearby rides or share yours in a simple, clean and social way.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/post_ride_page"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-brand-cream transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Post a ride
              </Link>
              <Link
                to="/rides"
                className="inline-flex items-center justify-center rounded-full border border-brand-dark/15 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-dark transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Find a ride
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-x-6 top-10 h-[72%] rounded-[2.5rem] bg-brand-dark/5 blur-2xl" />
            <div className="relative w-full max-w-2xl">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-dark/10 bg-white/75 p-4 shadow-[0_20px_80px_rgba(17,24,39,0.14)] backdrop-blur">
                <div className="rounded-[2rem] bg-gradient-to-br from-brand-dark via-brand-dark to-brand-dark/85 p-4 sm:p-6">
                  <img
                    src={heroImage}
                    alt="OnMove hero"
                    className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[440px]"
                  />
                </div>
                <div className="absolute bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-full border border-white/40 bg-white/80 px-5 py-4 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3 text-sm text-brand-dark/55">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    Search your route, choose a ride and move.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionCard
        eyebrow="What is OnMove"
        title="A smarter way to move around the city."
        text="OnMove connects people who already travel in similar directions. Instead of leaving seats empty, you can help someone reach their destination and make the trip more useful for everyone."
        image={introImage}
      />

      <SectionCard
        eyebrow="Get your ride"
        title="Find a ride nearby when you need it."
        text="Browse available routes, check the details and get where you need to go with less friction. This section can later connect to your ride list or search experience."
        image={rideImage}
        reverse
        buttonLabel="Find your ride"
      />

      <SectionCard
        eyebrow="Help others arrive"
        title="Post your route and give someone a lift."
        text="If you already know your route, you can share it with others and help them get to their destination. It's a practical way to reduce empty trips and make commuting more human."
        image={offerImage}
        buttonLabel="Post a ride"
      />

      <section className="relative overflow-hidden bg-brand-dark py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(204,166,87,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Why OnMove
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-cream sm:text-4xl">
              Three benefits that make moving feel easier.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group rounded-[2rem] border border-white/10 bg-white/6 p-6 text-brand-cream shadow-[0_18px_60px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-cream/80">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-dark/10 bg-brand-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-semibold text-brand-dark">
            <img src={logo} alt="OnMove" className="h-7 w-7" />
            OnMove
          </Link>

          <Link to="/about" className="text-sm font-medium text-brand-dark/70 transition-colors hover:text-brand-dark">
            Terms and conditions
          </Link>

          <p className="text-sm text-brand-dark/60">
            © 2026 OnMove. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
