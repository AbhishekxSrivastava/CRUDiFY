
# CRUDify

**CRUDify** is a simple server application developed to learn and implement Node.js and Express effectively. It showcases the core CRUD operations—Create, Read, Update, and Delete—using a combination of Express, Node.js, and MongoDB.

## Project Overview and Goals

This project aims to establish a structured server setup in Node.js that connects to a MongoDB database for managing user data. CRUDify's primary goal is to provide a practical example of handling HTTP requests (GET, POST, PUT, DELETE) while maintaining clean, professional code with modular organization.

## Technologies Used

- **Node.js**: Builds the server and manages backend logic.
- **Express**: A web framework for Node.js to simplify server setup and route management.
- **MongoDB**: A NoSQL database used to store and manage user data for CRUD operations.

## Key Features

1. **Basic Server Structure**: Initializes the server with essential modules, sets up Express, and defines a PORT number.
2. **MongoDB Integration**: Connects the server to MongoDB to handle user data effectively.
3. **CRUD Operations**: Implements Create, Read, Update, and Delete functions for managing user data.
4. **Authorization Middleware**: Adds middleware to authorize access to specific routes.
5. **Logging Middleware**: Records each request into a log file (`log.txt`) for debugging and historical tracking.
6. **Modular Routes**: Uses Express routing to organize CRUD operations for a cleaner codebase.

## Project Structure

CRUDify follows the **MVC (Model-View-Controller)** architecture, making the application scalable and easy to maintain.

## Project Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Set up MongoDB locally or use a cloud database like MongoDB Atlas.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbhishekxSrivastava/CRUDify.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd CRUDify
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

### Running the Server

1. **Start the MongoDB server** (if using a local instance).
2. **Run the project**:
   ```bash
   npm start
   ```
3. The server will now be running at `http://localhost:<PORT>`.


## API Usage

- **GET** `/users`: Fetches all users.
- **GET** `/users/:id`: Fetches a user by ID.
- **POST** `/users`: Creates a new user.
- **PUT** `/users/:id`: Updates details of a specific user.
- **DELETE** `/users/:id`: Deletes a specific user.

