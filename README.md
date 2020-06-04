This project is a simple example of using Hooks, Context in React. I have used API communication with CRUD fascility to work with state and props in React.

React is one of the most declarative, efficient, and flexible JavaScript library for building user interfaces. React 16.8.0 is the first release to support Hooks. Hooks provide a more direct API to the React concepts you already know.With Hooks it is quite easy to use stateful logic between components. Context provides a way to pass data through the component tree without having to pass props down manually at every level. [More Details...](https://reactjs.org/docs/getting-started.html).

[![Hooks & Context](localhost:3000 "Hooks & Context")](https://iili.io/Je2ETQ.png "Hooks & Context")

## How to install

In the project directory, you install packages via:

 `npm install`

After that you can run the application via:

`npm run`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Backend Code

It's a basic SQLITE based express application for API communications. You can find the application here for testing. [backend server...](https://github.com/farhanasif/simple-node-sqlite) However, this projects main focus is to understand how multiple Context Provider and Hooks works in a React application. Thats why the backend code is pretty basic. You can always extend and practice from there. The backend server runs on  [http://localhost:8000](http://localhost:8000)

### General Discussion

I have used three Context Provider to show how multiple Context providers works together. These are: <br />
1. AuthContextProvider - for managing Auth toggle
2. ThemeContextProvider - for managing Theme toggle a bit
3. BookContextProvider - for managing books CRUD

This application has used Reducers to manage the Books states and operations. 
Basic **sweetalert2** Toasts used to provide more visibility in the application.

## Learn More

You can learn more in the [Context - React](https://reactjs.org/docs/context.html) link.

To learn React, check out the [React documentation](https://reactjs.org/).
