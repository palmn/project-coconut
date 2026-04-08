# Project Coconut 🥥

Monorepo for Project Coconut — online casino & sports affiliate sites.

## Structure

```
apps/          # Next.js apps (one per site)
packages/      # Shared libraries (@coconut/*)
infra/         # Coolify, Cloudflare, CI/CD configs
docs/          # Documentation
```

## Apps

| App | Description |
|-----|-------------|
| `casino-alpha` | Online casino affiliate site |
| `sports-omega` | Sports affiliate site |

## Branches

- `main` → production
- `dev` → staging
- `feature/*` → feature branches
- `fix/*` → bug fixes
- `hotfix/*` → urgent production fixes

## Stack

Next.js · Hetzner · Coolify · Cloudflare
