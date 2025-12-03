# Product Requirements Document
## DoPlan.dev Marketing Website

**Version:** 1.0.0  
**Status:** Draft  
**Last Updated:** 2025-12-03  
**Project Type:** Marketing Website

---

## Executive Summary

DoPlan.dev is a high-conversion marketing website designed to convert visitors into active DoPlan CLI users. The website serves as both a marketing tool and comprehensive documentation platform, with a primary goal of achieving 30,000 CLI users and 1000+ organic daily visitors.

**Primary Objective:** Turn visitors into users within 3 minutes of landing.

---

## Product Vision

### Mission
Convert visitors to users for DoPlan CLI through an impressive, fast-loading, conversion-optimized website that demonstrates the quality and ease of use of the DoPlan CLI tool.

### Goals
- **30,000 CLI users** (long-term target)
- **1000+ organic daily visitors** (traffic goal)
- **<1 second load time** (performance requirement)
- **98% speed test score** (quality benchmark)
- **High conversion rate** (visitor → CLI install)

### Success Metrics
- **Primary KPIs:**
  - Organic daily visitors: >1000
  - CLI user growth: Increasing month-over-month
  - Conversion rate: Visitors → CLI installs
  - Time to first command: <3 minutes
  - Load time: <1 second
  - Speed test score: 98%

---

## User Personas

### Primary Persona: Dany (27 years old)
- **Role:** Web designer transitioning to development
- **Background:** Involved in many projects, good background, wants to improve
- **Pain Points:** Didn't have chance to learn programming formally
- **Goals:** Build working products using AI, improve technical skills
- **Current Tools:** Tried Cursor/Claude but couldn't complete successful projects
- **Motivation:** Wants to create similar quality products as DoPlan demonstrates

### Secondary Persona: Mark (34 years old)
- **Role:** DJ with interest in technology
- **Background:** Loves computers, wants to use AI for marketing/social media
- **Pain Points:** Needs to build website for work, limited coding experience
- **Goals:** Use AI to improve marketing workflow, create website
- **Motivation:** Wants working products, not just tools

### Target Audience Summary
- **Primary:** Junior, mid-level developers, freelancers who want AI tools in workflow
- **Secondary:** Beginners who want to learn, students needing exercises
- **Common Trait:** Tried Cursor/Claude but couldn't complete successful projects
- **Need:** Guidance, encouragement, and automation (not just help)

---

## Core Features

### Feature 1: Hero Section with Command Copy
**Priority:** P0 (Must Have)  
**Status:** Required for MVP

**Description:**
Hero section that immediately communicates the 5 commands workflow and provides one-click copy button for CLI install command.

**User Stories:**
- As a visitor, I want to understand DoPlan's 5 commands in 30 seconds so I can quickly evaluate if it's right for me
- As a visitor, I want to copy the install command with one click so I can start using DoPlan immediately
- As a visitor, I want to see the quality DoPlan can create so I'm impressed and motivated to try it

**Acceptance Criteria:**
- [ ] Hero section displays 5 commands clearly (/hey, /do, /plan, /dev, /sys)
- [ ] Copy button for `npx @doplan-dev/cli` command
- [ ] Command copies to clipboard on click
- [ ] Visual terminal element showing command output
- [ ] Loads in <1 second
- [ ] Mobile responsive (single column on mobile)
- [ ] WCAG AA compliant

**Design Requirements:**
- Follow Visual Identity & System Design Guide
- Cyberpunk minimalism aesthetic
- Dark theme with cyan/purple accents
- Terminal-inspired UI elements

---

### Feature 2: Five Commands Explanation Section
**Priority:** P0 (Must Have)  
**Status:** Required for MVP

**Description:**
Detailed explanation of the 5 sacred commands, showing how easy the workflow is and what each command does.

**User Stories:**
- As a visitor, I want to understand what each command does so I know how to use DoPlan
- As a visitor, I want to see the simplicity of the workflow so I'm confident I can learn it quickly
- As a visitor, I want to see the power hidden beneath simplicity so I understand the value

**Acceptance Criteria:**
- [ ] Interactive cards for each of the 5 commands
- [ ] Clear explanation of command purpose and usage
- [ ] Visual hierarchy showing command relationships
- [ ] Examples of command usage
- [ ] Hover/click interactions for engagement
- [ ] Mobile responsive layout

---

### Feature 3: Documentation & Guide Section
**Priority:** P0 (Must Have)  
**Status:** Required for MVP

**Description:**
Well-made documentation that explains the command workflow and serves as a guide for DoPlan CLI.

**User Stories:**
- As a visitor, I want to access documentation so I can learn how to use DoPlan
- As a visitor, I want to understand sub-commands so I can do advanced things
- As a visitor, I want clear guides so I never get lost

**Acceptance Criteria:**
- [ ] Documentation pages accessible from main navigation
- [ ] Clear structure and hierarchy
- [ ] Search functionality (nice-to-have for MVP)
- [ ] Examples and code snippets
- [ ] Mobile-friendly reading experience
- [ ] SEO optimized

---

### Feature 4: Features Page
**Priority:** P0 (Must Have)  
**Status:** Required for MVP

**Description:**
Dedicated features page showcasing DoPlan CLI capabilities, differentiators, and value proposition.

