
import { HttpHeaders } from '@angular/common/http';
export const environment = {
  
  production: true,
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
