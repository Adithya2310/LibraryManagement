#### _**IMPORTANT NOTE**_ - 
This project has a mongoDB connection setup. You can Setup your own Server if you want to use in your local environment


## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `nodemon server.js` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `Images` - This folder holds images
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
    - #### `redux` - It has Reducers, Actions, Store.js to facilitate redux.

- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `middleware` - This acts as a middleware program to check for user authentication
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the the server app in development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view the server in the browser.

### `npm start` in client

The front end will uses react npm start in the client folder. Open [http://localhost:3000](http://localhost:3000) to view the client

Open [Front End](https://github.com/Adithya2310/LibraryManagementFrontEnd) to view the client part of the project