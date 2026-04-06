# Learning Usage Guide

This document explains how to use `danyel-ii.xyz` as a learning system.

It is not an editing guide and not a CMS guide. The focus here is how the current site can be used in practice for study, retrieval, orientation, and ongoing technical development.

## What the site is for

The site is designed as a public operating system for learning.

That means it is meant to support:

- active technical study
- retrieval of previous findings
- linking between concepts and work
- maintaining continuity across tools, notes, and experiments
- turning scattered learning into structured, reviewable material

The site is not primarily designed as:

- a portfolio reel
- a marketing landing page
- a social feed
- a one-time static personal homepage

Its strongest use is as a stable knowledge surface for work that unfolds over time.

## Mental model

The easiest way to understand the site is to think of it as having three layers.

### 1. Orientation layer

This is the homepage and the main chrome.

Purpose:

- establish current direction
- show major areas of work
- give access to the main surfaces

Main elements:

- homepage hero
- knowledge surfaces strip
- learning section
- apps/projects section
- recent writing section
- links/contact section

This layer helps answer:

- what is currently being studied
- what types of work exist here
- where should I go next

### 2. Durable knowledge layer

This is where the site becomes genuinely useful over time.

Main routes:

- `/notes`
- `/log`
- `/projects`
- `/topics`
- `/blog`
- `/research`

Purpose:

- store material in a retrievable format
- make work reviewable later
- connect writing, logs, and projects through topics

This layer helps answer:

- what has already been learned
- what changed recently
- what belongs to which topic
- what projects relate to which study thread

### 3. Retrieval layer

This is the search and navigation layer.

Main routes:

- `/search`
- `/topics`

Purpose:

- find by term
- find by topic
- find by kind
- find by status
- move across the system without relying on memory alone

This layer helps answer:

- where is that note again
- what material exists for this topic
- what is active vs stable

## How to use the homepage for learning

The homepage should be used as an index and orientation surface, not as the place where all work lives.

### Hero

Use the hero as the current mission statement.

Practical use:

- review the current focus areas
- use the action links to jump into deeper content
- treat it as the “current operating context”

Implementation note:

- the hero is presentation-first
- it is useful for orientation, not canonical storage

### Knowledge surfaces strip

This is one of the most important practical additions.

Use it as the quick routing layer to the actual knowledge system:

- `Search` when you know what you are looking for
- `Topics` when you know the subject area but not the exact entry
- `Log` when you want chronology
- `Notes` when you want stable reference material
- `Projects` when you want applied work
- `Capture` when you want to draft a new log quickly

Practical rule:

- do not stay on the homepage longer than necessary
- use it to decide where to enter the system

### Learning section

Use this as a progress map rather than as a complete record.

Practical use:

- review current tracks
- identify active areas of study
- compare current vs next vs archived learning areas

Implementation note:

- this section still reads from `src/data/learning.ts`
- it is a curated summary surface, not the durable source of record

### Apps / projects section

Use this as an applied-work preview.

Practical use:

- review the types of tools and systems being developed
- move from an experiment to the dedicated project page when available
- use it to connect learning with implementation

Implementation note:

- the visual scene is homepage-oriented
- canonical long-term project material now belongs in `/projects`
- the homepage scene still uses legacy TypeScript-fed display data

### Research / writing section

Use this to inspect the latest thinking rather than all available material.

Practical use:

- read the newest items
- use it to decide whether to continue into `/blog` or `/research`
- scan for recent changes in thought or terminology

Implementation note:

- this section is now fed by content collections
- it is a current-window surface, not a full archive

## How to use each durable surface

### `/notes`

Use notes for evergreen or semi-evergreen material.

Best suited for:

- concept explanations
- command references
- protocol checklists
- recurring technical reminders
- stable study material

How to use it well:

- read notes when you need a stable reference point
- revise notes when repeated log entries keep restating the same thing
- use notes to reduce re-learning cost

Practical distinction:

- if the material is still about a specific day/session, it belongs in `/log`
- if it should remain useful independent of date, it probably belongs in `/notes`

### `/log`

Use the log as the chronological learning journal.

Best suited for:

- what happened today
- what was tested
- what failed
- what became clearer
- what should be revisited later

How to use it well:

- keep entries short enough to write consistently
- record concrete observations, not just intentions
- include topics so the log becomes retrievable later
- use it as the bridge between activity and later consolidation

Practical distinction:

- logs preserve sequence
- notes preserve stable understanding

### `/projects`

Use projects for applied systems and experiments that deserve their own durable page.

Best suited for:

- tools
- deployments
- experiments
- public-facing systems
- implementation records

How to use it well:

- use project pages to explain what the project is and what state it is in
- link projects back to notes and research where useful
- use them as the implementation layer of the learning system

Practical distinction:

- notes explain ideas
- logs explain sessions
- projects explain applied systems

### `/topics`

Use topics as the cross-collection map.

Best suited for:

- surveying a subject area
- moving across logs, notes, projects, blog, and research together
- identifying where material is thin or fragmented

How to use it well:

