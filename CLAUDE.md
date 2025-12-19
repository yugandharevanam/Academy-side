# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Evanam Consulting ERP Education Website** - a modern, interactive educational platform designed to teach Enterprise Resource Planning (ERP) concepts to two primary audiences:
1. **Engineering Students** - seeking to learn ERP fundamentals and how systems integrate
2. **Business Owners** - focused on practical benefits and implementation strategies

The site embodies Evanam's brand ethos: "Turning complex systems into simple, scalable growth engines."

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **UI Components**: Headless UI (@headlessui/react)
- **Icons**: Heroicons (@heroicons/react)

## Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production (TypeScript compile + Vite build)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint to check code quality
```

### Common Workflows
- **Add a new section**: Create a new component in `src/sections/` and import it into `src/App.tsx`
- **Modify brand colors**: Edit `tailwind.config.js` under `theme.extend.colors.brand`
- **Add new animations**: Use Framer Motion's `motion` components with `initial`, `animate`, `whileInView` props

## Architecture

### High-Level Structure

The site is a **single-page application (SPA)** with smooth scrolling between sections. Each section is a self-contained React component that follows a consistent design system while maintaining visual variety.

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx   # Sticky navigation with scroll detection & mobile menu
│   ├── Footer.tsx   # Footer with links and branding
│   ├── Card.tsx     # Animated card component with hover effects
│   ├── SectionContainer.tsx  # Section wrapper with background variants
│   └── AnimatedCounter.tsx   # Number animation component for stats
├── sections/        # Main content sections
│   ├── Hero.tsx     # Introduction with video background
│   ├── ProcureToPay.tsx    # P2P process with timeline visualization
│   ├── OrderToCash.tsx     # O2C process with interactive carousel
│   ├── Implementation.tsx  # Implementation strategy & benefits (tabbed)
│   ├── ERPStats.tsx        # Animated statistics with number counters
│   ├── ROICalculator.tsx   # Interactive ROI calculation tool
│   ├── ERPQuiz.tsx         # Interactive 6-question quiz
│   ├── DownloadResources.tsx # Downloadable learning materials
│   └── UseCases.tsx        # Dual-persona use cases (students vs business)
├── assets/          # Media files
│   ├── Evanam Logo.png     # Company logo (red)
│   └── background.mp4      # Hero section video background
├── App.tsx          # Main app component, assembles all sections
├── main.tsx         # React app entry point
├── vite-env.d.ts    # TypeScript declarations for asset imports
└── index.css        # Global styles and Tailwind directives
```

### Key Design Patterns

1. **Component Reusability**:
   - All sections use shared components (`Card`, `SectionContainer`) for consistency
   - Components accept props for customization (icons, colors, delays)
   - Tailwind utility classes enable rapid styling variations

2. **Animation Strategy**:
   - **Framer Motion** powers all animations
   - `whileInView` triggers scroll-based animations (fire once with `viewport={{ once: true }}`)
   - Staggered delays create sequential reveal effects (`delay: index * 0.1`)
   - Hover animations (`whileHover`) provide micro-interactions

3. **Dual-Audience Approach**:
   - Content addresses both students and business owners explicitly
   - Visual separation through color-coded sections (blue for students, green for business)
   - Side-by-side comparisons in Use Cases section
   - Tabs in Implementation section let users choose their focus

4. **Responsive Design**:
   - Mobile-first approach with Tailwind responsive utilities (`md:`, `lg:`)
   - Grid layouts collapse to single columns on mobile
   - Navigation simplifies on smaller screens

### Section-Specific Patterns

**Hero Section**:
- Full-screen video background with dark gradient overlay
- Animated text entrance with white text and drop shadows
- Three benefit cards with icons
- Bouncing scroll indicator for engagement

**ProcureToPay Section**:
- Vertical timeline with alternating left/right content
- Timeline line connects steps visually
- Each step has icon, title, description, and detailed explanation
- Responsive: timeline becomes vertical stack on mobile

**OrderToCash Section**:
- Interactive carousel for 5 O2C steps
- Users can click arrows or step indicators to navigate
- Current step shown with animations (icon rotation, content fade)
- Comparison callouts for students vs business owners

**Implementation Section**:
- Tabbed interface using Headless UI's `Tab` component
- Tab 1: Implementation roadmap (5 phases with icons)
- Tab 2: Benefits grid with stats (30% ROI, 70% error reduction)
- Active tab highlighted with scale and color transitions

**ERPStats Section** (NEW):
- Animated number counters that count up when scrolled into view
- 6 key statistics with icons and color-coded themes
- Uses custom AnimatedCounter component with easing animations
- Each stat card has hover effects (scale + shadow)
- Source citation for credibility

**ROICalculator Section** (NEW):
- Interactive calculator with 4 input sliders
- Real-time calculations showing annual savings and ROI
- Visual results with gradient background
- Displays payback period in months
- Includes assumptions disclaimer

**ERPQuiz Section** (NEW):
- 6-question interactive quiz with instant feedback
- Progress bar showing completion status
- Answer options with correct/incorrect visual feedback
- Explanations after each answer
- Final score screen with performance-based messages
- Retake functionality

