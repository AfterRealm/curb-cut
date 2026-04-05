# Curb Cut — WCAG 2.2 accessibility auditing for Claude Code

Most accessibility tools scan your rendered page and hand you a list of tag names and rule IDs. Curb Cut reads your actual source code — your React components, your Vue templates, your HTML — and tells you what's wrong, who it affects, and how to fix it. In English.

## What it does

Four modes, one goal: catch the accessibility issues that automated scanners miss.

**Quick Scan** — 15 high-impact checks. Critical and high findings only. Fast enough to run before every commit.

**Full Audit** — Comprehensive WCAG 2.2 Level AA check across all four pillars. Per-pillar scoring, compliance grading, and a full findings report.

**Component Check** — Deep review of interactive widgets against WAI-ARIA Authoring Practices. Tests keyboard interaction, focus management, and ARIA correctness for modals, tabs, forms, dropdowns, accordions, and navigation.

**Report** — Formal compliance report with executive summary, remediation plan, and methodology notes. Built for stakeholders who don't read code.

## What it catches that Lighthouse doesn't

Lighthouse checks your rendered DOM. Curb Cut reads your source and understands intent.

- A `<div onClick={handleSubmit}>` that should be a `<button>` — invisible to keyboard users and screen readers
- A modal that opens but never traps focus — users tab into the background and can't get back
- Form inputs with placeholders but no `<label>` — looks fine visually, says nothing to a screen reader
- Error states shown only in red — invisible to colorblind users
- A custom dropdown built with `<div>`s — no keyboard support, no ARIA, no way in for anyone not using a mouse
- Heading hierarchy that skips from h1 to h3 — screen reader users lose their navigation structure
- `outline: none` in your CSS reset — you just removed the only way keyboard users know where they are

## Every finding answers three questions

**What's wrong.** Plain English, specific line numbers, no WCAG jargon upfront.

**Who's affected.** Not "violates 2.4.7" — instead: "Keyboard users can't see which element has focus." The criterion reference is there, but the human impact comes first.

**How to fix it.** Concrete code. Not "add a label" — the actual `<label htmlFor="email">Email</label>` you need to write, in the right framework syntax.

## Scoring

0-100, broken down by WCAG pillar:

| Pillar | What it measures |
|--------|-----------------|
| Perceivable | Can all users see or hear the content? |
| Operable | Can all users interact with the interface? |
| Understandable | Can all users understand the content and how it works? |
| Robust | Does the code work with assistive technology? |

**90-100** — AA Compliant. **70-89** — Partial AA. **Below 70** — Non-Compliant.

## Auto-Fix

After any scan, Curb Cut offers to apply fixes — all at once, critical only, or pick individually. Prefers semantic HTML over ARIA. Offers a re-scan after fixing so you can see your score improve.

## CI/CD

Ships with a GitHub Action that runs a Quick Scan on every PR touching frontend files. Results post as a collapsible comment. Catches regressions before they reach main.

## Frameworks

Works with HTML, JSX, TSX, Vue, and Svelte. Knows that React uses `htmlFor`, not `for`. Fixes are written in the syntax your project uses.

## Install

```bash
# From the AfterRealm Marketplace
claude marketplace add AfterRealm/marketplace
claude plugin add afterrealm/curb-cut

# Or grab the skill directly
mkdir -p ~/.claude/skills/curb-cut
curl -o ~/.claude/skills/curb-cut/SKILL.md \
  https://raw.githubusercontent.com/AfterRealm/curb-cut/main/SKILL.md
```

## Why "Curb Cut"

A curb cut is the small ramp on a sidewalk corner — originally built for wheelchair users. Turns out it also helps people with strollers, delivery carts, bikes, luggage, and anyone who's ever rolled anything on wheels. The accessibility feature became the universal feature.

Good accessibility works the same way in code. Semantic HTML improves SEO. Keyboard support helps power users. Clear labels reduce support tickets. Fixing it for some improves it for everyone.

---

**GitHub:** github.com/AfterRealm/curb-cut
**Marketplace:** github.com/AfterRealm/marketplace
