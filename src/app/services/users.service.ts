
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  verifyUser(userID){
    return this.http.get(environment.httpUrl+'/api/verifyaccount/'+userID,{headers: environment.headers})
  }
  postProfilePic(form){
    console.log(form)
    return this.http.post(environment.httpUrl+"/api/uploadprofile",form, {headers: environment.rawFormHeader})
  }
  postContact(contactInfo){
    return this.http.post(environment.httpUrl+"/api/contactinfo",contactInfo, {headers: environment.headers})
  }
  getContactInfo(userID){
    return this.http.get(environment.httpUrl+'/api/contactinfo/'+userID,{headers: environment.headers} )
  }
  postCompanyInfo(info){
    return this.http.post(environment.httpUrl+"/api/hirerprofile",info, {headers: environment.headers})
  }
  getCompanyProfile(userID){
    return this.http.get(environment.httpUrl+'/api/hirerprofile/'+userID,{headers: environment.headers} )
  }
  getUsersEmail($code){
    return this.http.get(environment.httpUrl+'/api/verifycode/'+$code,{headers: environment.headers})
  }
  postResetEmail(email){
    return this.http.get(environment.httpUrl+'/api/resetpassword/'+email,{headers: environment.headers})
  }
  postResetPassword(info){
  
    return this.http.post(environment.httpUrl+"/api/changepassword",info, {headers: environment.headers})
  }
  
}