**DownloadResources Section** (NEW):
- Grid of 6 downloadable learning materials
- Each resource has title, description, file size, and page count
- Audience badges (Students/Business/All)
- Download buttons with hover animations
- Currently shows demo alerts (ready for real file implementation)

**UseCases Section**:
- Two-column layout (students left, business owners right)
- Each column has a story, benefits list, and quote
- Checkmark icons for list items
- Final dual-CTA for both audiences

## Branding & Style Guidelines

### Colors (Tailwind Config)
- `brand-primary`: #2563EB (Blue) - Used for CTAs, links, primary icons
- `brand-secondary`: #10B981 (Green) - Used for secondary accents
- `brand-dark`: #1E293B - Used for footer, dark text
- `brand-light`: #F8FAFC - Used for light backgrounds

**Note**: These are placeholder colors. Update in `tailwind.config.js` to match Evanam's actual brand palette.

### Typography
- Font: Inter (loaded from Google Fonts in `index.html`)
- Headings: Bold, large sizes (4xl-7xl)
- Body: Regular weight, readable sizes (base-xl)
- Emphasis on hierarchy and readability

### Animation Principles
- **Subtlety**: Animations should enhance, not distract
- **Performance**: Use CSS transforms (translate, scale) over position changes
- **Consistency**: Similar elements use similar animation patterns
- **Accessibility**: Respect `prefers-reduced-motion` (Framer Motion handles this)

## Content Strategy

### Tone of Voice
- **Approachable yet professional**: Avoid jargon, explain concepts clearly
- **Dual-audience awareness**: Address students and business owners explicitly
- **Evanam's philosophy**: Emphasize simplicity, clarity, and practical value

### Educational Flow
1. **Introduce** (Hero): What is ERP and why it matters
2. **Deep-dive** (P2P, O2C): Core ERP processes with step-by-step breakdowns
3. **Implement** (Implementation): How to roll out ERP and what benefits to expect
4. **Personalize** (Use Cases): How ERP knowledge applies to each audience

### Key Statistics Used
- 53% of organizations report positive ROI from ERP
- 70% reduction in manual errors after implementation
- 30% average ROI increase within 3 years

## Development Guidelines

### Adding New Features
1. Create components in appropriate directory (`components/` or `sections/`)
2. Use TypeScript for type safety (define interfaces for props)
3. Follow existing animation patterns with Framer Motion
4. Ensure responsive design with Tailwind breakpoints
5. Test scroll behavior and navigation

### Modifying Existing Sections
- Each section is self-contained - modify without affecting others
- Maintain consistent spacing with `section-container` class
- Preserve dual-audience messaging where applicable
- Keep animations performant (avoid too many simultaneous animations)

### Performance Considerations
- Lazy-load images if added (not currently using images)
- Use `viewport={{ once: true }}` to prevent re-triggering scroll animations
- Minimize component re-renders (React.memo if needed for heavy components)
- Vite handles code-splitting automatically

## Implemented Interactive Features

✅ **Mobile Navigation**: Hamburger menu for small screens with smooth animations
✅ **Video Background**: Full-screen autoplay video in hero section with overlay
✅ **Animated Statistics**: Number counters that animate on scroll into view
✅ **ROI Calculator**: Interactive tool with sliders for real-time ERP cost/benefit analysis
✅ **Interactive Quiz**: 6-question quiz with instant feedback and scoring
✅ **Downloadable Resources**: Section for learning materials (ready for real PDFs)

## Future Enhancements (Not Implemented)

- ERP Process Simulator with interactive workflow visualization
- Personalized Learning Paths based on user role/industry
- AI Chatbot for answering ERP questions
- Video Library with tutorial content
- Progress Tracking for users to track learning journey
- More detailed ERP module explanations (Finance, HR, SCM deep-dives)
- Interactive ERP system diagrams with SVG animations
- Multi-language support
- Real PDF/Excel file downloads (currently demo alerts)

## Dependencies

### Core Dependencies
- `react`, `react-dom`: UI framework
- `framer-motion`: Animation library
- `@headlessui/react`: Accessible unstyled components (used for Tabs)
- `@heroicons/react`: SVG icon library

### Dev Dependencies
- `vite`, `@vitejs/plugin-react`: Build tool
- `typescript`: Type checking
- `tailwindcss`, `autoprefixer`, `postcss`: Styling
- `eslint`, `@typescript-eslint/*`: Linting

All versions specified in `package.json`. Run `npm install` to install.

## Project Philosophy

This website demonstrates that enterprise software education doesn't have to be boring. Through:
- **Modern design**: Gradients, shadows, rounded corners
- **Smooth animations**: Scroll reveals, hover effects, transitions
- **Interactive elements**: Carousels, tabs, toggles
- **Clear information hierarchy**: Headings, subheadings, visual breaks
- **Dual-persona content**: Explicitly addressing different audience needs

The result is an engaging, educational experience that reinforces Evanam's brand as a modern, knowledgeable authority in ERP consulting.
