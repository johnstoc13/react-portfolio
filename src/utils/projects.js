import safeSpaceImage from "../assets/images/Safe Space.png";
import teamBuilderImage from "../assets/images/Team Builder.png";
import flickTheDeckImage from "../assets/images/Flick-The-Deck.png";
import budgetTrackerImage from "../assets/images/Budget Tracker.png";
import burgerBonanzaImage from "../assets/images/Burger Bonanza.png";
import teamGeneratorImage from "../assets/images/Employee Team Generator.png";
import weatherDashboardImage from "../assets/images/Weather-Dashboard.png";

const projects = [
    {
        name: "Safe Space",
        description: "Safe Space offers a unique platform that helps the LGBTQ community safely expand their orbit by connecting members with resources, businesses and community.",
        image: safeSpaceImage,
        techUsed: [
            "Angular",
            "Material IO",
            "Typescript",
            "SCSS/Animate.css",
            "Nest JS",
            "Auth0",
            "Heroku",
            "MongoDB/Mongoose",
            "RXJS",
            "Socket.IO"
        ],
        code: "https://github.com/johnstoc13/safe-space",
        application: "https://safe-space-ne.herokuapp.com/home",
    },
    {
        name: "Team Builder",
        description: "Due to the unprecedented shift to a remote workforce, it can be difficult for teams to create and maintain a cohesive bond. This group application aims to help build teams, foster creativity, and strengthen culture.",
        image: teamBuilderImage,
        techUsed: [
            "HTML/Bootstrap CSS",
            "Font Awesome/Mimic.css",
            "Express Handlebars",
            "jQuery/Auth0",
            "ExpressJS/Sessions",
            "File Stack",
            "Heroku",
            "MySQL/Sequelize",
            "Passport"
        ],
        code: "https://github.com/johnstoc13/the-team-builders",
        application: "https://the-team-builder.herokuapp.com/",
    },
    {
        name: "Flick The Deck",
        description: 'A team created application that combines "luck of the draw" with the common issue of not being able to pick a movie.',
        image: flickTheDeckImage,
        techUsed: [
            "HTML/CSS",
            "Foundation CSS",
            "Javascript/jQuery",
            "Animate.css",
            "MovieDB API",
            "Deck of Cards API"
        ],
        code: "https://github.com/johnstoc13/Flick-The-Deck",
        application: "https://johnstoc13.github.io/Flick-the-Deck/",
    },
    {
        name: "Budget Tracker",
        description: 'This application allows the user to track their budget and expenses! Inputs for deposits and expenses are tracked continuously, whether the user is online or offline. A great application for keeping track of expenses while on a vacation, or for holiday spending!',
        image: budgetTrackerImage,
        techUsed: [
            "HTML/CSS",
            "Javascript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Morgan",
            "Heroku"
        ],
        code: "https://github.com/johnstoc13/Budget-Tracker",
        application: "https://chases-budget-tracker.herokuapp.com/",
    },
    {
        name: "Burger Bonanza",
        description: 'This project is for all the burger lovers out there! The application allows the user to create and add burgers to a menu, where they can either eat or delete them. Yummm!',
        image: burgerBonanzaImage,
        techUsed: [
            "Bootstrap CSS",
            "Font Awesome",
            "Animate CSS",
            "Javascript/jQuery",
            "Node.js",
            "Express.js",
            "MySQL",
            "Handlebars",
            "Heroku"
        ],
        code: "https://github.com/johnstoc13/Burger-Bonanza",
        application: "https://chases-burger-bonanza.herokuapp.com/",
    },
    {
        name: "Employee Team Generator",
        description: 'This project is a command line application that generates a software engineering team profile web page.',
        image: teamGeneratorImage,
        techUsed: [
            "HTML/CSS",
            "Bootstrap CSS",
            "Javascript",
            "Node.js",
            "Inquirer.js"
        ],
        code: "https://github.com/johnstoc13/Employee-Team-Generator",
        application: "https://www.youtube.com/watch?v=CAHs9fGLbAE&feature=youtu.be",
    },
    {
        name: "Weather Dashboard",
        description: 'An application that gets the current weather for a selected city, along with a 5 day forecast. Also displays the most recent searches on the page, and will load the latest search upon page refresh.',
        image: weatherDashboardImage,
        techUsed: [
            "HTML/CSS",
            "Bootstrap CSS",
            "Javascript/jQuery",
            "Moment.js",
            "Font Awesome",
            "Open Weather Map API"
        ],
        code: "https://github.com/johnstoc13/Weather-Dashboard",
        application: "https://johnstoc13.github.io/Weather-Dashboard/",
    }
];

export default projects;