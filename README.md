<div align="center">
    <a href="https://iphone15-fv.netlify.app" target="_blank">
      <img src="public/design/preview.webp" alt="Project Banner">
    </a>
  <h3 align="center">iPhone 15 Website</h3>
</div>

##  <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

##  <br /> <a name="introduction">✨ Introduction</a>

**[EN]** Next.js application designed for AI prompt sharing between users. Explore, create, and share prompts effortlessly with MongoDB integration and secure authentication via NextAuth. Enjoy a modern design and responsive interface for optimal user experience.

**[FR]** Application Next.js conçue pour le partage de prompts IA entre utilisateurs. Découvrez, créez et partagez des prompts facilement grâce à l'intégration MongoDB et à l'authentification sécurisée via NextAuth. Profitez d'un design moderne et d'une interface responsive pour une expérience utilisateur optimale.

##  <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- **React** is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. React's component-based architecture allows developers to create reusable UI components, making development more efficient and the codebase easier to maintain. 

- **Next.js** is a React framework known for its server-side rendering (SSR) and static site generation (SSG) capabilities, enhancing performance and SEO for web applications. It offers features like automatic code splitting, API routes for server-side logic, and a plugin system for extensibility.

- **MongoDB** is a NoSQL database system known for its flexibility and scalability, ideal for handling large volumes of unstructured or semi-structured data. It stores data in JSON-like documents, making it easy to integrate with modern applications. MongoDB's features include powerful querying capabilities, automatic sharding for horizontal scaling, flexible data models, and support for distributed transactions in recent versions.

- **Three.js** is a JavaScript library that enables the creation and display of 3D computer graphics in web browsers using WebGL. It provides extensive capabilities for rendering 3D scenes, including support for geometries, materials, lighting, and animations.

- **TypeScript** is a statically typed superset of JavaScript that allows for early detection of errors and more robust, maintainable code. TypeScript's type system helps developers catch mistakes early during the development process, ensuring a more stable and reliable application.

- **Clerk** is an advanced authentication and user management service that provides secure and seamless user login, registration, and profile management. Clerk handles complex authentication flows, including multi-factor authentication (MFA), social logins, and passwordless authentication, making it easy to manage user identities while maintaining high security standards.

- **Framer Motion** is a React animation library designed for creating smooth, interactive animations and transitions. It simplifies complex animations with a straightforward API, supports gesture-based interactions, and offers physics-based animations for realistic motion effects.

- **Tailwind** is a utility-first CSS framework that speeds up UI development by providing a set of pre-built utility classes. It allows developers to quickly build custom designs without writing traditional CSS, promoting rapid prototyping and design consistency.

- **shadcn/ui** is as comprehensive React component library designed for creating modern and responsive user interfaces. ShadCN offers a wide range of pre-built, customizable components that adhere to best practices for accessibility and performance. Its intuitive API and well-documented components enable developers to build consistent and aesthetically pleasing UIs with ease.

- **Appwrite** is an open-source backend platform that offers a wide range of backend services including authentication, database management, file storage, and cloud functions. It is designed to simplify backend development for web and mobile applications, providing a unified API and robust security features. Appwrite supports scalability and real-time updates, making it suitable for a variety of application use cases.

- **Webhooks** are automated messages sent from one application to another when specific events occur. They are typically triggered by events in a source application and deliver data in real-time to a target application via HTTP POST requests. Webhooks facilitate seamless integration between different systems, allowing for event-driven communication without continuous polling.

- **Serverless** APIs refer to backend services that run on cloud infrastructure, where the cloud provider dynamically manages the allocation and scaling of resources. Serverless APIs eliminate the need for developers to manage servers, enabling them to focus on writing code and delivering functionality. They are cost-effective, scalable, and ideal for handling unpredictable workloads or microservices architectures.

- **React Hook Form** is a lightweight library for managing forms in React applications. It simplifies form handling by leveraging React's Hooks API, offering a performant and intuitive way to manage form state, validation, and submission. React Hook Form emphasizes reusability, flexibility, and minimal boilerplate code, making it suitable for building complex forms efficiently.

- **Zod** is a TypeScript-first schema validation library that provides a robust and type-safe way to define data schemas and validate data against those schemas. It allows developers to declare data shapes using TypeScript's type system, ensuring type safety at compile-time. Zod supports advanced features like schema composition, custom error messages, and runtime validation, making it suitable for both frontend and backend validation needs.

- **Vite** is a modern frontend build tool known for fast ES Module imports, efficient bundling, and quick development server startup times. It supports frameworks like Vue.js and React, optimizing workflow and performance compared to traditional bundlers.

- **GraphQL** is a query language for APIs that enables efficient data fetching and manipulation. It offers a flexible and powerful approach to data querying, allowing clients to request only the data they need. GraphQL's schema-based system and strong typing ensure robust and predictable API development, enhancing performance and developer productivity.

- **Ant Design** is a comprehensive UI component library for React that offers a wide range of customizable and well-designed components. It provides a unified design language and efficient development patterns, promoting consistency and usability across applications. Ant Design's modular architecture and extensive documentation make it a preferred choice for building elegant and responsive user interfaces.

