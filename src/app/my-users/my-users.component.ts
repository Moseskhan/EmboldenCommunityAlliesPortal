import { UsersService } from './../services/users.service';
import { CoursesService } from './../services/courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-users',
  templateUrl: './my-users.component.html',
  styleUrls: ['./my-users.component.scss']
})
export class MyUsersComponent implements OnInit {
allUsers:any;
users:any;
deletedStatus:boolean=false;
currentUser:any;
selectType:any=['emailAddress','displayName','lastName','firstName'];
searchErrors:boolean=false;
dialogOpened:boolean=false;
  constructor(private courseService: CoursesService, private usershttp:UsersService) { }

  ngOnInit() {
   this.getUsers("all","all");
 console.log(this.users);
  }
  public open(component) {
    this.dialogOpened=true;
    this[component + 'Opened'] = true;
  }
  public close(component) {
    this[component + 'Opened'] = false;
  }
  deleteAccount(userID,displayName){
      this.currentUser={
        id: userID,
        name: displayName
      }
  }
  deleteOptions(userID,dialog){
         if(userID==0){
          this[dialog + 'Opened'] = false;
         }else{
          this.courseService.deleteUser(this.currentUser.id).subscribe(response=>{
            console.log(response)
               this.deletedStatus=true;
              this.getUsers("all","all");

          });
        
         }
         

  }
  verifyAccount(userID, button:HTMLButtonElement){
    //console.log(userID);
    if (userID){
      console.log(userID);
    this.usershttp.verifyUser(userID).subscribe((response:any)=>{

      if (response.status=="success"){
              button.textContent="Account was just Verified"   
      }else{
             button.textContent="An error occurred"
      }
    })
    }else{

    }
  }
  searchUsers(keyword,by){
if(keyword.value && by.value){
this.searchErrors=false;
this.getUsers(by.value,keyword.value);
}else{
this.searchErrors=true;
}

  }
  getUsers(parameter,parameterValue){
    this.users={
      parameter: parameter,
      parameterValue: parameterValue
    };
  this.allUsers=this.courseService.getAllUsers(this.users);
  }
}
