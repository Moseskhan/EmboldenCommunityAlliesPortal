import { UsersService } from './../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
validStatus:boolean=false;
emailAddress:any;
  constructor(private router: ActivatedRoute, private userService: UsersService) { }
showPassword:boolean=true;
verifiedCode:boolean=false;
resetStatus:any=false;
alreadyReset:any=false;

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
        if (params.get('code')){
                  //alert(params.get('code'));
            
   this.userService.getUsersEmail(params.get('code')).subscribe((response:any)=>{
            for(let userDetails  of  response.data){
              this.emailAddress=userDetails.email;
              
            }
   });

        }else{
           this.showPassword=false;
        }
    });

  }
submitEmail(email: HTMLInputElement){
//console.log(email.value)
if (email.value==""){
    this.validStatus=false
}else{
this.validStatus=true;
this.userService.postResetEmail(email.value).subscribe((response:any)=>{
    this.resetStatus=response.data.available;
});
}
}
submitPassword(password:HTMLInputElement, cpassword:HTMLInputElement){
  if((password.value!=cpassword.value) ||  password.value=="" || password.value.length<6){
        this.validStatus=false;
     
  }else{
   this.validStatus=true;
   let info={
    email: this.emailAddress,
    password: password.value
  };
    this.userService.postResetPassword(info).subscribe(response=>{
      this.alreadyReset=true;
      console.log(this.alreadyReset);
    });
  }
}
}
