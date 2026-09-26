---
name: Atelier Curatorial
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#685d51'
  on-secondary: '#ffffff'
  secondary-container: '#edddce'
  on-secondary-container: '#6c6155'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#f0e0d1'
  secondary-fixed-dim: '#d3c4b5'
  on-secondary-fixed: '#221a11'
  on-secondary-fixed-variant: '#4f453a'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 30px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-editorial:
    fontFamily: EB Garamond
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.12em
  caption-meta:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
spacing:
  gutter: 2rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---

## Brand & Style

This design system embodies the understated luxury of prestigious contemporary art monographs, high-fashion journals, and documentary publications like *Aperture*, *Cereal*, and *Kinfolk*. It exists entirely to elevate visual narrative, treating the screen as an archival paper canvas where photography commands absolute presence. 

The aesthetic is ultra-minimalist and editorial:
- **Image-Centric Hierarchy:** UI chrome retreats to near-invisibility until prompted. Interface elements never compete with image tone or aspect ratios.
- **Literary Rigor:** Thoughtful editorial typesetting paired with archival meta-tagging. The emotional posture is quiet, deliberate, and timeless.
- **Physicality of Print:** Generous margins, architectural baseline alignment, razor-thin hairline divider rules, and an absolute rejection of synthetic digital flourishes (no blurs, no pill-shaped tags, no glossy gradients).

## Colors

The palette is tuned around archival gallery paper and tactile inks. By establishing warm, non-glare neutrals, high-resolution imagery sits naturally within the page without the stark clinical glare of pure `#FFFFFF`.

### Functional Tonal Roles
- **Canvas Base (`#F7F6F2`):** Natural warm bone white. Emulates untreated cotton-rag paper stock.
- **Primary Ink (`#111111`):** Soft photogravure black. Reserved for primary display typography, key interactive states, and solid focal anchors.
- **Reading Charcoal (`#202020`):** Softened carbon black for editorial copy, long-form project essays, and primary labels, reducing harsh contrast fatigue.
- **Muted Studio Grey (`#8C8C87`):** Archival captioning, photo metadata (focal length, shutter speed, location), and disabled states.
- **Warm Taupe Accent (`#B6A89A`):** Hand-bound cloth accents, current exhibition indicators, active states, and quiet hover transitions.
- **Hairline Border Ink (`#E3E1DA`):** Ultra-subtle boundary definition that mimics delicate debossed rule lines in fine-art binding.

## Typography

The pairing creates an immediate dialogue between classical art-book prose and contemporary Swiss catalog design:
- **Editorial Voice (EB Garamond):** Display, exhibition titles, series introductions, and pull quotes. Scaled with generous vertical line breathing room and slight negative letter-spacing at large sizes to mimic high-end lithography.
- **System Voice (Inter):** Functional metadata, technical plate details (e.g., *Pl. 04 — Medium Format Negative*), curation filters, navigation links, and administrative controls.
- **Label Caps Conventions:** All navigational labels, technical taxonomy, and timestamps must render in uppercase with intentional tracking (`0.12em`), ensuring legibility at minimal sizes without asserting visual dominance.

## Layout & Spacing

The layout model adapts bookbinding pacing to responsive viewports. White space functions as a deliberate element, framing photography rather than merely filling intervals.

### Grid & Structure
- **Desktop (1024px+):** 12-column asymmetric fluid grid with `4rem` (64px) outer page margins and `2rem` (32px) gutters. Plates and images break out into curated rhythms: full-bleed spans, single 6-column center alignments, or offset 4/8-column editorial duos.
- **Tablet (768px - 1023px):** 6-column grid with `2.5rem` margins and `1.5rem` gutters. Paired horizontal photographs stack or shift to strict half-widths.
- **Mobile (<768px):** 2-column or single-column sequence with `1.25rem` (20px) margins and `1rem` gutters. Vertical rhythm increases to emphasize single-frame immersion.

