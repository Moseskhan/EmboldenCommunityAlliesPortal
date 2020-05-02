import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage, initializeApp } from "firebase"
@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }
postJobs(job){
return this.http.post(environment.httpUrl+"/api/postjob",job, {headers: environment.headers})
}
getAllJobs(){
  return this.http.get(environment.httpUrl+'/api/getjobs',{headers: environment.headers} )
}
getSingleJob(jobID){
  return this.http.get(environment.httpUrl+'/api/getjobs/'+jobID,{headers: environment.headers} )
}
getRecentJobs(){
  return this.http.get(environment.httpUrl+'/api/getrecentjobs',{headers: environment.headers} )
}
removeJob(jobID){
  return this.http.get(environment.httpUrl+'/api/deletejobs/'+jobID,{headers: environment.headers} )
}
searchJobs(search){
  return this.http.post(environment.httpUrl+"/api/searchjobs",search, {headers: environment.headers})
}
postSummary(postSummary){
  return this.http.post(environment.httpUrl+"/api/proffessionalsummary",postSummary, {headers: environment.headers})
}
getProfessionalSummary(userID){
  return this.http.get(environment.httpUrl+'/api/proffessionalsummary/'+userID,{headers: environment.headers} )
}
postWorkExperience(experience){
  return this.http.post(environment.httpUrl+"/api/workexperience",experience, {headers: environment.headers})
}
getWorkExperience(userID){
  return this.http.get(environment.httpUrl+'/api/workexperience/'+userID,{headers: environment.headers} )
}
deleteWorkExperience(id){
  return this.http.delete(environment.httpUrl+'/api/workexperience/'+id,{headers: environment.headers} )
}
postCertification(certification){
  return this.http.post(environment.httpUrl+"/api/certifications",certification, {headers: environment.headers})
}
getCertifications(userID){
  return this.http.get(environment.httpUrl+'/api/certifications/'+userID,{headers: environment.headers} )
}
deleteCertification(id){
  return this.http.delete(environment.httpUrl+'/api/certifications/'+id,{headers: environment.headers} )
}
getProfilePic(userID){
  return this.http.get(environment.httpUrl+'/api/userprofilepic/'+userID, {headers: environment.headers })
}
postJobApplication(jobApplication){
  return this.http.post(environment.httpUrl+"/api/jobapplication",jobApplication, {headers: environment.headers})
}
getJobApplications(userID){
  return this.http.get(environment.httpUrl+'/api/jobapplications/'+userID, {headers: environment.headers })
}
getSingleApplicationInfo(applicationID){
  return this.http.get(environment.httpUrl+'/api/singleapplication/'+applicationID, {headers: environment.headers })
}
getHirerApplications(userID){
  return this.http.get(environment.httpUrl+'/api/hirerapplications/'+userID,{headers: environment.headers})
}
getUserPosts(userID){
  return this.http.get(environment.httpUrl+'/api/userJobs/'+userID,{headers: environment.headers})
}
sendMessage(message){
  return this.http.post(environment.httpUrl+"/api/hirer/sendmessage",message, {headers: environment.headers})
}
applyJob(jobApplication){
  return this.http.post(environment.httpUrl+"/api/jobs/apply",jobApplication, {headers: environment.headers})
}
sendContactInfo(contactInfo){
  return this.http.post(environment.httpUrl+"/api/contact",contactInfo, {headers: environment.headers})
}
getAllStaticApplications(){
  return this.http.get(environment.httpUrl+'/api/jobs/static/applications',{headers: environment.headers})
}
uploadFiles(file){
  let userID="applications";
  let storageRef = storage().ref();
  let fileName=this.getTicks();
  let firebaseFileUrl= `${userID}/${fileName}`;
  let uploadTask = storageRef.child(firebaseFileUrl).put(file);
  return uploadTask;
}
getTicks() {
  return ((new Date().getTime() * 10000) + 621355968000000000);
}
}
