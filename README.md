# Memory Cards

Memory Cards is a Progressive Web App (PWA) game that you can install on your mobile devices. This project uses the Atomic Design pattern and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation and Local Execution

To install and run the Memory Cards application locally, follow these steps:

1. Clone the repository to your local machine using `git clone`.

```bash
git clone <repository-url>
```

2. Navigate into the project directory.

```bash
cd memory-cards
```

3. Install the project dependencies.

```bash
npm install
```

4. Start the application.

```bash
npm start
```

The application will start in development mode and will be available at [http://localhost:3000](http://localhost:3000) in your browser.

## Running Tests

To run the tests for the Memory Cards application, use the following command:

```bash
npm test
```

This will launch the test runner in the interactive watch mode.

## Husky Pre-commit Hooks

This project uses Husky to manage git hooks. We have a pre-commit hook set up to run ESLint and tests before each commit to ensure code quality and that all tests are passing.

## Prettier Code Formatting

Prettier is set up in this project to manage code formatting. You can run Prettier across the codebase using the following command:

```bash
npm run format
```

Or if you're using Yarn:

```bash
yarn format
```

## Progressive Web App (PWA)

Memory Cards is a PWA, which means it can be installed on your mobile device and accessed offline. This is made possible by a Service Worker that caches the application's resources.

## Atomic Design

This project uses the Atomic Design pattern. This means that the components are split up into atoms, molecules, organisms, templates, and pages. This allows for better reusability and scalability of components.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
