# Laptop Breakpoint Design

## Goal

Introduce a responsive laptop tier at 1100px that prevents compression and overflow while preserving the current large-screen, tablet, and mobile designs.

## Breakpoint behavior

- Above 1100px, keep the current layout and typography unchanged.
- At 1100px and below, slightly reduce the shared page-title scale.
- Allow both lines of the home hero headline to wrap and use balanced wrapping.
- Change the Experience and Featured Projects header grids to a single column. Their supporting copy remains below the heading with the existing orange rule and established spacing.
- Make grid children, media, actions, and other constrained elements shrink within their containers instead of forcing horizontal overflow.
- Retain the existing 880px tablet transformations and 560px mobile transformations as progressively narrower refinements.

## Implementation

Use targeted Tailwind `max-[1100px]` utilities in the affected components and one 1100px CSS custom-property override for the shared page-heading size. Do not globally replace the 880px breakpoint or alter desktop behavior.

Overflow safeguards should use intrinsic responsive constraints such as `min-w-0`, `max-w-full`, and flexible widths. They should not hide overflow that signals a genuine layout bug.

## Validation

- Confirm no horizontal overflow at representative widths around 1440px, 1100px, 1024px, 880px, 768px, and 390px.
- Confirm the hero remains unwrapped above 1100px and wraps without clipping at or below it.
- Confirm Experience and Featured Projects retain two-column headers above 1100px and stack at or below it.
- Run TypeScript checks and a production build.
