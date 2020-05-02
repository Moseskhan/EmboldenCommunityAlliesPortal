// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: false,
  httpUrl: "http://app.emboldencommunityallies.com/public",
  firebase:{
    apiKey: "AIzaSyDAAMIGvm_fQSyT-uNxBvQJPMQfgPVXTNY",
    authDomain: "mednoctrainingcollege.firebaseapp.com",
    databaseURL: "https://mednoctrainingcollege.firebaseio.com",
    projectId: "mednoctrainingcollege",
    storageBucket: "mednoctrainingcollege.appspot.com",
    messagingSenderId: "378211712941"
  },
  headers: new HttpHeaders({
    
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa("careers@mednoc.com:vcP*#S9uKy&")
   
  }),
  rawFormHeader: new HttpHeaders({
    "Authorization": "Basic " + btoa("careers@mednoc.com:vcP*#S9uKy&")
  }),
};
