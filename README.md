# Deno API Project

A simple API built with Deno, featuring user authentication and balance checking functionality.

## Project Description

This project implements a basic API with two main routes:
- `/`: A welcome route
- `/balance`: A protected route that returns the user's balance after authentication

The API uses mock data for user credentials and balances, simulating a simple banking system.

## Prerequisites

- Deno 1.31.0 or later

## Installation

1. Clone the repository:
   ```
   git clone git@github.com:stevansehn/deno-api.git
   cd deno-api
   ```

2. No additional installation steps are required as Deno doesn't use a package manager!

## Running the Project

To start the server:

   ```
   deno run -A main.ts
   ```

The server will start on `http://localhost:3000`.

## Running Tests

To run the test suite:

   ```
   deno task test
   ```


## API Usage

- Welcome route: `GET /`
- Check balance: `GET /balance?username=<username>&authToken=<authToken>`

Example:

   ```
   curl -X GET "http://localhost:3000/balance?username=alice&authToken=pass123"
   ```


## Project Structure

- `main.ts`: Main server and route handling logic
- `mockData.ts`: Mock user and balance data
- `main_test.ts`: Test suite for the API

## License

[MIT License](LICENSE)