# PARKOUR - A Park Review App
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
PARKOUR stands for "People Around Rambunctious Kids Openly Utilizing Recreation." It's an app designed to help parents and caregivers easily find and give reviews about parks and playgrounds.

Once the user creates and account, they have the ability to write, edit and delete their own reviews. They can also comment on other reviews. If the user doesn’t want to make an account, they can still view park and playground reviews without the ability to comment or leave their own review.

View the deployed application at [https://parkour-review.herokuapp.com/](https://parkour-review.herokuapp.com/).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Future Developments](#future-developments)
- [License](#license)
- [Credits](#credits)

## Installation
In order to use this project, the user must have Node.js and MySQL installed on their local machine.

To clone the repository to the local machine, type `git clone git@github.com:KristyNerhaugen/playground-rating-app.git` in the command line interface.

This project requires several npm packages as listed in the [Technologies](#technologies) section below. First use `npm init -y` to initialize. Then use `npm install` to install the required packages.

## Usage
When the user visits the homepage of the app, they can view recent park reviews. When they click on a review, they can view the individual review and any comments.

![The app has a bright yellow header that says, "P.A.R.K.O.U.R. People Around Rambunctious Kids Openly Utilizing Recreation." The rest of the page is bright blue. Each review is in its own box with a white background. The individual review open for example is titled Strawberry Fields.](/public/assets/screenshot-1.png)

When the user taps the Login/Sign Up button, they are prompted to either log in to their account or sign up for an account.

![Now the app has a box on the left for logging in. The box on the right prompts the user to sign up to leave a review.](/public/assets/screenshot-2.png)

When the user signs up or logs in to their account, they are brought to their user dashboard which has a form that they can fill out to leave a review. It also lists the reviews that they have currently posted. When the user clicks the "Edit Review" button on one of their own reviews, they can edit the review, delete it or leave a comment.

![The screenshot on the left shows the user dashboard. A simple form with the fields "Park Name, Location, and Review" are listed for the user to fill out. The screenshot on the right shows an edit page for one of the user's posts.](/public/assets/screenshot-3.png)

While the user is logged in, they can go to the app's homepage to see recent reviews. When they click into an individual review, the user is able to comment on a review posted by another user.

![The screen shows a review for Forest River Park. There is a comment box below the review and three comments already posted.](/public/assets/screenshot-4.png)

## Technologies
- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Express.js](https://expressjs.com/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- JavaScript
- [JawsDB](https://elements.heroku.com/addons/jawsdb)
- [jest](https://www.npmjs.com/package/jest)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Node.js](https://nodejs.dev/)
- [PostCSS](https://www.npmjs.com/package/postcss)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)

## Future Developments
- Add a star rating system to make positive and negative reviews easier to see at a glance.
- Integrate a map or a list of locations for users to choose from.
- Implement an average rating system for parks that have more than one review. 
- Include feature tags like "picnic area," "restrooms," "beach," etc.
- Connect the app with [playgroundsafety.org](https://playgroundsafety.org/) so that the user can easily submit a safety report if a park/playground is in need of attention.
- Incorporate a social feature that allows users to plan playground meetups through the application.

## License
&copy; 2022 by Angela Gustafson, Joseph Kurpierz, Kristy Nerhaugen, Kayla Backus
![GitHub profile photos for the four contributors.](https://contrib.rocks/image?repo=KristyNerhaugen/playground-rating-app)

This project is licensed under the MIT license.

[License: MIT License](https://opensource.org/licenses/MIT)

## Credits
Balasa, S. [Thirus]. (2021, January 10). Install Tailwind CSS as a PostCSS Plugin (Version 2.0) [Video]. YouTube. [https://youtu.be/hvm5-EGe3fU](https://youtu.be/hvm5-EGe3fU)

Boot Camp Modules 13 and 14

*Tailwind CSS.* (n.d.) Tailwind CSS. Retrieved August 7-8, 2022, from [https://tailwindcss.com/](https://tailwindcss.com/)