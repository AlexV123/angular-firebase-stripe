// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  production: false,
  firebase: {
    apiKey: "AIzaSyCrsR1B5AlRgn8cmrYGyvjwQxEZfv6kd58",
    authDomain: "angular-firebase-stripe-52e46.firebaseapp.com",
    databaseURL: "https://angular-firebase-stripe-52e46.firebaseio.com",
    projectId: "angular-firebase-stripe-52e46",
    storageBucket: "angular-firebase-stripe-52e46.appspot.com",
    messagingSenderId: "282099974369"
  },

  functionsURL: 'https://us-central1-stripe-elements.cloudfunctions.net',
  stripePublishable: 'pk_test_m3a5moXVKgThpdfwzKILvnbG'

};
