# Portfolio Website — Content Template

> **How to use this file**
> - Every section maps to one section of the HTML page (`<section id="...">`).
> - `[[FILL: ...]]` = data you need to add. Search the file for `[[FILL` to find every gap.
> - `[[OPTIONAL: ...]]` = nice to have. Delete the line if you skip it.
> - Text without markers is already written from your skills report. Edit it freely.
> - Keep the `key: value` lines as they are so they're easy to map into HTML later.

---

## 0. Missing-data checklist

### Must have (the site looks incomplete without these)
- [ ] Full name, job title and short tagline
- [ ] Contact: email, LinkedIn, GitHub, location / time zone
- [ ] Profile photo
- [ ] Employer / company name, or a decision to keep it anonymous ("a B2B SaaS company")
- [ ] Your official job title(s) and dates at this company
- [ ] Résumé PDF link
- [ ] Education
- [ ] At least 1–2 **measurable outcomes** per project (users, tenants, tickets/day, time saved, error reduction). The report only says "likely impact", so real numbers will make it much stronger.

### Should have
- [ ] Any earlier jobs or internships before Aug 2022
- [ ] Frontend / DevOps / TypeScript experience from other work, to fill the gaps the report found in this repo
- [ ] Side projects or open-source work (with links)
- [ ] Certifications
- [ ] Screenshots or architecture diagrams for the projects. **Check what your employer allows you to share.**
- [ ] Testimonials / recommendations (real ones only, with permission)

### Nice to have
- [ ] Blog posts / talks
- [ ] Languages spoken
- [ ] Interests / "beyond code" section
- [ ] Site meta: domain, favicon, colour preference, light/dark mode

