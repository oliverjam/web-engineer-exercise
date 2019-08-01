# Monzo Web Engineer exercise

## Running the app

**Clone the repository**

`git clone {REPOSITORY}`

**Install the required NPM packages**:

`npm install`

**Start the application**:

`npm start`

**Test the application**:

You will need to start the application first, then run `npm test` in a new terminal tab.

## Goals

There were a lot of missing features and tons of work I wanted to do, but given the 2 hour time-constraint I prioritised the minimum requirements.

-   [x] The user can log into the portal using email and password
-   [x] The user should go through the authentication process again when the token has expired
-   [x] The user can paginate through a list of “users” associated with an “app”
-   [ ] The user can list and update their “apps”
-   [x] Format code with Prettier
-   [x] Improve sign in accessibility

### Log in

This was already done

### Reauthenticate

I created a `ProtectedRoute` component that checks the authentication state and either renders the matching component for the current route or redirects to the sign in page.

I also dispatch a token validation action before fetching the apps or users data to ensure the token is always valid.

### Users pagination

I added a `page` URL param to the users route to keep track of what offset is required to fetch the right set of users.

### Update the apps

I unfortunately ran out of time before completing this goal. My plan was to render a form inline next to the corresponding app when the user clicked an "edit" button. This form would dispatch an action to update the app on submit.

### Formatting

I also set up Prettier to format the project at the beginning. This allowed me to automatically format my code as I went, without having tons of changes the first time I saved a file.

### Accessibility

I added labels to the sign in form inputs as placeholders are not always read by assistive technology. I also made both inputs `required` to help the user not submit the form in an invalid state.

## Further goals

My priorities after the minimum requirements would be:

1. Fix the dev server so it doesn't need to be restarted for every code change (this would speed up development a lot)
1. Add ESLint to catch mistakes during development
1. Style the application, probably with a library like Styled Components
1. Add a type system (probably Flow)
