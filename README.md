# Happy pet

Happy Pet is a service for keeping your pet when you are going on the trip or not at home for a long time. and it provides services to your Pet.

## Table of contents:

- **[Data base](#database)**
- **[Endpoints](#endpoints)**
- **[Technologies used](#technologies-used)**

## Data base

Diagram of data models:

## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Test if your server is running      | none                  | no   |
| POST   | '/echo'                    | Test POST requests                  | none                  | no   |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password       | no   |
| GET    | '/me'                      | Get information of this user        | none                  | yes  |
| POST   | '/authorized_post_request' | Test POST requests (token required) | none                  | yes  |

## Technologies used

Express
REST API
PostgreSQL, Sequelize ORM