### Decisions to make
- [ ] **Confidentiality:** can you name the product, show screenshots or link the repo? If not, describe it the way this template already does.
- [ ] **Unmerged work:** Ticket Merge and Custom ID Formats are not on main yet. List them as "In progress / Shipping soon", or wait until they ship.
- [ ] **AI-assisted work:** list "AI-assisted development" as a skill? (The report suggests it's fair to list, as long as you can explain the designs yourself.)

---

## 1. Site meta
```
site_title:        [[FILL: e.g. "Your Name — Backend Engineer"]]
meta_description:  Backend engineer specialising in Node.js, PostgreSQL and event-driven multi-tenant SaaS.
domain:            [[OPTIONAL: yourname.dev]]
favicon:           [[OPTIONAL: initials or icon]]
theme:             [[OPTIONAL: light / dark / both; accent colour]]
```

---

## 2. Hero (`#hero`)
```
name:        [[FILL: Full Name]]
title:       Backend Engineer   [[FILL: confirm or change, e.g. "Senior Backend Engineer"]]
tagline:     I build and maintain the backend of a multi-tenant SaaS platform: APIs, data models and the events that keep services in sync.
location:    [[FILL: City, Country]]
photo:       [[FILL: path/to/photo.jpg]]
cta_primary:   View Projects  -> #projects
cta_secondary: Download Résumé -> [[FILL: resume.pdf link]]
```

---

## 3. About (`#about`)
```
paragraph_1: I'm a backend engineer with 4+ years building a cloud platform that IT managed service providers (MSPs) use to run their business: support tickets, projects, scheduling, time tracking, billing and a client self-service portal.

paragraph_2: I was the founding developer on the main backend API and I'm still its largest contributor. I wrote ~30% of all commits and ~35% of the current code, and created 66 database migrations. My work centres on Node.js, Express and PostgreSQL, multi-tenant data design, and RabbitMQ events that keep billing, timesheet, reporting and audit services consistent.

paragraph_3: [[FILL: something personal: what you enjoy about backend work, what you're looking for next, or life outside code]]
```

---

## 4. Stats strip (`#stats`)
| label | value |
|---|---|
| Years on the platform | 4+ |
| Commits | 2,400+ |
| Share of current codebase | ~35% |
| Database migrations | 66 |
| Test files written (2026) | 128 |
| [[OPTIONAL: users / tenants served]] | [[FILL]] |

---

## 5. Experience (`#experience`)

### Job 1 (current)
```
company:   [[FILL: Company name, or "B2B SaaS company (MSP software)"]]
role:      [[FILL: official title(s), e.g. Software Engineer → Senior Software Engineer]]
dates:     Aug 2022 – Present   [[FILL: confirm start month]]
location:  [[FILL: City / Remote]]
summary:   Founding backend engineer on the main API of a multi-tenant ticketing and business-management platform for IT service providers.
bullets:
  - Built the core ticket, customer, tenant-sign-up and MFA APIs in Node.js, Express and PostgreSQL. Still ~35% of the live codebase.
  - Designed 66 schema migrations for a multi-tenant data model where every query is scoped to the tenant.
  - Delivered a public REST API and webhook system, and fixed cross-service gaps so API-created data reaches billing, timesheet, reporting and audit services.
  - Built a BullMQ/Redis bulk-onboarding pipeline with per-row retry, cancellation and progress reporting.
  - Owned identity flows with Logto: SSO, magic-link onboarding, password reset and MFA.
  - Split a 7,200-line route file into route, service and data layers without changing behaviour.
  - Wrote 128 test files (~38k lines) with Jest and supertest in 2026.
  - [[OPTIONAL: mentoring, on-call, team size, promotions]]
```

### Job 2 (earlier)
```
company:   [[FILL or delete]]
role:      [[FILL]]
dates:     [[FILL]]
bullets:
  - [[FILL]]
```

---

## 6. Featured projects (`#projects`)

> Each project card uses the same fields: `title, status, period, role, problem, solution, tech, impact, links, image`.

### Project 1: Core Ticketing & Customer Backend
```
status:    Live in production
period:    2022 – 2024
role:      Founding backend engineer
problem:   The product's core workflows (tickets, customers, tenant sign-up) needed a backend from scratch.
solution:  Built ticket CRUD, customer and customer-user management, APIs for the technicians' desktop agent app, tenant sign-up and MFA, timezone-aware ticket data, and email templates.
tech:      Node.js, Express, PostgreSQL, Knex, Joi, dayjs/luxon
impact:    Most of what users touch every day runs through this code. ~35% of the current codebase is still mine.
           [[FILL: a real metric, e.g. tickets processed per month or number of tenants]]
links:     [[OPTIONAL]]
image:     [[OPTIONAL: architecture diagram]]
```

### Project 2: Public REST API & Cross-Service Data Consistency
```
status:    Live in production (2026)
role:      Lead developer
problem:   Data created through the public API never reached Timesheet, Reports, Billing or the Audit Trail, because the API didn't publish the events those services expect. The API also skipped business rules the app enforced.
solution:  Moved the public API and webhook publisher (~50 files) onto the release branch, traced each missing event, rebuilt the exact payload each consumer expects, and made the API enforce the same rules as the app (e.g. invoiced time entries can't be edited).
tech:      Node.js, RabbitMQ, Webhooks, Jest (service + end-to-end tests)
impact:    Time and billing data from integrations and AI agents is now correct.
           [[FILL: e.g. number of integrations or API clients using it]]
links:     [[OPTIONAL: public API docs]]
```

### Project 3: Bulk Customer Onboarding Pipeline
```
status:    Live in production (Jan & Apr 2026)
role:      Sole developer   [[FILL: confirm]]
problem:   Onboarding a new MSP meant entering customers one at a time.
solution:  File-upload pipeline with job and row tracking tables, a background worker with per-row retry and cancellation, domain and SSO checks, and status/summary/failure endpoints. Follow-up added onboarding users across many customers at once.
tech:      BullMQ, Redis, PostgreSQL, CSV/Excel parsing
impact:    Replaced manual one-by-one setup.
           [[FILL: e.g. "onboarding time cut from X hours to Y minutes" or "N customers imported"]]
```

### Project 4: Ticket Merge with Undo
```
status:    In progress, on the development branch (Nov 2026)   [[FILL: update when shipped]]
problem:   Merges were permanent, had no permission check, and allowed merging a ticket into itself or into another client's ticket.
solution:  Snapshot each ticket's state before a merge so it can be undone; permission checks; safe stopping of running timers; pausing and restarting the SLA clock; unread-messages banner on merged tickets.
challenge: Touches automation, SLA timing, archiving, search and reporting at the same time.
tech:      Node.js, PostgreSQL, Jest (~2,000 lines of tests)
```

### Project 5: Per-Tenant Custom ID Formats
```
status:    In progress, on the development branch (Oct 2026)   [[FILL: update when shipped]]
problem:   Tenants wanted their own ticket, project and task ID formats, and IDs had to stay unique when records are created at the same moment.
solution:  Postgres upserts with per-tenant locks and retry on conflict. IDs are never reissued, even after a prefix change. Every format change is logged.
tech:      PostgreSQL (upserts, advisory locks), Node.js
```

### Project 6+: Side / personal projects
```
title:     [[FILL or delete]]
summary:   [[FILL]]
tech:      [[FILL]]
links:     [[FILL: GitHub / live demo]]
```

---

## 7. Skills (`#skills`)

> Only list what you actually used. The report says Docker, Helm/Kubernetes, CI/CD, Stripe, HubSpot, Mailchimp and Yjs were teammates' work. Add them only if you used them **elsewhere**.

```
languages:         JavaScript (Node.js), SQL
                   [[OPTIONAL: TypeScript, Python, etc., if from other work]]
backend:           Express, REST API design, Joi validation, Webhooks
databases:         PostgreSQL, Knex (migrations, transactions, upserts, advisory locks), Redis
messaging_queues:  RabbitMQ, BullMQ, MQTT, Agenda scheduler
architecture:      Multi-tenant SaaS, event-driven microservices, layered architecture (route → service → repository)
auth_identity:     Logto (SSO, magic link, MFA), Frontegg
testing:           Jest, supertest
other:             AWS S3, CSV/Excel import, email templating, timezone handling (dayjs, luxon), RMM integration
devops_cloud:      [[FILL from other experience, or delete this row]]
frontend:          [[FILL from other experience, or delete this row]]
ai_tools:          [[OPTIONAL: e.g. AI-assisted development (Claude Code / Copilot)]]
```

---

## 8. Engineering highlights / strengths (`#highlights`)
Short cards, 1–2 lines each:

1. **Long-term ownership:** founding developer, 4+ years of steady commits, largest author of the live codebase.
2. **Data integrity:** fixed concurrency bugs (same-moment ID creation), queries running outside their transaction, and invalid time ranges that broke later saves.
3. **Event-driven systems:** trace missing events across services and rebuild exactly what each consumer expects.
4. **Legacy refactoring:** split a 7,200-line file into clean layers without changing behaviour.
5. **Clear technical writing:** commit messages written like small incident reports (what broke, why, what changed, what's intentionally left out).

---

## 9. Education (`#education`)
```
degree:      [[FILL]]
institution: [[FILL]]
years:       [[FILL]]
notes:       [[OPTIONAL: grade, relevant coursework]]
```

## 10. Certifications (`#certifications`)
```
- name: [[FILL or delete section]]
  issuer: [[FILL]]
  year: [[FILL]]
  link: [[OPTIONAL]]
```

## 11. Testimonials (`#testimonials`), optional
```
- quote:  [[FILL: real quote, with permission]]
  author: [[FILL: name, title]]
```

## 12. Writing / Talks (`#writing`), optional
```
- title: [[FILL]]
  link:  [[FILL]]
```

---

## 13. Contact (`#contact`)
```
heading:   Let's talk
blurb:     [[FILL: e.g. "Open to senior backend roles. Remote or [City]."]]
email:     [[FILL]]
linkedin:  [[FILL]]
github:    [[FILL]]
other:     [[OPTIONAL: X/Twitter, blog, Calendly]]
resume:    [[FILL: resume.pdf link]]
```

## 14. Footer
```
text: © 2026 [[FILL: Your Name]]. Built with HTML & CSS.
```

---

## Appendix: Things to leave off the site (from the report's gaps)
Use these to prepare for interviews and to plan what to learn next:
- Little testing before mid-2026 (now strong)
- No DevOps / CI/CD ownership in this repo
- Very large files with heavy `console.log` use
- Big branches that are slow to merge; smaller PRs would help
- Little code review visible in git
- No TypeScript or frontend in this repo
