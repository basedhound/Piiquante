<div align="center">
    <a href="https://iphone15-fv.netlify.app" target="_blank">
      <img src="/.docs/preview/preview.webp" alt="Project Banner">
    </a>
  <h3 align="center">Chili Sauces</h3>
  <h4 align="center">School Project</h4>
</div>

## <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 📝 [Features](#features)
- 🚀 [Quick Start](#quick-start)

## <br /> <a name="introduction">✨ Introduction</a>

**[EN]** This project focuses on building a RESTful API using Node.js and Express for a school assignment at OpenClassrooms. The API features robust authentication, database integration with MongoDB, and full CRUD operations. Security tools include Bcrypt, Crypto-js, Helmet, Jsonwebtoken, and Password-validator, along with Mongoose, Dotenv, Multer, Mongoose-unique-validator, and Validator. The API integrates seamlessly with the provided Angular frontend, demonstrating essential web development and security skills. [More Details](/.docs)

**[FR]** Ce projet se concentre sur la création d'une API RESTful en utilisant Node.js et Express pour un examen OpenClassrooms. L'API comprend une authentification robuste, une intégration de base de données avec MongoDB, et des opérations CRUD complètes. Les outils de sécurité incluent Bcrypt, Crypto-js, Helmet, Jsonwebtoken, et Password-validator, ainsi que Mongoose, Dotenv, Multer, Mongoose-unique-validator, et Validator. L'API s'intègre parfaitement avec le frontend Angular fourni, démontrant des compétences essentielles en développement web et en sécurité. [More Details](/.docs)

## <br /> <a name="tech-stack">⚙️ Tech Stack</a>

- **Angular** is a comprehensive framework for building web applications that can range from single-page applications (SPAs) to multi-page applications (MPAs). Developed by Google, Angular provides a powerful set of tools for building dynamic, scalable, and maintainable applications. It features robust client-side routing, two-way data binding, and a modular architecture that supports component-based development. Angular also supports server-side rendering through Angular Universal, enhancing performance and SEO. Its capabilities make it suitable for a wide range of web application scenarios beyond just SPAs.

- **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript on the server side, enabling the creation of scalable and high-performance applications. Node.js's non-blocking, event-driven architecture makes it particularly suitable for building real-time, data-intensive applications.

- **Express** is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating RESTful APIs by providing a thin layer of fundamental web application features, including routing, middleware support, and HTTP utilities.

- **REST API** (Representational State Transfer Application Programming Interface) is a specific type of API that adheres to the principles of REST, an architectural style for designing networked applications. REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, which are typically represented in JSON or XML format. REST APIs are stateless, meaning each request from a client to the server must contain all the information needed to understand and process the request. This approach simplifies the interactions between client and server and ensures scalability and performance.

- **MongoDB** is a NoSQL database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance, making it suitable for applications that handle large volumes of data. MongoDB's document model allows for easy data manipulation and querying, providing a more natural way to work with data compared to traditional relational databases.

- **Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model application data, ensuring data consistency and providing powerful tools for querying and validation. Mongoose simplifies the process of interacting with MongoDB by providing a higher abstraction layer.

- **NPM** (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies in their projects. NPM provides access to a vast repository of open-source packages, facilitating the rapid development and integration of new features.

- **Bcrypt** is a library for hashing passwords in a secure manner. It uses a salt to protect against rainbow table attacks and employs a computationally intensive hashing algorithm, making brute-force attacks impractical. Bcrypt ensures that passwords are stored securely, enhancing the overall security of an application.

- **Crypto-js** is a cryptography library in JavaScript that provides various cryptographic algorithms, such as hashing, encryption, and decryption. It is used to secure data, ensuring its integrity and confidentiality. Crypto-js is commonly used for encrypting sensitive information before storing or transmitting it.

- **Dotenv** is a module that loads environment variables from a .env file into process.env. This practice helps manage configuration and secrets in Node.js applications, keeping them out of the source code and making it easier to change settings without modifying the application code.

- **Helmet** is a middleware for Express applications that helps secure apps by setting various HTTP headers. It mitigates common web vulnerabilities such as cross-site scripting (XSS), clickjacking, and other web attacks by configuring appropriate security-related HTTP headers.

- **Jsonwebtoken** (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and information exchange in web applications, allowing secure and verifiable transfer of information. JWTs are often used for implementing stateless authentication mechanisms.

- **Mongoose-unique-validator** is a plugin for Mongoose that adds pre-save validation for unique fields within a Mongoose schema. It simplifies the enforcement of uniqueness constraints in MongoDB documents, ensuring that certain fields, such as usernames or email addresses, remain unique.

- **Multer** is a middleware for handling multipart/form-data, which is primarily used for uploading files. It simplifies the process of handling file uploads in an Express application by providing various options for storage and file handling, making it easy to manage file uploads.

- **Password-validator** is a library for validating password strength and compliance with defined rules. It helps enforce security policies by ensuring passwords meet specific criteria, such as length, complexity, and character variety. This enhances the security of user accounts by promoting the use of strong passwords.

- **Validator** is a library for string validation and sanitization. It provides a set of functions for validating and sanitizing strings, helping ensure data integrity and security in web applications. Validator is commonly used for validating user input, ensuring that it meets the expected format and constraints.

## <br/> <a name="features">📝 Features</a>

👉 RESTful API Development: The project includes a robust RESTful API built with Node.js and Express. It supports standard HTTP methods (GET, POST, PUT, DELETE) for interacting with resources, enabling seamless CRUD operations.

👉 Secure Data Storage: Data is securely stored using MongoDB with Mongoose. Passwords are hashed with Bcrypt, and sensitive information is encrypted using Crypto-js, ensuring data protection and confidentiality.

👉 Compliance and Data Protection: The project implements a logical data model that adheres to regulatory standards. Data is validated and sanitized to meet security and compliance requirements.

👉 Authentication and Authorization: Secure authentication is handled through Jsonwebtoken (JWT), providing a robust mechanism for verifying user identity and managing access to resources.

👉 Enhanced Security Measures: The application uses Helmet to set security-focused HTTP headers, protecting against common web vulnerabilities. File uploads are managed securely with Multer.

👉 Environment Management: Configuration and sensitive information are managed using Dotenv, keeping environment variables and secrets out of the source code.

👉 Unique Data Validation: Ensures uniqueness of data fields using Mongoose-unique-validator, preventing duplicate entries in the database.

👉 Integration with Angular Frontend: The backend API integrates smoothly with the provided Angular frontend, facilitating dynamic and interactive user experiences.

👉 Comprehensive Error Handling: Implements thorough error handling and logging mechanisms to track and resolve issues effectively.

👉 Testing and Validation: Includes testing processes to ensure the reliability and correctness of the API functionality.

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

Let's install the project dependencies for both the client and server, from your terminal, run:

```bash
# Navigate to the client directory
cd client

# Install the necessary dependencies for the client-side application
npm install
# or
yarn install

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Install the necessary dependencies for the server-side application
npm install
# or
yarn install
```

If you encounter any issues while installing the client dependencies, please refer to the [help file](/.docs/04%20How%20to%20fix%20front%20repo.pdf).

<br/>**Set Up Environment Variables**

Create a new file named `.env` inside the server folder and add the following content:

```env
# MongoDB: https://cloud.mongodb.com
DB_USERNAME=
DB_PASSWORD=
DB_CLUSTER=
DATABASE=

# Json-Web-Token: https://jwt.io
JWT_KEY=
(Generate new key)

# Crypto-JS: https://cryptojs.gitbook.io
CRYPTOJS_KEY=
(Generate new key)
```

Replace the placeholder values with your actual respective account credentials:

- [MongoDB](https://cloud.mongodb.com)

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
# Navigate to the client directory
cd client

# Start client
npm start
# or
yarn start

# Navigate back to the root directory
cd ..

# Navigate to the server directory
cd server

# Start server
npm start
# or
yarn start
```

- Client running on [`http://localhost:4200`](http://localhost:4200)
- Server running on [`http://localhost:3000`](http://localhost:3000)
