# Portfolio Website Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from award-winning portfolio sites (Dribbble, Behance) and modern developer portfolios, emphasizing bold visual hierarchy and immersive project showcases. Prioritizing visual storytelling over traditional landing page patterns.

## Core Design Principles

1. **Visual-First Storytelling**: Lead with work, minimize unnecessary introductory content
2. **Asymmetric Balance**: Break grid conventions strategically for visual interest
3. **Bold Typography**: Use type as a design element, not just for readability
4. **Breathing Room**: Generous whitespace to let projects shine

## Layout System

**Spacing Units**: Tailwind units of 4, 8, 12, 16, 24 (p-4, m-8, py-12, gap-16, py-24)
- Section padding: py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-16
- Card padding: p-8
- Micro spacing: p-4, gap-4

**Container Strategy**:
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-6
- Text content: max-w-4xl

## Typography Hierarchy

**Font Selection**: Google Fonts
- Primary (Headings): Inter or Manrope - weight 700-800
- Secondary (Body): Inter or Source Sans Pro - weight 400-600
- Accent (Optional): Fira Code for code snippets if developer portfolio

**Scale**:
- Hero Name: text-6xl md:text-8xl (bold, statement piece)
- Section Titles: text-4xl md:text-5xl
- Project Titles: text-2xl md:text-3xl
- Body Text: text-lg (18px for readability)
- Captions: text-sm

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-md)
- Logo/name on left, navigation links on right
- Mobile: Hamburger menu expanding to full-screen overlay
- Smooth scroll to sections
- Active section indicator

### Hero Section (Non-Traditional Approach)
Split-screen asymmetric layout:
- Left (60%): Large typography stating name + role
- Right (40%): Featured project image preview or abstract visual
- Height: min-h-screen with natural flow
- Include scroll indicator at bottom
- CTA: "View Work" button with blur background

### Project Showcase (Primary Focus)
Masonry/Bento grid layout:
- Mixed sizes: Some projects full-width, others 2-column
- Project cards include: Large image, title, tech stack tags, brief description, "View Details" link
- Hover: Subtle scale transform (scale-105), no elaborate animations
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with varying spans
- Featured projects: col-span-2 or col-span-3

### About Section
Two-column layout (desktop):
- Left: Professional headshot or illustration
- Right: Bio text, skills grid (3-4 columns of skill badges)
- Skills: Pill-shaped badges with icon + text
- Responsive: Stack on mobile

### Skills/Tech Stack
Icon grid with labels:
- Use Font Awesome or Heroicons via CDN
- 6-8 columns on desktop, 3-4 on mobile
- Icons: w-12 h-12 minimum for visibility
- Include proficiency indicator (subtle, not percentage bars)

### Contact Section
Centered, focused layout:
- Email, LinkedIn, GitHub links as large, clickable cards (not just footer links)
- Optional: Simple contact form (Name, Email, Message fields)
- Form styling: Generous padding, clear focus states
- Include response time expectation text
- Background: Subtle gradient or pattern

### Footer
Comprehensive but elegant:
- Quick navigation links
- Social media icons (Font Awesome)
- Copyright and "Built with [tech stack]" note
- Newsletter signup (if applicable): inline form
- Padding: py-16

## Images

**Required Images**:
1. **Hero Section**: Abstract/geometric background or featured project screenshot (1920x1080 minimum)
2. **Project Showcases**: 6-8 project preview images (1200x800 each, various aspect ratios for visual interest)
3. **About Section**: Professional headshot or creative illustration (800x800)
4. **Project Detail Images**: Multiple screenshots per project if detail pages included

**Image Treatment**:
- Subtle border-radius (rounded-lg to rounded-xl)
- Aspect ratio: aspect-video for projects, aspect-square for profile
- Hover: Slight brightness increase or overlay reveal
- Loading: Use aspect ratio containers to prevent layout shift

## Interactions & Animations

**Minimal Animation Strategy**:
- Smooth scroll behavior (scroll-smooth)
- Subtle hover states: scale-105, opacity changes
- Page load: Stagger fade-in for project cards (delay-100, delay-200, delay-300)
- NO: Complex scroll-triggered animations, parallax effects, or elaborate transitions

## Accessibility

- Semantic HTML structure (header, main, section, footer)
- Skip to main content link
- Form labels and ARIA attributes
- Keyboard navigation for all interactive elements
- Focus visible states with sufficient contrast
- Alt text for all images (descriptive, not generic)

## Responsive Breakpoints

- Mobile: base (< 768px) - single column, stacked layout
- Tablet: md (768px+) - 2 columns for projects
- Desktop: lg (1024px+) - 3 columns, asymmetric layouts
- Large: xl (1280px+) - Max container width, enhanced spacing

## Critical Requirements

- **Hero image**: Yes - large, impactful visual
- **Multi-column**: Yes - strategic use in project grid (2-3 cols) and skills section
- **Viewport management**: Natural height flow, hero at ~90vh, sections use content-based heights
- **Button styling**: Blur backgrounds on image overlays, no custom hover states
- **Icon library**: Font Awesome (single choice for consistency)

This portfolio design prioritizes work showcase over narrative, using bold typography and asymmetric layouts to create a memorable, professional impression that stands apart from generic portfolio templates.