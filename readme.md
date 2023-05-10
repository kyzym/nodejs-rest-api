# Node.js Backend REST API

![Node.js](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-404D59?style=flat-square)
![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb)
![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker)

This is a server-side application built with Node.js, providing user authentication and contact management functionality. The app utilizes Express for server creation, MongoDB for data storage, and various middlewares for request validation, error handling, routing, and authentication.

## Features

- User Authentication:
  - Registration (`POST /signup`)
  - Registration confirmation (`GET /verify/:verificationCode`)
  - Resending of confirmation email (`POST /verify/`)
  - Login (`POST /login`)
  - Logout (`GET /logout`)
  - Retrieval of current user's data (`GET /current`)
  - User subscription update (`PATCH /`)
  - User avatar upload (`PATCH /avatars`)

- Contact Management:
  - Retrieval of all contacts (`GET /`)
  - Retrieval of specific contact info (`GET /:id`)
  - Adding of new contact (`POST /`)
  - Updating of contact info (`PUT /:id`)
  - Contact deletion (`DELETE /:id`)
  - Updating of contact's 'favorite' status (`PATCH /:id/favorite`)

## Technologies & Tools

- ![Node.js](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white) and ![Express.js](https://img.shields.io/badge/-Express.js-404D59?style=flat-square) for server creation and request routing.
- ![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb) for user and contact data storage.
- ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) for data schema creation and database interaction.
- Request validation using Joi and custom middleware.
- User authentication and token handling using JWT.
- Image upload and user avatar update using Multer.
- Email sending for user registration confirmation using Nodemailer.
- Request logging using Morgan.
- Cross-Origin Resource Sharing (CORS) enabled using the cors package.
- Environment variable handling using dotenv.
- ![Docker](https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker) for containerization and easy deployment.

## Scripts

- `npm run start` - starts the production server
- `npm run start:dev` - starts the development server with hot-reloading
