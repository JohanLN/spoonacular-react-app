# Spoonacular React App

Welcome to **Spoonacular React App**, a modern frontend web application built with React, TypeScript, and TailwindCSS, designed to explore and search for recipes using the Spoonacular API.

## 🛠️ Tech Stack

- **React** (with TypeScript)

- **Vite** (for fast development and build)

- **React Router** (for routing)

- **Axios** (for API requests)

- **Tanstack Query** (for data fetching and caching)

- **TailwindCSS** and **Shadcn/UI** (for styling and UI components)

- **Zod** (for data validation)

- **Vitest** (for unit testing)

- **Cypress** (for end-to-end testing)

- **Storybook** (for component development and documentation)

---

## 🚀 Features

- **Recipe Search:** Find recipes with the Spoonacular API.

- **Pagination Management:** Easily navigate through search results.

- **Error Handling:** Robust error handling with `react-error-boundary`.

- **Responsive Design:** Fully responsive UI with TailwindCSS.

---

## 📦 Installation

1.  **Clone the repository**:

```bash

git clone https://github.com/your-username/spoonacular-react-app.git

cd spoonacular-react-app



```

2.  **Install dependencies**:

```bash

pnpm install

```

3.  **Create a .env file with the following environment variables**:

```bash

VITE_BASE_URL=https://api.spoonacular.com

VITE_API_KEY=your_spoonacular_api_key

```

## ⚙️ Scripts

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| pnpm dev             | Start the development server              |
| pnpm build           | Build the app for production              |
| pnpm test            | Run unit tests with Vitest                |
| pnpm test:watch      | Run unit tests with Vitest and watch      |
| pnpm test:coverage   | Run tests with coverage report            |
| pnpm e2e:open        | Open Cypress for end-to-end testing       |
| pnpm e2e:test        | Run Cypress tests in headless mode        |
| pnpm lint            | Run ESLint to check for linting errors    |
| pnpm lint:fix        | Format the code with Prettier             |
| pnpm preview         | Preview the production build              |
| pnpm storybook       | Start Storybook for component development |
| pnpm build-storybook | Build Storybook for production            |

## 🔍 Usage

1.  **Start the development server**:

```bash
pnpm dev
```

2.  **Open your browser** and navigate to:

```bash
http://localhost:5173
```

3.  **Run tests**:
    • Unit tests:

```bash
pnpm test
```

• End-to-end tests:

```bash
pnpm cypress:open
```

## 🧪 Testing

• **Unit Tests:** Located in the src/**tests** directory and run with Vitest.

• **End-to-End Tests:** Located in the cypress/e2e directory and run with Cypress.

##

## ✨ Acknowledgements

• [Spoonacular API](https://spoonacular.com/)

• [Tanstack Query](https://tanstack.com/query)

• [Shadcn/UI](https://ui.shadcn.dev/)
