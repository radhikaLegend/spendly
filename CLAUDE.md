# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Spendly — a personal expense tracker built with Flask 3.1 and SQLite, using Jinja2 templates and plain CSS/JS (no frontend framework, no JS libraries). It is being built step by step: route stubs in `app.py` return strings like `"Logout — coming in Step 3"`, and the step numbers there match the roadmap in `README.md`. Implement a step by replacing its stub rather than adding a new route.

## Commands

```bash
source venv/bin/activate          # virtualenv lives in ./venv
pip install -r requirements.txt
python app.py                     # dev server, debug mode, http://127.0.0.1:5001 (not 5000)
pytest                            # pytest + pytest-flask; no tests exist yet
pytest path/to/test_file.py::test_name   # single test
```

There is no linter or build step.

## Architecture

- **`app.py`** — the single Flask app and every route. Routes are plain functions rendering templates; templates link to each other with `url_for('<function name>')`, so renaming a route function breaks links.
- **`database/db.py`** — currently only a comment describing its contract (Step 1): `get_db()` returns a SQLite connection with `row_factory` set and foreign keys enabled, `init_db()` creates tables with `CREATE TABLE IF NOT EXISTS`, `seed_db()` inserts development data. The database file `expense_tracker.db` is gitignored.
- **Templates** — every page extends `templates/base.html`, which owns the navbar, footer (including links to `/terms` and `/privacy`), fonts, `style.css` and `main.js`. Pages fill `title`, `content`, and optionally `head` / `scripts` blocks.
- **Auth forms** (`register.html`, `login.html`) already POST to `/register` and `/login` and render an `{{ error }}` variable, but those routes only handle GET so far. Register collects `name`, `email`, `password`. The Privacy Policy page promises hashed passwords and account deletion, so implementations should honour that.

## Styling

All styles are in `static/css/style.css`, split into commented sections per page/component. Use the CSS variables in `:root` (`--ink*`, `--paper*`, `--accent`, `--accent-2`, `--border`, `--font-display`, `--font-body`, `--radius-*`) rather than raw values. Mobile overrides go in the existing `@media (max-width: 900px)` and `(max-width: 600px)` blocks at the bottom. Reusable page patterns already exist: `auth-*` for centred form cards, `legal-*` for long-form text pages, `btn-primary` / `btn-ghost` for buttons.

`static/js/main.js` is loaded on every page, so behaviour there must be guarded by element presence (see the `data-modal-open` video modal, the only JS so far).
