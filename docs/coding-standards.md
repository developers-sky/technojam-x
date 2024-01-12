# Coding Standards

The following guidelines outline the coding standards and best practices to be followed while contributing to the Technojam website project.

## Table of Contents

1. [General Guidelines](#general-guidelines)
2. [JavaScript](#javascript)
3. [React](#react)
4. [CSS/Sass](#css-sass)
5. [Naming Conventions](#naming-conventions)
6. [Comments](#comments)
7. [Git Commit Messages](#git-commit-messages)

## General Guidelines <a name="general-guidelines"></a>

- Keep code DRY (Don't Repeat Yourself).
- Write modular and reusable code.
- Follow the single responsibility principle.
- Ensure code is well-documented.

## JavaScript <a name="javascript"></a>

- Use `const` and `let` appropriately.
- Avoid using `var`.
- Follow ES6+ standards.
- Use meaningful variable and function names.
- Properly handle asynchronous operations using Promises or `async/await`.

## React <a name="react"></a>

- Use functional components whenever possible.
- Follow the React Hooks pattern.
- Organize component folders with an `index.js` file for easy imports.
- Prop-types should be used to document the intended types of properties passed to components.
- Follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

## CSS/Sass <a name="css-sass"></a>

- Use meaningful class names.
- Avoid using overly specific selectors.
- Follow a consistent indentation style.
- Group related styles together.

## Naming Conventions <a name="naming-conventions"></a>

- Use camelCase for variable and function names.
- Use PascalCase for component names.
- Use kebab-case for CSS class names.

## Comments <a name="comments"></a>

- Write clear and concise comments.
- Avoid unnecessary comments.
- Use comments to explain complex sections of code.

## Git Commit Messages <a name="git-commit-messages"></a>

- Use the present tense in commit messages.
- Keep commit messages concise and informative.
- Reference issue or feature numbers when relevant.

Example:

feat: add new feature to homepage

Fixes #123