- start with a topic page when you want breadth rather than chronology
- use it to see whether one topic is overrepresented in logs but underdeveloped in notes
- use it to decide what needs consolidation next

This is one of the most useful surfaces for actual learning review.

### `/blog`

Use blog entries for reflective or explanatory public writing.

Best suited for:

- framing decisions
- articulating process
- describing why a learning direction matters

Practical use:

- use blog posts to explain direction and methodology
- use them when a note is too narrow and a research note is too technical

### `/research`

Use research for more technical working notes and observations.

Best suited for:

- protocol notes
- cryptography observations
- structured technical reflection

Practical use:

- treat research entries as the analytical layer between logs and stable notes
- use them when the work is more technical than a blog post but still essay-like

### `/search`

Use search when memory is weak but you know some of the language.

Best suited for:

- finding a known concept
- narrowing by kind
- narrowing by status
- narrowing by topic

Practical use:

- search by protocol, command, or topic name
- search when a concept appears across different collections
- use it as the recovery layer when your system grows beyond what you can remember manually

## Recommended learning workflows

### Workflow 1: Daily study loop

Use this when you are actively learning a topic over multiple days.

1. Start from the homepage or `/topics`
2. Review the relevant topic page
3. Read the existing note or research entry if one exists
4. Perform the actual study or test
5. Record what happened in `/log`
6. Later, consolidate recurring findings into `/notes`

Why this works:

- logs preserve sequence
- notes preserve value
- topics tie them together

### Workflow 2: Retrieval-first review

Use this when you want to revisit a subject after some time away.

1. Open `/topics`
2. Choose the relevant subject
3. Scan linked notes, research, logs, and projects
4. Open `/search` if the topic naming has drifted
5. Identify what is current, stable, or still only a seed

Why this works:

- it avoids relying on memory alone
- it shows both durable and in-progress material in one place

### Workflow 3: Tool-linked learning

Use this when building something practical while learning.

1. Open a project page in `/projects`
2. Review related notes or research
3. Work on the implementation
4. Record the session in `/log`
5. Update project status if the implementation state changed

Why this works:

- it keeps learning and implementation coupled
- it prevents projects from drifting away from the study process that produced them

### Workflow 4: Public explanation loop

Use this when you want to make the work legible to others.

1. Keep the session-level detail in `/log`
2. Move durable understanding into `/notes`
3. Publish broader framing in `/blog` or `/research`

Why this works:

- it separates immediate activity from durable explanation
- it keeps each surface readable for its actual purpose

## How the implementation supports learning

The site is useful for learning because the implementation gives structure to recall and revision.

### Typed content model

Each item carries metadata such as:

- title
- summary
- status
- topics
- created
- updated
- related links

This matters because learning systems fail when retrieval becomes ambiguous.

The metadata makes it possible to:

- sort intelligently
- search meaningfully
- aggregate by topic
- distinguish seed work from stable work

### Topic aggregation

Topics are not just labels. They function as a cross-collection connective layer.

That means:

- one topic can gather notes, logs, projects, blog posts, and research entries
- subject review does not depend on where a piece was originally published

This is especially useful for technical learning because understanding rarely develops inside only one content type.

### Status values

The status system helps with intellectual honesty.

Current statuses:

- `seed`
- `active`
- `stable`
- `archived`

Practical meaning:

- `seed`: early idea or partial understanding
- `active`: currently in use or under active development
- `stable`: mature enough to rely on
- `archived`: no longer current but still worth keeping

This matters because it prevents unfinished work from being mistaken for settled knowledge.

### Search metadata

Search works because pages emit structured metadata into Pagefind.

That allows filtering by:

- kind
- status
- topic
- updated date

In practical terms, this turns the site from a reading surface into a retrieval tool.

## What the site does well right now

- provides a strong homepage entry point
- supports multiple knowledge surfaces with distinct roles
- makes logs and notes structurally different
- gives topic hubs a real purpose
- supports search over the durable content layer
- supports quick mobile log capture
- keeps the design calm and system-oriented

## Current limitations

These are important if you want to use the system well.

### Homepage summary sections are still partly legacy-fed

Some major homepage areas still use TypeScript data rather than content collections:

- learning
- apps scene
- NFT archive

This means the homepage is still partly a curated display system rather than a full reflection of the content architecture.

### `/admin` production auth is not fully finished

Local authoring works, but full production auth still requires external setup.

Practical implication:

- use `/capture` or direct GitHub editing if you need mobile speed right now

### Search indexes only pages marked for indexing

This is intentional, but it means the search experience depends on content routes carrying proper Pagefind metadata.

## Best practices for using the site as a learner

- use `/log` often, even for small study sessions
- move recurring insight into `/notes`
- keep topics consistent
- use project pages when work becomes implementation-oriented
- use topic pages for review sessions
- use search when memory fails
- treat status honestly
- do not overload one collection with every kind of material

## Practical summary

If you want the shortest version of how to use the site:

- homepage for orientation
- notes for stable understanding
- log for chronological sessions
- projects for applied systems
- topics for cross-cutting review
- research/blog for explanatory writing
- search for retrieval

That is the actual learning model the current site supports.
