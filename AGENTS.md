# AGENTS.md
## Instructions for AI Coding Agents

This file defines the working rules for AI agents contributing to the Gus Adi Astro portfolio.

---

## 1. Project Context

Build and maintain a personal developer portfolio for Gus Adi.

Product direction:

- Single-page personal developer portfolio.
- Astro + TypeScript.
- Tailwind CSS v4.
- Lucide Astro icons.
- Dark-first with light theme.
- Indonesian and English.
- Developer/terminal-inspired hero.
- Featured project showcase.
- Experience and education.
- GitHub statistics and contribution calendar, with honest fallback states.
- Downloadable PDF CV.
- Static-first and deployed to Vercel.

Read these documents before making substantial changes:

1. `PRD.md` — product requirements and acceptance criteria.
2. `WBS.md` — implementation phases and task boundaries.
3. `DESIGN.md` — visual system and component behavior, when available.

If a document is missing, do not invent its contents. Ask for it if it blocks the task, or proceed only with decisions supported by the available project context.

## 2. Core Engineering Principles

1. Prefer Astro components for static content and layout.
2. Use client-side JavaScript only when interaction requires it.
3. Do not add React, Vue, or another UI framework unless explicitly justified and approved.
4. Use TypeScript and avoid `any`; define clear data types.
5. Keep content/data separate from presentation.
6. Build reusable components when reuse is real, not merely theoretical.
7. Keep dependencies minimal.
8. Preserve existing project conventions unless there is a clear reason to change them.
9. Do not rewrite unrelated files.
10. Never claim a task is complete unless it has been verified.

## 3. Before Making Changes

- Inspect the existing repository and package scripts.
- Read the relevant documentation and nearby implementation.
- Identify the current phase in WBS.md.
- Check whether the requested work is in MVP scope.
- Confirm existing dependency versions before installing or upgrading packages.
- Plan the smallest coherent change.
- If requirements conflict, follow this priority:
  1. Explicit latest user instruction.
  2. PRD.md.
  3. DESIGN.md for visual decisions.
  4. WBS.md for execution order.
  5. Existing implementation conventions.

Do not silently make major product or design decisions.

## 4. Astro and TypeScript Rules

- Use `.astro` components for primarily static sections.
- Use framework/client islands only when a component needs substantial client-side state.
- Add client directives deliberately; avoid hydrating entire pages.
- Use Astro layouts for shared document structure.
- Use typed data models for projects, experience, navigation, and translations.
- Use Astro Content Collections if content volume or validation benefits from it; otherwise typed TypeScript data is acceptable.
- Avoid duplicating content across components.
- Use semantic HTML elements.
- Keep components focused and reasonably small.
- Ensure internal links and asset paths work in production builds.

## 5. Styling and Design Rules

- Follow `DESIGN.md` as the source of truth once it exists.
- Use design tokens for colors, typography, spacing, radii, borders, and shadows.
- Avoid arbitrary one-off values when a token exists.
- Maintain consistent spacing and responsive breakpoints.
- Keep dark and light themes readable and visually coherent.
- Use visible focus states.
- Avoid excessive gradients, glow, blur, and neon effects.
- Do not sacrifice readability for decoration.
- Prefer CSS transitions and transforms for lightweight motion.
- Respect `prefers-reduced-motion`.
- Avoid layout shifts when images and fonts load.

## 6. Bilingual Content Rules

- Keep Indonesian and English copy in a centralized, typed dictionary or content model.
- Do not scatter conditional language strings across unrelated components.
- Every user-facing string must have both translations unless intentionally language-neutral.
- Keep translation keys consistent and type-safe.
- Preserve the selected language across navigation and reloads as designed.
- Use correct document language metadata where applicable.
- Do not machine-translate technical project names, product names, or proper nouns unnecessarily.
- Check both languages for text overflow and layout issues.

## 7. Project Content and Accuracy

- Do not invent project features, results, metrics, dates, roles, clients, or completion status.
- Do not describe a prototype as production-ready.
- Do not show a repository or demo link unless the destination is confirmed.
- Do not use generated mock screenshots as if they were screenshots of the real application.
- If project information is incomplete, use an explicit draft/TODO state in source data and keep it out of production UI.
- Use concise descriptions that explain problem, solution, contribution, and technology.
- Only list technologies the owner has actually used or is actively learning, with accurate wording.

