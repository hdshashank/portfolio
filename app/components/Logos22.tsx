import { cn } from "@/lib/utils";

export type LogosDoubleRowStaticLogo = Logo & {
  href?: string;
};

interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface LogosDoubleRowStaticProps {
  topRow: LogosDoubleRowStaticLogo[];
  bottomRow: LogosDoubleRowStaticLogo[];
  className?: string;
}

type Props = Partial<LogosDoubleRowStaticProps>;

const defaultProps: LogosDoubleRowStaticProps = {
  topRow: [],
  bottomRow: [],
};

function LogoLockup({ logo }: { logo: LogosDoubleRowStaticLogo }) {
  const image = (
    <span className="flex max-w-full items-center justify-center gap-[9px] max-[560px]:gap-[7px]">
      <picture
        className="block size-[27px] shrink-0 max-[560px]:size-5"
        aria-hidden="true"
      >
        {logo.srcDark && <source srcSet={logo.srcDark} media="(prefers-color-scheme: dark)" />}
        <img
          src={logo.src}
          alt=""
          className={cn(
            "block size-full [filter:none] [[data-theme=dark]_&]:invert",
            logo.className,
          )}
        />
      </picture>
      <span className="block min-w-0 whitespace-normal [font-family:Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[clamp(16px,1.55vw,21px)] leading-[1.2] font-bold tracking-[-.035em] text-inherit max-[560px]:text-sm max-[560px]:leading-[1.15]">
        {logo.alt}
      </span>
    </span>
  );

  if (!logo.href) return image;

  return (
    <a href={logo.href} className="text-inherit" aria-label={logo.alt}>
      {image}
    </a>
  );
}

export function Logos22(props: Props) {
  const { topRow, bottomRow, className } = { ...defaultProps, ...props };
  const logos = [...topRow, ...bottomRow];

  return (
    <div className={cn("w-full", className)}>
      <div className="mx-auto w-full">
        <div className="flex w-full flex-wrap items-stretch justify-center border-t border-rule">
          {logos.map((logo, index) => (
            <div
              className="flex min-h-[clamp(126px,11.5vw,148px)] min-w-0 basis-1/6 shrink-0 items-center justify-center border-r border-b border-l border-rule px-4 py-6 max-[880px]:basis-1/3 max-[560px]:min-h-[78px] max-[560px]:basis-1/2 max-[560px]:px-2 max-[560px]:py-3"
              key={`${logo.src}-${index}`}
            >
              <LogoLockup logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
