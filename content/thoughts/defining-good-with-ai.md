---
title: 'What "Good" Looks Like When AI Touches the Output'
date: 2026-02-04
draft: false
description: 'AI makes output easy. "Good" must be explicit: criteria, examples, and a review loop that holds the bar.'
---

## Outline

- “Good” must be defined at the outcome level, not the artifact level
- Use acceptance criteria: correctness, completeness, tone, and risk
- Provide reference examples (good/bad) to reduce ambiguity
- Separate drafting from verifying (different mental modes)
- Sampling review is the fastest way to keep standards stable
- Example: customer email drafts that are fast—but safely correct


## If “good” is implicit, AI will expose the gap

Before AI, many teams relied on tacit standards. A senior person “just knew” what a good response looked like. A strong engineer “just knew” how careful to be.

AI changes that. When output is cheap, the variance increases. You’ll see more borderline work, more plausible-sounding mistakes, more inconsistency.

This isn’t because people became worse. It’s because the system now produces more surface area.

If you want standards to hold, you need to make “good” explicit.

Not as a lecture. As a tool people can use.


## Define good at the outcome level

A common mistake is defining good as “a well-written email” or “a complete document.”

Those are artifacts. The outcome is what the reader can do with it.

For a support response, the outcome might be “customer can resolve the issue without a follow-up.” For a proposal, “customer can make a decision.” For internal analysis, “leaders can act without guessing.”

AI can generate artifacts that look polished while failing the outcome.

So define good like this: “After reading this, a reasonable person should be able to do X, with Y constraints, without Z risk.”

That’s a standard you can audit.


## Use acceptance criteria: correctness, completeness, tone, risk

In practice, “good” becomes a short set of criteria.

A reliable set often includes:

- **Correctness**: claims are true, verifiable, and not overstated
- **Completeness**: includes the necessary steps, caveats, and next actions
- **Tone**: calm, respectful, non-defensive, not overly confident
- **Risk**: avoids promises, legal claims, or security assertions without approval

These criteria are boring. That’s the point. They create consistency.

If the criteria are unclear, people will optimize for what’s visible: eloquence. AI is great at eloquence. Eloquence is not the job.

## Reference examples reduce ambiguity faster than rules

Rules are abstract. Examples are concrete.

Create a small library:

- two examples of “excellent”
- two examples of “acceptable”
- two examples of “not acceptable,” with why

This is especially effective for tone and for risk boundaries.

People don’t want to guess. If you show them what you mean, the team converges quickly.

AI can help generate initial examples, but the human job is selecting the ones that match your standards and context.

## Drafting and verifying are different mental modes

One of the quiet dangers of AI is blending drafting and verification.

When a tool produces a confident answer, your brain wants to move on. You read it as if it’s already true.

Strong teams separate modes:

- **Draft mode**: generate options fast, explore phrasing, structure
- **Verify mode**: check claims, sources, assumptions, edge cases

You can even assign different people or different moments for these modes.

This isn’t paranoia. It’s process design.

If you collapse the modes, you ship faster—until you ship a mistake that costs you trust.

## Sampling review keeps the bar stable without slowing the team

You don’t need to review every output. You need to review enough to detect drift.

A good cadence:

- weekly sampling of customer-facing outputs
- a clear rubric based on your acceptance criteria
- feedback that updates the examples and criteria

This creates a learning loop. Over time, you need less review because the system stabilizes.

When review is predictable and fair, people accept it. When review is random and punitive, they hide.

## Concrete example: AI-drafted customer emails

Imagine customer success uses AI to draft emails about configuration changes. The drafts are fast and polite, but occasionally wrong: wrong feature name, wrong step order, subtle overpromises.

You define “good” with acceptance criteria:

- Any instruction must be verified in the product or docs.
- Any promise about timelines requires approval.
- Include one clear “next action” for the customer.

You add examples: a good email, a bad email, and a revised version.

Then you run sampling review: each week, review 10 emails across the team. You track recurring failure modes and fix the system: update internal docs, update prompts, and clarify boundaries.

Result: speed stays. Trust improves. The team stops fearing AI and starts using it responsibly.


## A simple checklist

- Have we defined “good” as an outcome, not a polished artifact?
- Do we have acceptance criteria (correctness, completeness, tone, risk)?
- Do we have a small set of good/bad examples people can copy?
- Do we separate drafting from verifying in our workflow?
- Do we sample-review outputs and feed learnings back into the system?
- Are risk boundaries explicit (what requires approval, what doesn’t)?
