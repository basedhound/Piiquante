<div align="center">
    <a href="https://iphone15-fv.netlify.app" target="_blank">
      <img src="public/design/preview.webp" alt="Project Banner">
    </a>
  <h3 align="center">Chili Sauces</h3>
  <h2 align="center">School Project</h2>
</div>

##  <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

##  <br /> <a name="introduction">✨ Introduction</a>

**[EN]** This project focuses on building a RESTful API using Node.js and Express for a school assignment at OpenClassrooms. The API features robust authentication, database integration with MongoDB, and full CRUD operations. Security tools include Bcrypt, Crypto-js, Helmet, Jsonwebtoken, and Password-validator, along with Mongoose, Dotenv, Multer, Mongoose-unique-validator, and Validator. The API integrates seamlessly with the provided Angular frontend, demonstrating essential web development and security skills.

**[FR]** Ce projet se concentre sur la création d'une API RESTful en utilisant Node.js et Express pour un examen OpenClassrooms. L'API comprend une authentification robuste, une intégration de base de données avec MongoDB, et des opérations CRUD complètes. Les outils de sécurité incluent Bcrypt, Crypto-js, Helmet, Jsonwebtoken, et Password-validator, ainsi que Mongoose, Dotenv, Multer, Mongoose-unique-validator, et Validator. L'API s'intègre parfaitement avec le frontend Angular fourni, démontrant des compétences essentielles en développement web et en sécurité.

##  <br /> <a name="tech-stack">⚙️ Tech Stack</a>




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
