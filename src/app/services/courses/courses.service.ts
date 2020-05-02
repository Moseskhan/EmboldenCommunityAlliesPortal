import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient) { }


  getCourses(){
    return this.http.get(environment.httpUrl+'/api/courselist',{headers: environment.headers})
  }
  postNewCourse(course){
     return this.http.post(environment.httpUrl+'/api/addcourse',course,{headers: environment.headers})
  }
  deleteCourse(courseID){
    return this.http.get(environment.httpUrl+'/api/removecourse/'+courseID,{headers: environment.headers})
  }
  getScheduleByCourseID(courseID){
    return this.http.get(environment.httpUrl+"/api/schedulelist/"+courseID, {headers: environment.headers})
  }
  postNewSchedule(schedule){
    return this.http.post(environment.httpUrl+'/api/addschedule',schedule,{headers: environment.headers})
  }
  deleteSchedule(scheduleID){
    return this.http.get(environment.httpUrl+'/api/removeschedule/'+scheduleID,{headers: environment.headers})
  }
  editSchedule(schedule){
    return this.http.post(environment.httpUrl+'/api/editschedule',schedule,{headers: environment.headers})
  }
  postAdditionalInfo(info){
    return this.http.post(environment.httpUrl+'/api/addcourseinfo',info,{headers: environment.headers})
  }
  getDescriptionByCourseID(courseID){
    return this.http.get(environment.httpUrl+"/api/getcourseinfo/"+courseID, {headers: environment.headers})
  }
  deleteDescription(id){
    return this.http.get(environment.httpUrl+'/api/removedescription/'+id,{headers: environment.headers})
  }
  registeruser(user){
    return this.http.post(environment.httpUrl+'/api/registeraccount',user,{headers: environment.headers})
  }
  signIn(credentials){
    return this.http.post(environment.httpUrl+'/api/signin',credentials,{headers: environment.headers})
  }
  getAllUsers(users){
    return this.http.get(environment.httpUrl+'/api/allUsers/'+users.parameter+'/'+users.parameterValue,{headers: environment.headers} )
  }
  deleteUser(userID){
    return this.http.get(environment.httpUrl+'/api/deleteUsers/'+userID,{headers: environment.headers} )
  }
  
}
