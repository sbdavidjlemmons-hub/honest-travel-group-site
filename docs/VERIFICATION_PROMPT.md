# Standing prompt — paste this when you catch me skipping follow-through

"Before you tell me it's done: did you check it against the actual live/deployed state,
not just your local branch? If this touches GitHub, is it merged to main, not just pushed
to a branch? If this touches the site, would a visitor loading the real URL right now see
the result? Show me the check, not just the claim."

## Why this exists

On 2026-09-12 I did two full rounds of certificate work — new artwork, Charleston's
retirement, QR codes — verified every image by eye, committed, and pushed. All of it sat
on a branch. I never checked whether the branch was merged. It wasn't. None of it was
live. I reported "shipped" and "done" repeatedly when the honest word was "written and
pushed, not deployed."

## The rule this becomes

Added to `CLAUDE.md` under Session discipline: **"shipped" or "done" means verified on
`main` / the deployed target, not "committed and pushed to a branch."** Before saying
something is live, check the actual deployed state — `git log origin/main`, the live URL,
or the equivalent for whatever's being shipped. If a PR is open and unmerged, say that
plainly instead of "done."