### Spacing Guidelines
- Maintain absolute vertical alignment using multiples of `space-md` (1rem).
- Plate sequences demand dramatic separation: use `space-xl` between related series images, and double `space-xl` (8rem) between distinct photographic projects.

## Elevation & Depth

This design system rejects synthetic drop shadows, skeuomorphic glows, and multi-tiered z-axis projections. Flat, authentic tactile surface layering takes precedence:

- **Flat Archival Planes:** Layering is communicated solely through surface color contrast: the warm white canvas (`#F7F6F2`) contrasted with hairline structural dividers (`#E3E1DA`) and dark plate overlays (`#111111`).
- **Hairline Rules:** Single 1px solid horizontal and vertical rules (`#E3E1DA`) delineate section breaks, header navigation, and metadata matrices, echoing physical debossed guide cuts.
- **Lightboxes & Overlays:** In fullscreen viewing modes, the background shifts to a solid, opaque `#111111` or `#F7F6F2` canvas without blur effects, focusing pure optical clarity on the photographic master.

## Shapes

The shape vocabulary is strictly architectural and rectilinear (`0px` border radius across all elements).

- **Zero Curvature:** Every image container, button surface, input frame, badge, modal, and drawer uses absolute 90-degree right angles.
- **Photographic Integrity:** Visual media must never be clipped, masked into rounds, or softened. Images appear as physical prints: crisp, flat, sharp-edged rectangles true to standard film formats (3:2, 4:5, 6:7, 1:1).

## Components

### Buttons
- **Primary Action:** Solid `#111111` fill, `#F7F6F2` text, sharp corners (`0px`). Padding: `0.75rem 2rem`. Typography: `label-caps`. Hover transitions smoothly to `#B6A89A` with no transform lift.
- **Editorial Text Button (Tertiary):** Borderless `#111111` or `#202020` text with an ultra-thin 1px underline positioned 4px beneath the baseline. Hover state subtly fades the underline to `#B6A89A`.
- **Outline Action:** 1px solid border in `#111111`, transparent background. On hover, inverts to solid `#111111` with `#F7F6F2` text.

### Chips & Filter Tags
- Rendered as minimalist text labels separated by classic editorial forward slashes (` / `) or enclosed in razor-thin `1px` borders (`#E3E1DA`).
- No pill shapes. Active filters indicate state with an underscored line or an explicit `#111111` fill with `#F7F6F2` text.

### Lists & Catalog Index
- Formatted as an archival table or index ledger.
- Each row features a 1px hairline top rule (`#E3E1DA`), generous vertical padding (`1.25rem`), and columnar alignment: Plate Number (`caption-meta`), Project Title (`headline-sm`), Year/Location (`caption-meta`), and Link Arrow.
- Hover states evoke subtle row tinting (`#EFECE6`) without abrupt movement.

### Checkboxes & Radio Buttons
- Precision 14px squares (checkbox) or nested squares (radio) with 1px borders in `#202020`.
- Selected state fills the square with solid `#111111` (or an inner 6px centered black square). No rounded radios or playful toggle switches.

### Input Fields
- Underline-only minimal fields: 1px bottom border in `#8C8C87`. Background is transparent.
- On focus, bottom border deepens to `#111111` (1.5px thickness). Placeholder text set in `Inter` 13px with `#8C8C87`. No enclosed floating-label boxes.

### Cards & Image Plates
- Image containers must not use drop shadows or borders. The image asset sits raw on the `#F7F6F2` canvas.
- Captions reside beneath or alongside the image plate using `caption-meta`, structured strictly as:
  - *Title / Series* in `#202020` (medium weight or italic serif)
  - *Capture Details* (e.g., *Silver Gelatin Print, 1994*) in `#8C8C87`
- Hovering an image plate triggers a quiet opacity dip (`0.92`) or a gentle contextual metadata fade-in.

### Gallery Lightbox & Expositions
- Full-viewport modal stripping away all headers.
- Minimal controls: close icon rendered as crisp 1px intersecting lines, image index counter (`01 / 24`) set in `caption-meta` at the bottom center.