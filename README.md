# Node JS school project <!-- omit in toc -->

A simple blog application using Node.js, express, react, a self-signed certificate for https and a simple Model View Controller architecture for the server.

# Table of Content <!-- omit in toc -->

- [1. Installation](#1-installation)
- [2. Assignment](#2-assignment)
  - [2.1. Setup of the Project](#21-setup-of-the-project)
  - [2.2. Administrator User](#22-administrator-user)
  - [2.3. Blog Post](#23-blog-post)
  - [2.4. Backend API](#24-backend-api)
  - [2.5. Frontend](#25-frontend)
  - [2.6. Testing/Error Handling](#26-testingerror-handling)
  - [2.7. Documentation](#27-documentation)
  - [3. Requirements](#3-requirements)
  - [4. Extra Task (optional)](#4-extra-task-optional)
- [5. Process](#5-process)
  - [5.1. Design](#51-design)
  - [5.2. Architecture](#52-architecture)

# 1. Installation

1. cd into the root folder (/blog)
2. Install the dependencies of the client and the server at the same time with

```bash
npm run install
```

3. Build the react app and start the node server with

```bash
npm run deploy
```

4. Enjoy on https://localhost:8000

# 2. Assignment

You are to develop the backend for a simple blog application using Node.js. This blog should have an admin function that can create new blog posts. Here is a detailed description of the task:

## 2.1. Setup of the Project

- Create a new Node.js application.
- Create necessary folders and files for the project.
- Should be set up with NPM with a name and description that describes the application.

## 2.2. Administrator User

- Create an administrator user for the blog.
- You can store the user's information in a JSON file or a variable in your code.
- The administrator user should have a username and password, use the following account information:
  - Username: Admin
  - Password: Gokstad2023

## 2.3. Blog Post

- Create a simple structure for blog posts.
- Create a JSON file or another storage method to keep track of blog posts.

## 2.4. Backend API

Create the necessary endpoints for the following functionalities:

- For posting of blog posts:
  - GET .../api/blogginnlegg: This endpoint should retrieve all blog posts and return them as JSON data.
  - POST .../api/blogginnlegg: This endpoint should allow the administrator to create new blog posts by sending the content of the new post as JSON data in the request.
    Each blog post should contain:
    - ID
    - Title
    - Content
    - Date created
- For administrator login:
  - POST .../api/login: This endpoint should accept a username and password as JSON data in the request, validate the login, and save a cookie or session if the login is successful. This information should be used to ensure that it is the administrator creating the posts.

## 2.5. Frontend

- Create a simple frontend that displays all blog posts.
- Design is not a requirement here.
- Add login functionality for the administrator user.
- Create a form to create new blog posts, but this functionality should only be available when the administrator is logged in.

## 2.6. Testing/Error Handling

- Test the application to ensure that all functionalities work as expected.
- Make sure you thoroughly test the login and access control.
- Ensure that the endpoints are as they should be.
- Use error handling where you think it's appropriate.

## 2.7. Documentation

- Write documentation for your backend API, including a description of endpoints and how they are used.

## 3. Requirements

- Use Node.js as the server environment.
- Use express to create the API and the frontend.
- Make sure your code is well structured and readable.
- Use GIT for version control, and share the code with a README file that explains how to set up and run the project.
- Upload the assignment to GitHub, make sure the repo is "private" and add "eskjelbred" as a collaborator.
- Add the link to the Github repo in your submission on Itslearning.

## 4. Extra Task (optional)

If you wish, you can add additional functionality, such as editing and deleting blog posts, user management with different types of users, or a better storage method for blog posts.

- PUT .../api/blogginnlegg/:id: This endpoint can be used to update existing blog posts (e.g., for editing).
  - If you choose to update a post, the "date modified" should be added to the JSON file for "POST .../api/blogginnlegg".
- DELETE .../api/blogginnlegg/:id: This endpoint can be used to delete existing blog posts.

# 5. Process

## 5.1. Design

I started drawing a mockup in Figma. This helped me to get a better overview of the project and how I wanted it to look like, as well as planning the features I needed to include.

For example, I could see that I needed to have in my frontend a state for the currentUser, which would be used by:

1. The header component to display the login logout
2. By the blogposts component to add a delete/edit buttons next to each posts.

I could then take a decision of how this state had to be passed down to the different components (here I decided to use the Context api to be able to pass it anywhere without prop drilling).

I could also see that when I would get the response from the backend whether the credentials matched or not, I would then need to update the state of the currentUser, and redirect the user to the blogposts page if the credentials matched, or display an error message if they didn't.

![Mockup](https://i.ibb.co/SPd7kYs/Screenshot-2023-10-03-at-09-21-55.png)

## 5.2. Architecture

0. The server is using a simple MVC architecture, with for each route: a router, a controller and a model for each resource (user and blogpost). The model is using a simple json file to store the data. The controller is using the model to get the data and manipulate it. The router is using the controller to set the right CRUD operation for the route, with the appropriate controller function.
1. server.js: The entry point of the server, it starts the server on https using a self-signed certificate created with mkcert.
2. app.js: sets up the middleware, the routes and injects the frontend.

