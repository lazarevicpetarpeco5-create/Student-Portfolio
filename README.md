# Petar — Student Portfolio Website

A personal developer portfolio website built as a learning project and portfolio piece.

The goal of this project is to build a small full-stack web application while understanding how the different parts communicate with each other instead of relying on pre-built templates.

## Project Goals

* Build a personal portfolio website
* Learn React and modern frontend development
* Build a backend API with Python and FastAPI
* Learn REST-style API design
* Work with HTTP and JSON
* Store project information in a SQL database
* Connect the frontend, backend, and database together
* Keep the project simple enough to understand and expand later

## Planned Technology Stack

### Frontend

* React
* HTML
* CSS
* JavaScript

### Backend

* Python
* FastAPI
* Uvicorn

### Data

* SQL
* SQLite

### Development

* Git
* GitHub
* Python virtual environment (`venv`)

## Planned Architecture

```text
React / HTML / CSS
        |
        | HTTP / JSON
        v
   FastAPI API
        |
        | SQL
        v
 SQLite Database
```

The frontend will request data from the FastAPI backend through HTTP.
The backend will retrieve and manage data from the SQL database and return the results as JSON.

## Current Status

🚧 Project initialization

The basic project structure and Python backend environment have been created.

Next steps:

1. Create the first FastAPI application
2. Create a simple API endpoint
3. Run the application with Uvicorn
4. Create the React frontend
5. Connect React to the FastAPI API
6. Add the SQL database
7. Load project information dynamically
8. Build the portfolio interface

## Projects

The portfolio will eventually showcase projects such as:

* ChatServer — C++ networking project
* SmartDeal — Python/PySide6 AI assistant
* Village Wars — C/Raylib game project

More projects will be added as the portfolio develops.

## Purpose

This project is primarily a learning project, but it is also intended to become a real personal portfolio that can be used when applying for student programming and IT positions.
