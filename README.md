# BlogsiteAPI

A robust API for managing blog posts and user authentication. 
This project also includes a frontend to interact with the API servers, making it a full-stack application.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

BlogsiteAPI is a comprehensive solution for managing blog posts and users. It provides a secure and efficient way to handle user authentication and CRUD operations for blog posts.
The project also includes a frontend application that calls the API servers to interact with the endpoints, making it a complete full-stack application.

## Features

- User authentication and authorization
- CRUD operations for blog posts
- Secure password handling
- JSON-based API
- Frontend for interacting with the API

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **PostgreSQL**: Relational database management system
- **pgAdmin**: Database management tool for PostgreSQL
- **Sequelize**: ORM for SQL databases
- **JWT**: JSON Web Tokens for authentication
- **EJS**: Embedded JavaScript templating for the frontend

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mihir2004/BlogsiteAPI.git
   cd BlogsiteAPI
2. Install Dependencies: 
    ```bash
    npm install
3. Set up PostgreSQL
- Ensure PostgreSQL is installed and running on your machine.
- Create a new database named `blogsite`.
4. Set up environment variables. Create a `.env` file in the root directory and add the following:
  ```makefile
  PORT=3000
  DATABASE_URL=postgres://username:password@localhost:5432/blogsite
  JWT_SECRET=your_jwt_secret
  ```
5. Start the Server:
   ```bash
   npm start
   ```
## Usage
After starting the server, the API will be available at http://localhost:3000. You can use tools like Postman to test the endpoints.

## API Endpoints

### User Authentication

- **Register**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`

### Blog Posts

- **Create Post**: `POST /api/posts`
- **Get All Posts**: `GET /api/posts`
- **Get Single Post**: `GET /api/posts/:id`
- **Update Post**: `PUT /api/posts/:id`
- **Delete Post**: `DELETE /api/posts/:id`

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to [mihir2004](https://github.com/mihir2004).

```arduino

Feel free to adjust this template based on the specific details and features of your project.


