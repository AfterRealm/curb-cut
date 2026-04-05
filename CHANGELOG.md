# Changelog

## v1.0.0 — 2026-04-05

### Added
- **Quick Scan** mode — fast check for critical and high issues (top 15 criteria)
- **Full Audit** mode — comprehensive WCAG 2.2 Level AA check with per-pillar scoring
- **Component Check** mode — deep dive on interactive widgets against WAI-ARIA Authoring Practices
  - Patterns: Modal, Tabs, Form, Dropdown/Menu, Accordion, Navigation
- **Report** mode — formal compliance report for stakeholders and legal
- **Auto-Fix** — applies fixes after any mode, prefers semantic HTML over ARIA
- **Scoring system** — 0-100 scale with AA Compliant / Partial AA / Non-Compliant levels
- **CI/CD GitHub Action** — accessibility checks on PRs touching frontend files
- Eval suite: test files covering forms, modals, dropdowns, navigation, and accessible components