## 8. GitHub Integration Rules

- Confirm the GitHub username with the owner before hardcoding it.
- Use only documented and tested data sources.
- Document API fields, rate limits, caching strategy, and failure behavior.
- Never put a private token, secret, or privileged credential in browser code, public environment variables, or committed files.
- Use server-side environment variables only when a server-side integration is required.
- Do not request more GitHub data than the UI needs.
- Implement loading, empty, error, and fallback states.
- Treat contribution calendars carefully: do not fabricate contribution counts or heatmap cells.
- If contribution data is unavailable or unreliable, show a clear fallback and a link to the public GitHub profile.
- Do not let a failed external API request break the rest of the portfolio.

## 9. Theme and Browser Storage

- Validate stored theme/language values before using them.
- Handle missing or blocked local storage gracefully.
- Avoid hydration mismatch and avoidable flash of incorrect theme.
- Ensure the site remains usable if client-side preference code fails.
- Do not store secrets or sensitive information in local storage.

## 10. Accessibility

- Use semantic landmarks: header, nav, main, section, footer.
- Maintain a logical heading hierarchy.
- Provide descriptive alt text for meaningful images; decorative images should not add noise to screen readers.
- All interactive controls must be keyboard accessible.
- Use buttons for actions and links for navigation.
- Provide visible focus indicators.
- Ensure adequate text/background contrast in both themes.
- Do not communicate state through color alone.
- Label icon-only controls accessibly.
- Modals must manage focus, support Escape, and return focus to the trigger.
- Respect reduced-motion preferences.

## 11. Performance

- Keep Astro static-first.
- Avoid unnecessary client hydration and large dependencies.
- Optimize images and use appropriate dimensions.
- Lazy-load below-the-fold images where appropriate.
- Avoid blocking third-party scripts.
- Cache external data when appropriate.
- Handle external request timeouts and failures.
- Measure production output; do not claim performance targets are met without a test result.

## 12. Security and Privacy

- Never commit `.env`, tokens, private keys, or credentials.
- Keep secrets out of client bundles and source maps.
- Validate and sanitize any dynamic external data before rendering where needed.
- Use safe link attributes for links opening new tabs.
- Do not add tracking or analytics without explicit approval.
- Do not collect visitor personal data in the MVP.
- Keep dependencies updated responsibly; do not perform broad upgrades without checking compatibility.

## 13. Testing and Verification

After changes, run the relevant project checks, using the scripts that actually exist in `package.json`:

- Type checking, if configured.
- Lint.
- Tests, if configured.
- Production build.

Also verify relevant behavior in a browser:

- Mobile and desktop layout.
- Navigation and anchor offsets.
- Language switching.
- Theme switching.
- Project links and CV downloads.
- GitHub loading/error/fallback states.
- Keyboard navigation and reduced motion.

Do not invent commands or report checks as passed if they were not run. If a check cannot be run, state why.

## 14. Git and Change Management

- Make focused changes with clear scope.
- Do not delete user work or overwrite assets without permission.
- Do not force-push, rewrite history, or perform destructive Git operations unless explicitly requested.
- Do not commit unless the user asks.
- Keep documentation in sync with architectural changes.
- Avoid unrelated formatting churn.

## 15. Agent Workflow

For each task:

1. State the intended scope briefly.
2. Inspect relevant files.
3. Implement the smallest complete change.
4. Run relevant checks.
5. Review the diff for unrelated changes, secrets, and regressions.
6. Report:
   - What changed.
   - Files affected.
   - Commands/checks run and results.
   - Known limitations or follow-up work.

For multi-phase work, complete one WBS phase at a time and wait for review at phase gates unless the user explicitly requests end-to-end execution.

## 16. Definition of Done

A task is done only when:

- Requirements are met.
- UI follows DESIGN.md.
- Responsive and accessibility behavior is considered.
- No fabricated content or metrics are present.
- Relevant checks have been run and reported honestly.
- No secrets or unrelated destructive changes are introduced.
- Documentation is updated where needed.
