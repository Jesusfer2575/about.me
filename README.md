Hi!
Here you will find all the instructions needed for this little challenge

The idea of this challenge is to proof some very basics skills about JavaScript and React

## Instructions

Here you will have an environment and all you need to run your app and you component

1. First of all you need to create a whole new component (class or function it's up to you!)
2. You have to show some data on the component USING JSX
3. The data you need to show is on the file **mock-pokedata.js** as a Js file
4. Inside of the mock-pokedata.js file you will find an object **(mockPokemonData)** which contains the information related to that pokemon (the name of the pokemon and two links to the pokemon images) also a string which is a link to a YouTube (charizard) video (and that info is based on the public PokeAPI which you can see with more detail [here]: https://pokeapi.co/)
5. You need to render on you component the name of the pokemon
6. You need to render the images of the pokemon so you have to use the <img src= ...> tag to show it
7. Finally you need to create a link to the Pokemon's video so when you click it, redirects you to the video on YouTube
8. This component you build should be render on the App.jsx component (passed as a children)
9. The component you create must live on the PokeCard.jsx component


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Steps to setup Material UI with React + Typescript

1) npm install @material-ui/core @material-ui/icons --save
2) npm install @types/material-ui @types/react-tap-event-plugin --save-dev
