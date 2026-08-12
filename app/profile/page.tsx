import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { ProfileChapterNav } from "../components/ProfileChapterNav";
import { profileChapters } from "../content/profile";

export const metadata: Metadata = {
  title: "Profile | Shashank H D",
  description: "How Shashank H D learns, works, and approaches software engineering.",
};

const emailHref =
  "mailto:hdshashankgowda@gmail.com?subject=Software%20Engineering%20Opportunity";

function ActionArrow({ download = false }: { download?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="size-[18px] fill-none stroke-current [stroke-width:1.4] transition-transform duration-[160ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      {download ? <path d="M9 2.5v9m0 0 3.5-3.5M9 11.5 5.5 8M3 15.5h12" /> : <path d="M4 14 14 4M6 4h8v8" />}
    </svg>
  );
}

export default function ProfilePage() {
  return (
    <main id="main-content" className="bg-transparent">
      <header className="relative mx-[var(--page-gutter)] grid min-h-[min(720px,calc(100svh-76px))] w-auto content-center overflow-hidden border-x border-b border-rule bg-paper px-[clamp(24px,7.4vw,94px)] py-[clamp(72px,9vw,132px)] after:pointer-events-none after:absolute after:right-[-.04em] after:bottom-[-.18em] after:[font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] after:text-[clamp(100px,20vw,290px)]/none after:tracking-[-.04em] after:text-transparent after:content-['PROFILE'] after:[-webkit-text-stroke:1px_color-mix(in_srgb,var(--blue)_20%,transparent)] max-[560px]:mx-0 max-[560px]:min-h-[calc(100svh-68px)] max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[76px] max-[560px]:pb-16">
        <p className="mt-0 mb-7 font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase">
          Profile · The person behind the work
        </p>
        <h1 className="relative z-[1] m-0 max-w-[1020px] [font-family:var(--font-display)] text-[length:var(--heading-page-size)] leading-[.86] font-black tracking-[-.035em] uppercase">
          Learning is how I turn uncertainty into useful work.
        </h1>
        <p className="relative z-[1] mt-[clamp(36px,5vw,58px)] mr-0 mb-0 ml-[clamp(0px,10vw,150px)] max-w-[680px] border-l-[7px] border-signal pl-[22px] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(17px,1.7vw,22px)]/[1.55] text-muted max-[560px]:ml-0 max-[560px]:border-l-[5px] max-[560px]:pl-[15px] max-[560px]:text-base">
          This is the deeper story behind the projects and roles: where my curiosity comes from,
          how I learn, and the principles I am developing as an engineer. The narrative is being
          authored carefully; each chapter below marks the shape of the final story.
        </p>
      </header>

      <div className="mx-[var(--page-gutter)] grid w-auto grid-cols-[minmax(220px,.34fr)_minmax(0,1fr)] border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] max-[880px]:block max-[880px]:p-0 max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0">
        <ProfileChapterNav chapters={profileChapters} />

        <div className="min-w-0 border-l border-rule max-[880px]:border-l-0">
          {profileChapters.map((chapter, index) => (
            <article
              className="min-h-[min(760px,88svh)] scroll-mt-[76px] border-b border-rule pt-[clamp(72px,8vw,112px)] pb-[clamp(72px,8vw,112px)] pl-[clamp(38px,7vw,96px)] last:border-b-0 max-[880px]:scroll-mt-[130px] max-[880px]:px-[clamp(24px,7vw,58px)] max-[560px]:min-h-0 max-[560px]:scroll-mt-[122px] max-[560px]:px-4 max-[560px]:py-[72px]"
              id={chapter.id}
              key={chapter.id}
              aria-labelledby={`${chapter.id}-title`}
            >
              <div className="mb-[clamp(32px,5vw,56px)] font-mono text-[10px]/[1.2] font-bold tracking-[.11em] text-blue uppercase max-[560px]:grid-cols-[26px_1fr] max-[560px]:gap-2.5">
                <span>{chapter.eyebrow}</span>
              </div>
              <h2 className="m-0 max-w-[800px] [font-family:var(--font-display)] text-[length:var(--heading-section-size)] leading-[.9] font-black tracking-[-.03em] uppercase" id={`${chapter.id}-title`}>
                {chapter.title}
              </h2>
              <div className="mt-[clamp(34px,5vw,56px)] max-w-[720px] max-[560px]:mt-8">
                {chapter.paragraphs.map((paragraph) => (
                  <p className="mt-0 mb-[1.25em] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(17px,1.5vw,20px)]/[1.65] text-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {chapter.quote && (
                <blockquote className="mt-[clamp(40px,5vw,58px)] mr-0 mb-0 max-w-[690px] border-t border-l-[7px] border-rule border-l-blue pt-6 pl-[clamp(22px,3vw,38px)] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(20px,2.1vw,29px)]/[1.4] italic text-ink">
                  {chapter.quote}
                </blockquote>
              )}
              {chapter.facts && (
                <dl className="mt-[clamp(42px,6vw,70px)] mb-0 grid max-w-[720px] grid-cols-2 border border-rule max-[560px]:grid-cols-1">
                  {chapter.facts.map((fact) => (
                    <div className="min-h-[104px] border-r border-rule p-5 last:border-r-0 max-[560px]:border-r-0 max-[560px]:border-b max-[560px]:last:border-b-0" key={fact.label}>
                      <dt className="font-mono text-[8px]/none font-bold tracking-[.12em] text-signal uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-4 mb-0 [font-family:Arial_Narrow,Arial,sans-serif] text-lg font-extrabold text-ink uppercase">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      </div>

      <section className="mx-[var(--page-gutter)] w-auto border-x border-b border-rule bg-paper px-[clamp(24px,7.4vw,94px)] py-[clamp(78px,10vw,138px)] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:py-[74px]" aria-labelledby="profile-closing-title">
        <p className="mt-0 mb-7 font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase">
          Next step
        </p>
        <h2 className="m-0 max-w-[980px] [font-family:var(--font-display)] text-[length:var(--heading-section-size)] leading-[.9] font-black tracking-[-.03em] uppercase" id="profile-closing-title">
          Let&apos;s turn the next unfamiliar problem into useful software.
        </h2>
        <div className="mt-[clamp(40px,5vw,58px)] flex flex-wrap gap-2.5 max-[560px]:flex-col">
          <a className="group inline-flex min-h-[52px] min-w-56 items-center justify-between gap-7 border border-blue-solid bg-blue-solid px-4 py-3.5 font-mono text-[10px]/none font-bold tracking-[.09em] text-white uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[4px_4px_0_var(--rule)] max-[560px]:w-full" href="/resume.pdf" download>
            Download résumé <ActionArrow download />
          </a>
          <a className="group inline-flex min-h-[52px] min-w-56 items-center justify-between gap-7 border border-rule bg-raised px-4 py-3.5 font-mono text-[10px]/none font-bold tracking-[.09em] uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[4px_4px_0_var(--rule)] max-[560px]:w-full" href={emailHref}>
            Hire me <ActionArrow />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