- **Docker** is a platform that automates the deployment of applications inside lightweight, portable containers. It provides consistent environments for development, testing, and production, allowing developers to package applications and their dependencies together, ensuring they run seamlessly across different systems.

- **Node.js** is a JavaScript runtime built on Chrome's V8 engine that enables server-side scripting, allowing developers to build scalable network applications. It is known for its non-blocking, event-driven architecture, which ensures high performance and efficiency for handling multiple concurrent connections.

- **Express.js** is a minimalist web framework for Node.js, designed to build web applications and APIs. It offers robust features like routing, middleware support, and templating, making it a popular choice for developing server-side applications with a clean and organized code structure.

- **React Native** is a popular framework for building mobile applications using JavaScript and React. It enables developers to create native apps for iOS and Android with a single codebase, leveraging native components for a seamless user experience. React Native's component-based architecture and hot-reloading feature enhance development efficiency and code maintainability.

- **Expo** is an open-source platform designed for React Native development, providing a set of tools and services that simplify the process of building, deploying, and testing mobile applications. It offers a managed workflow with pre-configured native modules, enabling developers to focus on writing JavaScript code without worrying about native code integration. Expo's rich ecosystem and development tools accelerate the development cycle and enhance app performance.

- **RapidAPI** is a powerful platform that allows developers to discover, connect, and manage thousands of APIs. It provides a unified access point for a vast array of APIs, enabling easy integration of external data and services into applications. RapidAPI simplifies the process of consuming APIs, making development faster and more efficient.

- **Axios** is a promise-based HTTP client for JavaScript, widely used for making asynchronous requests to APIs and handling responses. It simplifies the process of sending HTTP requests, managing request and response data, and handling errors. Axios supports various request methods, interceptors, and automatic JSON transformation, making it a versatile tool for interacting with APIs.


## <br/> <a name="features">📝 Features</a>

👉 **Robust Authentication**: Secure and reliable user login and registration system.

👉 **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

👉 **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

👉 **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

👉 **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

👉 **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

👉 **Profile Page**: View all created podcasts with options to delete them.

👉 **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

👉 **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

👉 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

## <br /> <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

<br/>**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Cloning the Repository**

```bash
git clone {git remote URL}
```

<br/>**Installation**

Let's install the project dependencies, from your terminal, run:

```bash
npm install
# or
yarn install
```

<br/>**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'

# OpenAI
OPENAI_API_KEY

# Next.js: Update this with deployment URL!
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the placeholder values with your actual respective account credentials:

- [Clerk](https://dashboard.clerk.com)
- [Cloudinary](https://console.cloudinary.com)
- [MongoDB](https://cloud.mongodb.com)
- [Stripe](https://dashboard.stripe.com)


<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
# or
yarn dev
```

Open [`http://localhost:3000`](http://localhost:3000) in your browser to view the project.





# Hot Takes : Piiquante

Sixième projet du parcours "Développeur web" chez OpenClassrooms. 

L'objectif est de construire une API sécurisée pour une application d'avis gastronomiques.

- [Cahier des charges](./notes/Piiquante%20-%20Cahier%20des%20charges.pdf)

- [Aspect visuel du site](./notes/Piiquante%20-%20Aspect%20visuel.pdf)

![banniere du site](./notes/Piiquante%20-%20readme%20cover.jpg)

# Lancement

Prérequis  : Node.js et NPM installés sur votre ordinateur

-  1 : Installation Frontend (Angular app) : Depuis le dossier "front", lancez "npm install" depuis votre environnement de développement/Terminal. En cas de problème, consulter le PDF ["aide lancement"](./notes/Piiquante%20-%20Aide%20lancement.pdf).

- 2 : Lancement Application : Depuis le dossier "back", lancez le script "npm start" depuis votre environnement de développement/Terminal. L'application devrait se lancer sur localhost port 4200 par défaut. 

- 3 : Installation Backend (API) : Depuis le dossier "back", lancez "npm install" depuis votre environnement de développement/Terminal.

- 4 : Lancement API : Depuis le dossier "back", lancez le script "npm start" depuis votre environnement de développement/Terminal.

# Compétences évaluées
- Stocker des données de manière sécurisée
- Implémenter un modèle logique de données conformément à la réglementation
- Mettre en œuvre des opérations CRUD de manière sécurisée


# Technologies
- Node.js
- Express
- Mongoose (MongoDB)
- NPM : Bcrypt, Crypto-js, Dotenv, Express, Helmet, Jsonwebtoken, Mongoose-unique-validator, Multer, Password-validator, Validator 


# Scénario
Vous avez passé la dernière année en tant que développeur back-end indépendant et vous avez travaillé sur plusieurs projets de tailles et de difficultés variées.

La semaine dernière, vous avez reçu un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .

<br>

# [EN] HotTakes / Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Test User
username : test@test.com
password : Hzrgjez983S$$

Si vous préférez créer un compte
Mot de passe doit être de minimum 8 caractères et inclure 1 chiffre
(middleware password-validator)


# HotTakes
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.4.

<br>

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<br>

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<br>

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

<br>

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

<br>

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
