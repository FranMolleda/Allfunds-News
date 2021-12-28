# Allfunds-News

## Project description

Create a prototype of app which provides information about News to users. 

## Frontend App:

### Tecnologies

-React
-Bootstrap

### Description

Use Angular / React to build Frontend app. This app is just prototype so it is not necessary to create any custom design, just use Bootstrap framework or whatever you want.

Frontend application communicate only with database (MongoDB) 

### Frontend application contains 2 views: 

### New 

· All new News are displayed vertically one under the other, ordered by their date of  storage 

· Every News has button “Archive” -> News is moved after click to “Archived” view 
and is not shown at “New” view anymore 

· When a new News item is added into DB, Frontend application will update the list of News

### Archived 

· All archived News are displayed one under the other ordered by their date of  archive 

· Each News item has a “Remove” button → News is removed after click from  “Archived” view and is not shown at “Archived” or “New” views anymore



## Backend App:

### Tecnologies

· Node.js / Express 
· MongoDB 


### Description

Use Node.js to build Backend application. 
Backend application is responsible for 2 basic functionalities: 

1. Get data from provider – get data from MongoDB 
2. Save data into MongoDB 


## Database 

### Tecnologies

· JSON 
· MongoDB 

### Description

Use MongoDB to store and get all documents for Frontend application. Documents must have: title, description, date, content, author, archiveDate.



# Getting Started Server Node.js

Clone this repository: https://github.com/FranMolleda/Allfunds-News.git

Instal all dependies: `npm install` 

## Available Scripts

In the project directory/server, you can run:

### `nodemon`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory/client, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
