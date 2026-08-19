import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Connect } from "./components/Connect";

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="size-[18px] shrink-0 fill-none stroke-current [stroke-width:1.4] transition-transform duration-[160ms] group-hover:translate-y-0.5"
    >
      <path d="M9 2.5v9m0 0 3.5-3.5M9 11.5 5.5 8M3 15.5h12" />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 30"
      className="h-[30px] w-6 fill-none stroke-current [stroke-width:1.4] [animation:hero-scroll-hint_1.8s_ease-in-out_infinite] motion-reduce:animate-none"
    >
      <path d="M12 2v23m0 0 7-7m-7 7-7-7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section
        className="relative isolate mx-[var(--page-gutter)] flex min-h-[calc(100svh-76px)] w-auto items-center overflow-hidden border-x border-b border-rule px-[clamp(24px,5.8vw,74px)] pt-[clamp(28px,4.5vw,58px)] pb-[clamp(26px,4vw,50px)] max-[560px]:mx-0 max-[560px]:min-h-[calc(100svh-68px)] max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-6 max-[560px]:pb-[26px]"
        aria-labelledby="hero-title"
      >
        <div className="w-full pt-[clamp(48px,7vh,86px)] pb-[clamp(38px,6vh,66px)] max-[560px]:pt-[clamp(46px,8vh,70px)] max-[560px]:pb-[42px]">
          <p className="m-0 mb-[clamp(18px,2.6vw,32px)] font-mono text-[10px]/[1.3] font-bold tracking-[.14em] text-blue uppercase max-[560px]:mb-[19px] max-[560px]:text-[9px]">
            Software engineer · Bengaluru, India
          </p>
          <h1
            id="hero-title"
            className="m-0 max-w-[1130px] font-[var(--font-display)] text-[length:var(--heading-page-size)] leading-[.86] font-black tracking-[-.035em] uppercase"
          >
            <span className="block w-fit whitespace-nowrap max-[560px]:w-full max-[560px]:text-balance max-[560px]:whitespace-normal">
              Curious by nature.
            </span>
            <span className="relative mt-[.13em] block w-fit whitespace-nowrap text-[.88em] text-paper [text-shadow:.055em_.055em_0_color-mix(in_srgb,var(--blue-solid)_64%,transparent)] [-webkit-text-stroke:1.5px_var(--ink)] max-[560px]:mt-[.22em] max-[560px]:w-full max-[560px]:text-[.84em] max-[560px]:text-balance max-[560px]:whitespace-normal max-[560px]:text-blue max-[560px]:[text-shadow:none] max-[560px]:[-webkit-text-stroke:0]">
              Engineer by practice.
            </span>
          </h1>

          <div className="mt-[clamp(32px,4vw,50px)] grid max-w-[1100px] grid-cols-[9px_1fr] gap-[clamp(15px,2vw,23px)] before:bg-signal before:content-[''] max-[760px]:mt-[30px] max-[560px]:grid-cols-[6px_1fr] max-[560px]:gap-[14px]">
            <p className="m-0 font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.48] tracking-[-.01em] text-muted max-[560px]:text-base max-[560px]:leading-[1.46]">
              Information Science graduate and Software Developer Intern at Merck, with experience turning real problems into practical software.
              I&apos;m looking to bring that same curiosity and build-first mindset to software that creates meaningful value.
            </p>
          </div>

          <div className="mt-[clamp(30px,4vw,48px)] flex flex-wrap gap-2.5 max-[560px]:mt-[30px] max-[560px]:flex-col">
            <a
              className="group inline-flex min-h-[50px] min-w-[216px] items-center justify-between gap-[30px] border border-blue-solid bg-blue-solid px-4 py-3.5 font-mono text-[10px]/none font-bold tracking-[.08em] text-white uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[5px_5px_0_var(--rule)] max-[560px]:w-full max-[560px]:min-w-0"
              href="/shashank_hd_resume.pdf"
              download
            >
              <span>Download résumé</span>
              <DownloadIcon />
            </a>
          </div>
        </div>

        <a
          className="absolute bottom-[clamp(18px,3vh,30px)] left-1/2 grid h-[50px] w-11 -translate-x-1/2 place-items-center text-blue transition-colors duration-[160ms] hover:text-signal max-[560px]:bottom-[max(14px,env(safe-area-inset-bottom))]"
          href="#experience"
          aria-label="Continue to experience"
        >
          <ScrollIcon />
        </a>
      </section>
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Connect />
    </main>
  );
}