**User Stories:**
- As a visitor, I want to see all features so I understand what DoPlan can do
- As a visitor, I want to see how DoPlan differs from competitors so I know why to choose it
- As a visitor, I want to see the 18 AI agents so I understand the coaching system

**Acceptance Criteria:**
- [ ] Features page accessible from navigation
- [ ] Showcase of key features (automations, clean workflow, communication)
- [ ] Information about 18 AI agents
- [ ] Comparison with competitors (spec-kit, bmad)
- [ ] Social proof and statistics
- [ ] GitHub repository link

---

### Feature 5: Conversion Optimization Elements
**Priority:** P0 (Must Have)  
**Status:** Required for MVP

**Description:**
All elements designed to convert visitors to users, including CTAs, social proof, and friction reduction.

**User Stories:**
- As a visitor, I want clear calls-to-action so I know what to do next
- As a visitor, I want to see social proof so I trust DoPlan
- As a visitor, I want minimal friction so I can start quickly

**Acceptance Criteria:**
- [ ] Multiple strategic CTAs throughout site
- [ ] Social proof (user count, project count, success rate)
- [ ] One-click command copy functionality
- [ ] Clear value proposition messaging
- [ ] Objection handlers (subtle FAQs)
- [ ] Analytics tracking for conversion funnel

---

## Technical Requirements

### Performance
- **Load Time:** <1 second (critical requirement)
- **Speed Test Score:** 98% minimum
- **Core Web Vitals:**
  - LCP: <2.5s
  - FID: <100ms
  - CLS: <0.1

### Scalability
- **Expected Traffic:** 1000+ daily visitors
- **Infrastructure:** Vercel hosting with automatic deployments
- **Monitoring:** Uptime, errors, performance tracking

### Browser Support
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)

### Accessibility
- WCAG AA compliance
- Keyboard navigation
- Screen reader support
- Semantic HTML

---

## Integration Requirements

### Third-Party Services
- **Heatmap:** User behavior tracking
- **8n8 Chat:** Customer support/chat integration
- **Automation:** Workflow automation tools
- **Analytics:** Conversion tracking and funnel analysis

---

## Design Requirements

### Aesthetic
- **Style:** Cyberpunk minimalism meets developer authenticity
- **Theme:** Dark, focused, fast-loading, premium without gatekeeping
- **Colors:** Deep Void (#0A0E27), Electric Cyan (#00D9FF), Neon Purple (#9D4EDD)
- **Typography:** Inter for UI, JetBrains Mono for code

### User Experience
- **Emotions:** Visitors should feel curious and empowered
- **30-Second Goal:** Understand 5 commands workflow
- **3-Minute Goal:** Install DoPlan and start testing
- **Impression:** Should be impressed by quality (DoPlan creates similar quality products)

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (375-480px), Tablet (768px), Desktop (1024px+)
- Touch targets: Minimum 48x48px on mobile

---

## Content Requirements

### Existing Content
- Visual Identity & System Design Guide (`doplan_website_prompt.md`)
- Website Creation Prompt (`doplan_website_prompt (1).md`)

### Content Strategy
- User provides drafts
- LLM refines and optimizes
- LLM optimizes for SEO
- Enhancement of existing content required

### Content Types Needed
- Homepage copy
- Features page content
- Documentation pages
- SEO-optimized meta descriptions
- Social proof messaging

---

## Success Criteria for Launch

### MVP Launch (Tomorrow)
- [ ] Hero section with copy button functional
- [ ] 5 commands explained clearly
- [ ] Home page complete
- [ ] Features page complete
- [ ] GitHub repo link included
- [ ] Load time <1 second
- [ ] Mobile responsive
- [ ] Basic analytics tracking

### Full Launch (5 days)
- [ ] All MVP features complete
- [ ] Documentation section complete
- [ ] SEO optimization complete
- [ ] 98% speed test score achieved
- [ ] All integrations working (heatmap, 8n8 chat, automation)
- [ ] Conversion tracking fully implemented
- [ ] Cross-browser testing complete
- [ ] Accessibility audit passed

---

## Risk Mitigation

### Identified Risks
- **Tight timeline might cause quality issues**

### Mitigation Strategies
- Prioritize MVP features, defer nice-to-haves
- Focus on core conversion path first
- Use existing design system to speed up development
- Post-launch iteration plan for improvements

---

## Maintenance Plan

### Update Schedule
- Updates happen with CLI releases
- Website updates are part of CLI updates
- CLI team handles maintenance
- Quarterly major updates

### Monitoring
- Uptime monitoring
- Error tracking
- Performance monitoring
- Monthly backups

---

## Timeline

### MVP Launch
- **Target:** Tomorrow
- **Scope:** Core conversion path, hero, commands, features page

### Full Launch
- **Target:** 5 days from now
- **Scope:** Complete documentation, all integrations, full optimization

---

## Dependencies

### External
- DoPlan CLI package availability
- Third-party service integrations (heatmap, 8n8 chat)
- Vercel hosting setup

### Internal
- Design system completion
- Content refinement and SEO optimization
- Development team availability

---

## Out of Scope (Post-Launch)

- Advanced documentation features (search, filtering)
- User accounts/login system
- Community features
- Blog section
- Video demos (can be added later)
- A/B testing variants (post-MVP)

---

*Generated by DoPlan CLI v1.3.4*  
*Sup-Agent: Product Manager*  
*Date: 2025-12-03*
