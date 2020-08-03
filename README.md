# This is a Covid19 App That Tracks Cases Daily using an API

## Technologies and Liraries Used in this Application.

1. The API used for fetching the data about Covid Statuses
    ..* [You Can Click here to check the API out](https://covid19.mathdro.id/api/ Covid19 API)

2. Material UI
    ..* Material UI is a google framework used to Provid us with JSX elements

3. react-chartjs-2
    ..* Chartjs is used for providing us with visualizations
    ..* In this Application I will only use Line and Bar Chart
    ..* Line Chart is used for visualizing the overal data
    ..* Bar Chart is used for Visualizing data of a specific country

4. Reactjs 
    ..* A facebook open soure framework for creating web app with reusable components
    ..* We will use both Class and functional base componts

## Hosting of the website

<strong>Firebase is used for hosting the website as single page application.</strong>

    ..* Firebase is a google cloud service that can be used for hosting ML application, Mobile App, Web Apps and more applications

#### Before we start with the project let me plug my personal portfolio
##### Check my portfolio here [Derrick Website](https://derrick-makhubedu.herokuapp.com/)

# Let us get started

Open the command line and ytpe the following:
**npx create-react-app __the name of you app__**
Go to the directory with : 
**cd __the name of you app__**
<h4>Remove src and re-create everything</h4>
I am doing this because the project is so small and we don't need most of the default settings react provides.

Create src folder and inside create two new files:
 index.js and App.js

#### Write this code inside index.js file that you just creared, it will start your react App

As we have imported App.js we need to write that file as well

```
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render (
    <App/>, document.getElementById('root')
)

```
#### The code below renders a component that we will see on the browser. This is the only class based component in our app.

it will just render __The App.. __ on the browser

```
import React from 'react'

class App extends React.Component {

    render(){
        return(
            <div><h1> The App..</h1></div>
        )
    }
}

export default App;

```

 Save the files

Run: **npm start** and the app will start

Now the project is running succesfully if you followed the steps as shown above. 

#### Lets take a different direction and talk about the structure of our files
All components will be housed inside the components directory which is inside src directory

##### Here is hierarchical structure view

--> src</br>
    ---> App.js</br>
    ---> index.js</br>
    --->components</br>
        ----> Cards</br>
            -----> Card.js</br>
            -----> Card.module.css</br>
        ----> Charts</br>
            -----> Chart.js</br>
            -----> Chart.module.css</br>
        ----> CountrySelector</br>
            -----> CountrySelector.js</br>
            -----> CounreySelector.module.css</br>
    ---> api</br>
        ----> index.js</br>

```

One thing to note here is that our css files are named differently with (.module), this is becaused all our components will contain their own css files and it will not be shared accross the App.

#### As you can see our api folder/directory is in the same directory as App and Components. This means we will make all API calls inside api directory to keep things clean

Now that we disused our structure lets get to coding this beautiful application.

Our Css setup for styling the website
For our app we will create a css file called App.module.css inside the src
```
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
}

:root {
    --ff-primary: 'Source Sans Pro', Sans-serif;
    --ff-secondary: 'Source Code Pro', monospace;
    --fw-reg: 300;
    --fw-bold: 900;
    --clr-light: #fff;
    --clr-dark: #303030;
    --clr-accesnt: #16e0bd;
    --fs-h1: 3rem;
    --fs-h2: 2.25rem;
    --fs-h3: 1.25rem;
    --fs-body: 1rem;
    --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, .25), 0.125em 0.125em 0.25em rgba(0, 0, 0, .15);
}

@media(min-width: 800px) {
     :root {
        --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.125rem;
    }
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

```

### Please note that i will not be putting all the code here. you can be free to check my code to see how i implemented everything.

We will be using bootstrap framework for styling as well.

## Installing bootstrap

__Clone the repo: git clone https://github.com/twbs/bootstrap.git__
__Install with npm: npm install bootstrap__
__Install with yarn: yarn add bootstrap@4.5.0__
__Install with Composer: composer require twbs/bootstrap:4.5.0__
__Install with NuGet: CSS: Install-Package bootstrap Sass: Install-Package bootstrap.sass__

## Installing material UI for styling as well.

npm install @material-ui/core --save

## Packages installed in this application

```
"dependencies": {
    "@material-ui/core": "^4.11.0", 
    "axios": "^0.19.2",
    "bootstrap": "^4.5.0",
    "chart.js": "^2.9.3",
    "classnames": "^2.2.6",
    "react": "^16.13.1",
    "react-chartjs-2": "^2.9.0",
    "react-countup": "^4.3.3",
  }
```





