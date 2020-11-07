import teamBuilderImage from "../assets/images/Team Builder.png";
import flickTheDeckImage from "../assets/images/Flick-The-Deck.png";

const projects = [
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
]

export default projects;