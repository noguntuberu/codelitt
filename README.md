# CODELITT CALENDAR

The goal of this exercise is to create a demo calendar application using React.

### Features & Requirements:

* You need to use one of the following state management libraries: Relay, Apollo, MobX or Redux
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a color when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & color.
* Ability to delete reminders.
* Expand the calendar to support more than the current month.

### GET STARTED
1. visit [Open Site](https://xenodochial-bhaskara-6891ac.netlify.app/)

OR

1. clone the repository: `git glone https://gitlab.com/codelittinc/react-interview-project-nathan-oguntuberu.git`.
2. cd into app folder.
3. install dependencies `yarn install`.

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### Areas of Improvements
1. The code on `Calendar` could be made more modular.
2. Reminder creation/edit would be a modal.