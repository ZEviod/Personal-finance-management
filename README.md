# Personal Finance Management

Personal Finance Management is a small full-stack project that helps users track income, expenses, and investments. The frontend is built with Next.js and TypeScript; the backend is a minimal Python HTTP server that stores data in a local SQLite file. The repository also contains a simple machine learning model scaffold under `model/` for future predictive or recommendation features.

This project is ideal for learners who want a practical example that combines a modern React/Next frontend with a lightweight Python backend and an extendable ML component.

## Features

- Authentication (signup / signin) with a simple signed token
- Add and list transactions (income / expense)
- Minimal, easy-to-read backend (standard-library Python)
- Next.js frontend with reusable components and Tailwind CSS
- Placeholders for an ML model under `model/` for forecasting or recommendations

## Tech stack

- Frontend: Next.js (app router), TypeScript, Tailwind CSS
- Backend: Python 3.10+ (standard library), SQLite (file: `backend/app/data.db`)
- Model: Python scripts under `model/`

## Contributing (Open Source Guide)

We welcome contributions! A simple workflow to contribute as an open source contributor:

1. Fork the repository to your GitHub account.
2. Clone your fork locally and create a branch for your work:

   git clone https://github.com/<your-username>/Personal-finance-management.git
   cd Personal-finance-management
   git checkout -b feat/short-description

3. Follow the existing code style. Frontend uses TypeScript and Tailwind conventions. Keep commits small and focused.
4. If you add Python code, try to keep it compatible with Python 3.10+. Add tests where appropriate.
5. Run the project and verify your change works locally (see "Run the project" below).
6. Push your branch and open a Pull Request against the `main` branch of the original repository. In your PR description include:
   - What you changed and why
   - How to test the change
   - Any backwards-incompatible changes (if applicable)

Tips and expectations:

- Open an issue first for larger features so we can discuss design and avoid duplicate work.
- Use clear commit messages (imperative mood): "Add X feature", "Fix Y bug".
- Keep PRs focused and small when possible.
- If your change touches both frontend and backend, show clear manual test instructions in the PR.

Maintainers will review PRs, give feedback, and merge when ready. Be responsive to review comments.

## Run the project (development)

Below are concise steps to run both parts locally. Commands assume you are in the repository root.

### Frontend (Next.js)

1. Install dependencies:

   cd frontend
   npm install

   # or if you use pnpm

   # pnpm install

2. Run the dev server:

   npm run dev

3. Open http://localhost:3000 in your browser. The frontend expects the backend to be available at http://localhost:8000 by default.

## Note about sample data and onboarding messages

The frontend previously included static sample transactions and example numbers embedded in several components. Those have been removed so new users see helpful first-time onboarding messages instead of placeholder data. To test locally, start the frontend (`cd frontend; npm install; npm run dev`) and visit the Budgeting or Transactions pages — you'll see tips and guidance when no transactions are present.

Notes:

- Default Next.js port: 3000. You can change it with `PORT=3001 npm run dev`.

### Backend (Python)

This backend is intentionally minimal and uses only the Python standard library plus SQLite file storage.

1. (Optional but recommended) Create a virtual environment and activate it:

   python -m venv .venv
   .\.venv\Scripts\Activate.ps1

2. There are no external pip dependencies required for the server. Run it directly from the repository root:

   # Option A: run the module from the backend folder

   cd backend
   python -m app.server

   # Option B: run the server script directly from repo root

   python backend\app\server.py

3. The server will start on http://127.0.0.1:8000 by default. Endpoints of interest:

- POST /signup - body {username, password}
- POST /signin - body {username, password} returns {token}
- POST /transactions - Authorization: Bearer <token> - create a transaction
- GET /transactions - Authorization: Bearer <token> - list transactions

Notes:

- The server stores a SQLite DB at `backend/app/data.db` and generates `backend/app/secret.key` the first time it runs.
- These files are currently checked into the repository for demo purposes — in a real project you should add them to `.gitignore` and avoid committing secrets.

## Development tips

- Frontend linting/formatting: use your editor's Prettier/TypeScript settings to match the repo style.
- Backend: the code is simple and intended for learning. For production use, replace the toy auth/token with a tested library (JWT or OAuth) and use a proper web framework (FastAPI, Flask).

## Troubleshooting

- If the frontend can't reach the backend, ensure the Python server is running on port 8000 and CORS is allowed (the server sets Access-Control-Allow-Origin: \* by default).
- If you get database errors, delete `backend/app/data.db` and restart the server to recreate a fresh database (this will remove demo data).

## Security & Privacy

- This project is a demo and should not be used in production as-is. The authentication and token mechanism are intentionally simple for learning and must be replaced for any real deployment.

## License & Contact

This repository is provided under the terms of the LICENSE file in the project root.

If you want to reach the maintainers, open an issue or submit a PR. Include detailed reproduction steps for bugs.

---

If you'd like, I can also add a CONTRIBUTING.md, a PR template, or a .gitignore entry for `backend/app/secret.key` and `backend/app/data.db` — tell me which you'd prefer and I can make the change.
