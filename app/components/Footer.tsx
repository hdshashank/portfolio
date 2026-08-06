export function Footer() {
  return (
    <footer className="mx-[var(--page-gutter)] grid min-h-[60px] place-items-center border-x border-rule bg-paper text-center font-mono text-[9px]/[1.3] font-semibold tracking-[.09em] text-muted uppercase max-[560px]:mx-0 max-[560px]:min-h-[82px] max-[560px]:border-x-0">
      <p className="m-0">© {new Date().getFullYear()} Shashank H D</p>
    </footer>
  );
}
