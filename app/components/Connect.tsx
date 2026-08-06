import { Footer } from "./Footer";

const emailHref =
  "mailto:hdshashankgowda@gmail.com?subject=Software%20Engineering%20Opportunity";

const socialLinkClass =
  "relative pb-[7px] [font-family:Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[clamp(14px,1.35vw,18px)]/none font-extrabold tracking-[.045em] uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-right after:scale-x-0 after:bg-signal after:transition-transform after:duration-[220ms] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100";

export function Connect() {
  return (
    <>
      <section
        className="mx-[var(--page-gutter)] flex w-auto flex-col overflow-hidden border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] pt-[clamp(46px,5.5vw,72px)] [container-type:inline-size] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[42px]"
        id="connect"
        aria-labelledby="connect-title"
      >
        <div className="grid grid-cols-[1fr_minmax(280px,.72fr)] items-start gap-[clamp(42px,8vw,120px)] max-[880px]:grid-cols-1 max-[880px]:gap-[46px]">
          <div>
            <h2 className="mt-0 mb-[34px] font-mono text-[10px]/none font-bold tracking-[.13em] text-muted uppercase max-[560px]:mb-[22px] max-[560px]:text-[9px]" id="connect-title">
              Connect
            </h2>
            <nav className="flex flex-wrap gap-x-[34px] gap-y-[18px] max-[560px]:gap-x-[22px] max-[560px]:gap-y-4" aria-label="Social links">
              <a className={socialLinkClass} href="https://github.com/hdshashank" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className={socialLinkClass} href="https://linkedin.com/in/hdshashank/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className={socialLinkClass} href={emailHref}>Email</a>
            </nav>
          </div>

          <div className="text-right max-[880px]:text-left">
            <a className="inline-block [font-family:Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[clamp(24px,3vw,42px)]/none font-extrabold tracking-[-.025em] uppercase transition-colors duration-[160ms] hover:text-blue max-[560px]:text-[30px]" href={emailHref}>
              Hire me!
            </a>
            <p className="mt-[11px] mb-0 [font-family:Georgia,'Times_New_Roman',serif] text-base/[1.45] text-muted max-[560px]:text-[15px]">
              Open to software engineering opportunities.
            </p>
          </div>
        </div>

        <p className="mt-[clamp(100px,15vw,250px)] mb-[-.085em] flex w-full items-baseline justify-center gap-[.16em] whitespace-nowrap text-center [font-family:'Protest_Guerrilla',Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[16cqi]/[.71] font-normal tracking-[-.025em] text-ink uppercase" aria-label="Shashank H D">
          Shashank <span className="text-transparent [-webkit-text-stroke:2px_var(--blue)]">H D</span>
        </p>
      </section>

      <Footer />
    </>
  );
}
