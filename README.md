# IT2810 - Project 2 - Group 16
This is a project for the course Web Development (IT2810) at NTNU, fall 2019.

The project can be found [here](http://it2810-16.idi.ntnu.no/prosjekt2/)

## Contributors
*  [Kim André Midtlid](https://github.com/kamidtli)
*  [Eirik Sture](https://github.com/eirsture)
*  [Sebastian Aas](https://github.com/SebastianAas)

# Documentation

## Functionality

The user can choose between 3 categories of pictures, text and sound. Based on these choices, 4 combinations will be generated and are available in the different tabs. The first exhibition is randomly generated based on the initial categories, unless a combination has been stored locally. The exhibition updates dynamically when changing categories.

## Technology

### React
The solution uses React with classes and functional components implemented with the JSX and ES6 syntax, and are implemented from scratch. No external libraries are used to do state handling. Simple components are made as stateless functions, while the more advanced components that need to store state and need various helper functions, are made as classes.

### Ajax
To fetch data we use Ajax in Javascript's built in function `fetch()`, where SVGs are read as XML and text as JSON. Media gets fetched when needed and is then saved locally at the client. If needed again, the data is read from the session storage and not fetched remotely to reduce network usage.

### HTML Web Storage
We use both sessionStorage and localStorage in our solution. sessionStorage is used to save the content of each tab, i.e. the data, and localStorage saves the last state so you can close the browser and reopen the page to get the same combination of categories and media.

### Responsive web design
The exhibition is responsive and scaled for laptops, tablet and mobile devices. Viewport is used to achieve full height and width, and CSS-grid is then used to group the different components. We use this solution combined with media queries to make it easy to change the layout dependent on the device size. We also use media queries to change between landscape and portrait format, and have breakpoints at 768px and 576px. The images scale appropriately to the screen size.

### Testing
We have used Jest as a framework for testing the webpage. Jest is a JavaScript Testing framework with a focus on simplicity. Jest has something called a snapshot test, which is a test that makes sure your UI doesn't change unexpectedly.
This works by taking a snapshot of the current code and then compares it to a later snapshot. 

We have used snapshot test for the buttonRow component, and Sidebar components. We have choosen to take snapshot test of the components, because it is important
to test the building blocks of the website. 

We have also tested the website on different devices and browsers. Both different sizes of computer screens and mobile devices, in landscape and portrait mode. The responsiveness of the website is behaving as we expect it to.

This is tested on devices such as:
*  iPhone X
*  iPhone 5/SE
*  iPhone 6/7/8
*  Pixel 2
*  Pixel 2 XL
*  iPad
*  iPad Pro

and the following browsers:
*  Google Chrome
*  Firefox
*  Microsoft Edge
*  Safari

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before you can run run the app you will need to download and install [Node.js and npm (node package manager).](https://www.npmjs.com/get-npm)


In the project directory after it is cloned and npm is installed, you can run:

### `npm install`

Installs all the dependencies needed for the project.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
