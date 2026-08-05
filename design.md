---
name: Monochrome Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
This design system embodies high-end minimalism with a focus on editorial sophistication. It targets a discerning audience that values clarity, structure, and the "quiet luxury" aesthetic typical of modern fashion houses.

The design style is **Minimalist-Editorial**. It leverages heavy whitespace to create a breathable, "gallery-like" environment where high-quality photography acts as the primary visual driver. The interface remains intentionally secondary to the product imagery, utilizing sharp lines, generous margins, and a strict adherence to a monochromatic palette to evoke a sense of timelessness and prestige.

## Colors
The palette is strictly monochromatic to ensure that the product photography remains the focal point.

- **Primary (#000000):** Used for typography, high-impact buttons, and structural borders.
- **Secondary (#FFFFFF):** The primary surface color, providing a crisp, clean canvas.
- **Neutral High (#717171):** Used for secondary text, metadata, and disabled states.
- **Neutral Mid (#E5E5E5):** Used for subtle dividers and input borders.
- **Neutral Low (#F4F4F4):** Used for soft background containers and secondary button hover states.

## Typography
The typographic hierarchy balances a classical Serif for storytelling and a functional Sans-Serif for utility.

- **Headlines:** Use **Playfair Display**. It should be used for product titles, collection names, and editorial headers. Large display sizes should use tight letter spacing for a modern look.
- **Body & UI:** Use **Inter**. It provides maximum legibility for product descriptions, pricing, and navigation. 
- **Labels:** Small labels and UI buttons should use Inter with increased letter spacing and uppercase styling to denote hierarchy without increasing font weight significantly.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain editorial control, transitioning to a fluid model for mobile.

- **Desktop:** 12-column grid with a maximum width of 1440px. Gutters are kept at 24px, while outer margins are generous (64px) to frame the content.
- **Spacing Rhythm:** Based on an 8px base unit. Use `stack-lg` (80px) between major sections to emphasize the "breathable" feel. 
- **Photography:** Images should often break the grid or span multiple columns (e.g., 6 or 8 columns) to maintain an editorial, magazine-style flow.

## Elevation & Depth
In alignment with the minimalist aesthetic, depth is handled with extreme subtlety. 

- **Tonal Layers:** Most surfaces are flat white (#FFFFFF) or light gray (#F4F4F4). 
- **Ambient Shadows:** Shadows should be almost imperceptible. Use a very large blur (32px+) with a very low opacity (3-5%) of black to lift cards slightly from the background without creating a "heavy" interface.
- **Thin Outlines:** Use 1px borders in Neutral Mid (#E5E5E5) for structural elements like inputs and table dividers. This maintains a crisp, architectural look.

## Shapes
This design system uses a "Rounded" shape language to soften the starkness of the monochromatic palette and the sharp serif typography.

- **Standard Elements:** 0.5rem (8px) for buttons, input fields, and small chips.
- **Large Elements:** 1rem (16px) for product cards and modal containers.
- **Images:** Product photography should either be sharp (0px) for a more aggressive fashion look or slightly rounded (8px) to match the UI elements, depending on the specific campaign art direction.

## Components
- **Buttons:** Primary buttons are solid Black (#000000) with White (#FFFFFF) uppercase text. Secondary buttons are outlined in 1px Neutral Mid or solid Neutral Low. Transitions should be slow and ease-in-out (approx 300ms).
- **Cards:** Product cards should have no visible border, using a subtle ambient shadow on hover only. Text alignment should be left-aligned for an asymmetrical, editorial feel.
- **Input Fields:** Use 1px bottom borders or very light gray backgrounds with 8px radius. Focus states shift the border color to Primary Black.
- **Chips/Tags:** Used for sizing and filters. These are pill-shaped (rounded-xl) with Neutral Low backgrounds and small-cap labels.
- **Icons:** Use thin-stroke (1px or 1.5px) icons. Icons should be geometric and never filled, maintaining the airy feel of the typography.
- **Navigation:** A minimal top bar with persistent search and cart icons. Use a "Mega-menu" for desktop navigation that utilizes the full width of the container with featured imagery within the dropdown.