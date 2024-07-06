## Product CRUD Application

This application provides a basic **CRUD (Create, Read, Update, Delete)** interface for managing products in a database. Built with Node.js, Express, Knex.js, and MySQL, it offers a RESTful API for seamless data interaction.

## Table of Contents

- [Project Screenshots](#project-screenshots) 
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running Migrations](#running-migrations)
  - [Starting the Server](#starting-the-server)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)


## Project Screenshots

![Screenshot 2024-07-06 101917](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/506278ed-b604-4b04-bcb7-e8447ce05033)
![Screenshot 2024-07-06 101857](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/cbc9db85-9943-4d55-9ca2-096c890c4c59)
![Screenshot 2024-07-06 101800](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/1c09985f-e728-4449-8710-7c8eeeecd444)
![Screenshot 2024-07-06 101739](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/8c70f547-da58-4414-a6d9-b6e8a93f6a67)
![Screenshot 2024-07-06 101721](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/2e82e488-abb1-435f-95ec-f02af366c92d)
![Screenshot 2024-07-06 101656](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/3d53f5bf-1f12-4e9f-9145-9cd9e5e1851a)
![Screenshot 2024-07-06 101642](https://github.com/LuDevvv/node-mysql-crud/assets/107328372/7ee5224f-2383-43d0-b288-0458385903c2)


## Features

- **CRUD Operations:**  Create, read, update, and delete product entries.
- **Secure Database Integration:** Leverages Knex.js for robust interaction with a MySQL database.
- **RESTful API:**  Well-defined endpoints for managing product data. 

## Setup

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js and Node Package Manager installed.
- **MySQL Server:** A running instance of MySQL is required.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/product-crud.git 
   ```

2. **Navigate to the project directory:**

   ```bash
   cd product-crud
   ```

3. **Install project dependencies:**

   ```bash
   npm install
   ```

### Configuration

1. **Create a `.env` file:**  Duplicate the `.env.example` file in the root directory and rename it to `.env`.
2. **Update database credentials:** Open the `.env` file and replace the placeholders with your MySQL connection details:

   ```
   DB_HOST=localhost
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

   Ensure your MySQL server is running and accessible with these credentials.

## Usage

### Running Migrations

Set up the database schema and tables using Knex.js migrations:

```bash
npx knex migrate:latest
```

### Starting the Server

Launch the application server:

```bash
npm start
```

The server will start at `http://localhost:3000`.

## Endpoints

The API provides the following endpoints for interacting with product data:

| Method | Endpoint            | Description                     |
| :----- | :----------------- | :------------------------------ |
| GET    | `/products`         | Get all products.               |
| GET    | `/products/:id`      | Get a single product by ID.     |
| POST   | `/products`         | Create a new product.          |
| PUT    | `/products/:id`      | Update an existing product.      |
| DELETE | `/products/:id`      | Delete a product by ID.         |

**Note:** Replace `:id` with the actual ID of the product you want to access.

For instance:

- **Product Listing:**
  ![Product Listing](/path/to/product-listing.png)
- **Product Details:**
  ![Product Details](/path/to/product-details.png)
- **Creating/Updating a Product:**
  ![Product Form](/path/to/product-form.png) 

Remember to replace `/path/to/` with the actual paths to your image files.

## Contributing

Contributions are welcome!  Fork the project, make your changes, and submit a pull request. 

## License

This project is licensed under the MIT License. See the `LICENSE` file for details. 
