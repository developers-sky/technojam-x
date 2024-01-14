# Technojam Website Development Documentation

## Table of Contents

- [Technojam Website Development Documentation](#technojam-website-development-documentation)
  - [Table of Contents](#table-of-contents)
  - [Introduction ](#introduction-)
  - [Project Structure ](#project-structure-)
  - [Technologies Used ](#technologies-used-)
  - [Installation ](#installation-)
  - [Running the Application ](#running-the-application-)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deploy on Vercel](#deploy-on-vercel)
  - [Contributing ](#contributing-)
    - [Fork the Repository ](#fork-the-repository-)
    - [Clone the Fork ](#clone-the-fork-)
    - [Create a Branch ](#create-a-branch-)
    - [Commit Changes ](#commit-changes-)
    - [Husky (Pre-commit) ](#husky-pre-commits-)
    - [Push Changes ](#push-changes-)
    - [Create Pull Request ](#create-pull-request-)
  - [Coding Standards ](#coding-standards-)
  - [Maintainers ](#maintainers-)

## Introduction <a name="introduction"></a>

Welcome to the documentation for the development of Technojam's new website. This document provides a comprehensive guide to the project structure, technologies used, installation process, and guidelines for contributing.

## Project Structure <a name="project-structure"></a>

The project follows a standard web application structure:

  - `/src`: Contains the source code for the website.
  - `/components`: Reusable React components.
  - `/pages`: React components representing different pages.
  - `/styles`: Stylesheets for the application.
  - `/utils`: Utility functions.
  -  `/data-components`: data-visualizationa and funtions.
  -  `/graphics-enhancements`: graphics and 3d module components.
  -  `/integrations`: 3rd party  integrations of web-apps and services.
  -  `/newsletter`: newsletter components.
  -  `/content`: all-pupose generic content holder.
  -  `/blog`: blog posts and reaction container holder. 
  -  `/vectors`: vector library and files directory.
  -  `/api`: api directory.
  -  `/lib`: custom Exported ClassNames.

- `/public`: Static assets and HTML files.

- `/docs`: Documentation files.

## Technologies Used <a name="technologies-used"></a>

The website is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime for server-side development.
- **Next.js**: A modular javascrip framework.
- **Express**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing dynamic data.
- **Sass**: A CSS extension language.
- **Tailwind**: A CSS enhancement Framework.

## Installation <a name="installation"></a>

1. Clone the repository:

   ```bash
   git clone https://github.com/developers-sky/technojam-X.git
   cd technojam-x
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application <a name="running-the-application"></a>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Visit `http://localhost:3000` in your browser to view the application.

## Contributing <a name="contributing"></a>

We welcome contributions from the community. Follow these steps to contribute:

### Fork the Repository <a name="fork-the-repository"></a>

Click on the "Fork" button on the top right of the repository page.

### Clone the Fork <a name="clone-the-fork"></a>

Clone your forked repository to your local machine:

```bash
git clone https://github.com/developers-sky/technojam-X.git
cd technojam-X
```

### Create a Branch <a name="create-a-branch"></a>

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature-name
```

### Commit Changes <a name="commit-changes"></a>

Make your changes and commit them:

```bash
git add .
git commit -m "Your commit message"
```


### Husky (Pre-commit) <a name="husky-pre-commits-"></a>

husky Pre-commit:

Husky is a pre-commit and hook tool, pre-check your code quality and vulnerability analysis.
will automatically just work, when you commit files using 

```bash
git push origin
    
```
or 

```bash
git push 
```
### Push Changes <a name="push-changes"></a>

Push your changes to your fork:

```bash
git push origin feature-name
```

### Create Pull Request <a name="create-pull-request"></a>

Create a pull request on the GitHub repository. Provide a clear description of your changes.

## Coding Standards <a name="coding-standards"></a>

Follow the coding standards defined in the `/docs/coding-standards.md` file.

## Maintainers <a name="maintainers"></a>

- Anurag Kumar Singh (singh.ask@outook.com)
- Neeraj Krishna (contact@neerajx0.xyz)
- Yash Singh (singhyash9009670@gmail.com)
For any questions or concerns, feel free to contact the maintainers. Thank you for your contributions!
