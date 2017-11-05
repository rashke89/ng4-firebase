// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // firebase obj
  firebase: {
    apiKey: 'AIzaSyBE7HcGF2Z3EaYDsZnjUSCpa8tjLBIm3ec',
    authDomain: 'ng4-fs.firebaseapp.com',
    databaseURL: 'https://ng4-fs.firebaseio.com',
    projectId: 'ng4-fs',
    storageBucket: 'ng4-fs.appspot.com',
    messagingSenderId: '843124376530'
  }
};
