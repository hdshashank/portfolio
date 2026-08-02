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
    <span className="logos22-lockup">
      <picture aria-hidden="true">
        {logo.srcDark && <source srcSet={logo.srcDark} media="(prefers-color-scheme: dark)" />}
        <img
          src={logo.src}
          alt=""
          className={cn(logo.className, "logos22-image")}
        />
      </picture>
      <span className="logos22-name">{logo.alt}</span>
    </span>
  );

  if (!logo.href) return image;

  return (
    <a href={logo.href} className="logos22-link" aria-label={logo.alt}>
      {image}
    </a>
  );
}

export function Logos22(props: Props) {
  const { topRow, bottomRow, className } = { ...defaultProps, ...props };
  const logos = [...topRow, ...bottomRow];

  return (
    <div className={cn("logos22", className)}>
      <div className="logos22-container">
        <div className="logos22-grid">
          {logos.map((logo, index) => (
            <div
              className="logos22-slot"
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
