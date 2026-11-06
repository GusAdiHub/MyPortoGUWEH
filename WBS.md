# Work Breakdown Structure (WBS)
## Personal Developer Portfolio — Astro

**Version:** 1.0  
**Basis:** PRD.md  
**Approach:** phased implementation with review gates

---

## 1. Project Work Breakdown

### Phase 0 — Preparation and Content

| ID | Task | Output / Definition of Done |
|---|---|---|
| 0.1 | Confirm personal branding | Display name, headline, domain decision |
| 0.2 | Confirm public contact links | GitHub, email, LinkedIn verified |
| 0.3 | Audit candidate projects | Project status, role, stack, repo/demo verified |
| 0.4 | Prepare project assets | Screenshots, thumbnails, alt text |
| 0.5 | Prepare CV | Existing PDF files and download paths |
| 0.6 | Prepare bilingual copy | Indonesian and English content draft |

**Gate:** Do not publish unverified project claims, links, statistics, or personal details.

### Phase 1 — Foundation

| ID | Task | Output / Definition of Done |
|---|---|---|
| 1.1 | Create Astro project | Project runs locally |
| 1.2 | Configure TypeScript | Strict and useful type checking |
| 1.3 | Configure Tailwind CSS v4 | Styles compile correctly |
| 1.4 | Install icon library | Lucide Astro available |
| 1.5 | Establish folder structure | Components, layouts, data, styles, utils |
| 1.6 | Create base layout | HTML shell, metadata slots, global styles |
| 1.7 | Configure fonts and design tokens | Tokens follow DESIGN.md |
| 1.8 | Add lint/format scripts | Consistent code quality commands |
| 1.9 | Verify production build | Build passes |

**Gate:** Foundation builds successfully before section implementation.

### Phase 2 — Core Portfolio Sections

| ID | Task | Output / Definition of Done |
|---|---|---|
| 2.1 | Navigation | Desktop and mobile navigation |
| 2.2 | Hero | Name, role, intro, CTA, terminal detail |
| 2.3 | About | Bilingual introduction |
| 2.4 | Tech Stack | Categorized technology display |
| 2.5 | Project data model | Typed project content schema |
| 2.6 | Featured project | Main project showcase |
| 2.7 | Supporting projects | Supporting project cards |
| 2.8 | Project detail interaction | Modal or detail route, keyboard accessible |
| 2.9 | Experience | Experience/organization timeline |
| 2.10 | Education | Education information |
| 2.11 | Contact | Verified contact links |
| 2.12 | Footer | Copyright and secondary links |

**Gate:** All content sections work with local/static data before external integration.

### Phase 3 — Interactive Features

| ID | Task | Output / Definition of Done |
|---|---|---|
| 3.1 | Language dictionary | Typed `id` and `en` dictionaries |
| 3.2 | Language switcher | All primary UI content changes correctly |
| 3.3 | Language persistence | Preference persists where appropriate |
| 3.4 | Theme tokens | Dark and light tokens |
| 3.5 | Theme switcher | Theme changes without broken contrast |
| 3.6 | Theme persistence | Preference persists; no avoidable theme flash |
| 3.7 | Hover interactions | Cards, links, and buttons have clear feedback |
| 3.8 | Scroll/reveal motion | Lightweight and respects reduced motion |
| 3.9 | Terminal animation | Optional, non-blocking, readable without animation |
| 3.10 | Mobile menu behavior | Keyboard and touch interactions verified |

**Gate:** Interactions must remain usable with JavaScript limitations and reduced-motion settings.

### Phase 4 — GitHub Integration

| ID | Task | Output / Definition of Done |
|---|---|---|
| 4.1 | Confirm GitHub username | Correct public account selected |
| 4.2 | Evaluate GitHub data source | Document endpoint, fields, limits, and reliability |
| 4.3 | Implement statistics retrieval | Only supported public metrics |
| 4.4 | Implement caching | Cache duration and failure behavior documented |
| 4.5 | Implement contribution calendar source | Real contribution values, not generated placeholders |
| 4.6 | Build statistics UI | Loading, success, empty, error states |
| 4.7 | Build contribution UI | Accessible calendar and legend |
| 4.8 | Add fallback behavior | Profile link and explanatory fallback |
| 4.9 | Security review | No secret exposed to client |

**Gate:** If reliable contribution data cannot be obtained, ship a clear fallback rather than fake activity.

### Phase 5 — Quality Assurance and Optimization

| ID | Task | Output / Definition of Done |
|---|---|---|
| 5.1 | Responsive testing | Mobile, tablet, desktop reviewed |
| 5.2 | Cross-browser smoke test | Major modern browsers |
| 5.3 | Accessibility review | Keyboard, focus, contrast, alt, reduced motion |
| 5.4 | SEO metadata | Title, description, OG, sitemap, robots |
| 5.5 | Link validation | Internal and external links checked |
| 5.6 | Asset optimization | Correct dimensions, formats, lazy loading |
| 5.7 | Performance audit | Lighthouse results recorded |
| 5.8 | Build and type checks | All required checks pass |
| 5.9 | Security/dependency review | No leaked secrets or known avoidable issues |
| 5.10 | Content proofread | Indonesian and English copy reviewed |

**Gate:** Critical accessibility, security, broken-link, and build issues are resolved before release.

### Phase 6 — Deployment and Handover

| ID | Task | Output / Definition of Done |
|---|---|---|
| 6.1 | Create Vercel project | Repository connected |
| 6.2 | Configure build settings | Production build succeeds |
| 6.3 | Configure environment variables | Server-only variables configured if needed |
| 6.4 | Deploy preview | Preview URL reviewed |
| 6.5 | Production deployment | Public site available over HTTPS |
| 6.6 | Verify production | Routes, assets, theme, language, GitHub fallback checked |
| 6.7 | Document maintenance | README deployment and content update guide |

**Gate:** Production URL and maintenance instructions are recorded.

---

## 2. Suggested Execution Order

1. Phase 0 — Prepare accurate content and assets.
2. Phase 1 — Establish project foundation.
3. Phase 2 — Build static portfolio sections.
4. Phase 3 — Add language, theme, and interactions.
5. Phase 4 — Integrate GitHub data.
6. Phase 5 — Test and optimize.
7. Phase 6 — Deploy.

Do not start GitHub integration before the static portfolio and its fallback UI are working.

## 3. Milestone Checklist

- [ ] M0: Content and identity confirmed.
- [ ] M1: Astro foundation builds.
- [ ] M2: Core sections complete.
- [ ] M3: Bilingual and theme switching work.
- [ ] M4: GitHub integration or documented fallback complete.
- [ ] M5: QA and optimization complete.
- [ ] M6: Production deployment verified.

## 4. Definition of Done (Global)

A task is complete only when:

- Implementation matches PRD and DESIGN.md.
- Responsive behavior is checked where relevant.
- Loading, empty, error, and fallback states exist where relevant.
- Accessibility is considered.
- No placeholder data is presented as real data.
- Relevant typecheck, lint, tests, and build pass.
- Documentation is updated if architecture, configuration, or workflow changes.
- The result is reviewed in the browser, not judged only from source code.

## 5. Scope Control

The following are not part of MVP unless explicitly approved:

- CMS/admin dashboard.
- Blog publishing system.
- Database.
- Authentication.
- Visitor accounts.
- Complex 3D animation.
- Heavy client-side framework for static sections.
- Custom analytics backend.

New requests should be recorded as future enhancements or approved scope changes before implementation.
