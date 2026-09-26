# Spendly

A personal expense tracker built with Flask and SQLite. Log expenses, see where your money goes, and manage your spending over time.

> **Status:** work in progress. The landing, register, and login pages render; the remaining features are being built step by step (see [Roadmap](#roadmap)).

## Tech stack

- **Backend:** Python, Flask 3.1
- **Database:** SQLite
- **Frontend:** Jinja2 templates, plain CSS and JavaScript
- **Testing:** pytest, pytest-flask

## Project structure

```
expense-tracker/
├── app.py              # Flask app and routes
├── database/
│   └── db.py           # SQLite connection, schema, and seed data
├── templates/          # Jinja2 templates (base, landing, register, login)
├── static/
│   ├── css/style.css
│   └── js/main.js
└── requirements.txt
```

## Getting started

Requires Python 3.10+.

```bash
# 1. Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the app
python app.py
```

Then open http://127.0.0.1:5001.

## Running tests

```bash
pytest
```

## Roadmap

| Step | Feature | Status |
|------|---------|--------|
| 1 | Database setup (`get_db`, `init_db`, `seed_db`) | To do |
| — | Landing, register, and login pages | Done (UI only) |
| 3 | Logout | To do |
| 4 | Profile page | To do |
| 7 | Add expense | To do |
| 8 | Edit expense | To do |
| 9 | Delete expense | To do |
