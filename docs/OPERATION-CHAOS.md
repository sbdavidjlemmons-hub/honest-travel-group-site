# Operation Chaos — Session Handoff Menu

Compressed context from the prior session (2026-08-26) so a new session can start here.

## 1. Where things stand

- Working repo: `sbdavidjlemmons-hub/honest-travel-group-site` (public), branch `claude/sbcc-maccromer-sbpd-access-lki8rm`.
- User asked whether Claude has access to **SBCC issues, MacCromer, and SBPD**.
- **Finding: not accessible.** They are not among the account's GitHub repos, and a search of this repo's issues for those terms returned nothing. No connector maps to those names either.

## 2. Accessible GitHub repositories

| Repo | Visibility | Push |
|---|---|---|
| `sbdavidjlemmons-hub/honest-travel-group` | private | yes |
| `sbdavidjlemmons-hub/honest-travel-group-site` | public | yes (session scope) |
| `sbdavidjlemmons-hub/ghl-audience-ops` | private | yes |
| `sbdavidjlemmons-hub/honest-timeshare-resolutions-site` | public | yes |

Repos outside this list need to be granted to Claude (org admin: claude.ai GitHub settings) and then attached with `add_repo`.

## 3. Connected tools (connectors)

Gmail, Google Calendar, Google Drive, Apollo.io, Lovable, Wispr Flow, Adobe, GitHub, SUPERCOOL (multi-tool). Canva is connected but **needs re-authorization** in claude.ai connector settings.

## 4. Open questions for Operation Chaos

- Where do SBCC, MacCromer, and SBPD actually live? (Another GitHub org? Linear/ClickUp? Drive?) Once identified, grant access and attach.
- What is the concrete goal of Operation Chaos? Prior session ended before a task was defined.

## 5. Menu of next actions

1. Identify + attach the SBCC / MacCromer / SBPD sources.
2. Continue site work in this repo on the branch above.
3. Build a persistent timeline doc (extend this file) as work happens.
