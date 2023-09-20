# PopX - User Management System
## Project Overview
PopX is a user management system that allows users to create accounts, log in, and manage their profiles. It was developed as a recruitment task for a company to demonstrate skills in web development, particularly with React and React Router.

The motivation behind this project was to showcase the ability to create a responsive web application with user authentication and data storage using local storage. PopX serves as a basic user management system that can be extended and integrated into more comprehensive applications.

### Deployment
You can view a live demo of PopX [Netlify Deployment URL](https://educasee.netlify.app).

### PopX Demo


https://github.com/VIDHI-tech/PopX/assets/120549998/90780479-6a75-4c6a-bc16-e236e06d40ff                 



https://github.com/VIDHI-tech/PopX/assets/120549998/a1333af1-4081-4e3e-bccd-382da9d09702



### Technologies Used
React
React Router
HTML/CSS
JavaScript

### Features
Data Control by using *React-router-dom* .
User registration with name, phone number, email, password, and company name (optional).
To save data used *Localstorage* .
User login with email and password.
Profile management, displaying user information.
Responsive design for both desktop and mobile devices.
Installation


## Usage
Access the PopX web application using your browser.

Firstly user see Landing page which has two Buttons:
1. To create an account, click the "Create Account" button on the landing page. Fill in the required information and click "Create Account" and data get stored in *localstorage*.

2. To log in, click the "Already Registered? Login" button on the landing page. Enter your email and password, then click "Login."

3. After logging in, you'll be redirected to the profile page, where you can view your user information.

## Additional Functionality

### Logout Button
PopX includes a user-friendly logout feature that allows users to securely log out of their accounts while preserving their account information for future use. When users click the "Logout" button, they are redirected to the landing page and can easily log back in with their existing credentials.

### Signout Button
In addition to the logout feature, PopX offers a "Signout" button. Unlike the traditional logout functionality, signout deletes the user's account data from local storage. It provides a way for users to completely remove their account from the application.

To use the signout feature, simply click the "Signout" button on the profile page. This action will clear your account data, and you will need to create a new account if you wish to use PopX again in the future.

I believe that offering both logout and signout options provides flexibility and choice to our users, ensuring their experience with PopX is as seamless as possible.


## To run PopX locally, follow these steps:

### Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/popx.git

### Navigate to the project folder:
bash
Copy code
cd popx

### Install dependencies:
bash
Copy code
npm install

### Start the development server:
bash
Copy code
npm start


## Contributing
PopX is an open-source project, and contributions are welcome! If you'd like to contribute, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test them thoroughly.
Submit a pull request with a clear description of your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions, feedback, or suggestions, please feel free to contact the project maintainer:

[My Email Address](vidhigaydhane27@gmail.com)
[My GitHub Profile](https://github.com/VIDHI-tech)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
