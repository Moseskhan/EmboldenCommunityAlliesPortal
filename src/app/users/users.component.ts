import { SeoService } from './../services/seo.service';
import { CoursesService } from './../services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
roles:any=["student", "hirer"];
submitted:boolean=false;
meta:any;
  constructor(private CoursesService: CoursesService, private seo:SeoService) { }

  ngOnInit() {

    this.meta=[
      {name: 'description', content: 'Sign Up Into Your MedNoc Training College Career Services, Update Health care Job Profile Are you looking for Qualified/Certified CNA(Certified Nurse Aide). HHA(Home Health Aide). Phlebotomy Technician, Pharmacy Technician, CNA looking for work. Home Health Aide looking for work.'},
      {name: 'author', content: 'Khansoft Technologies@ Moses Kanja'},
      {name: 'keywords', content: 'Sign Up MedNoc Training College, Create job Profile, HealthCare Jobs, Pharmacy Technician Jobs,medical assistant jobs,home health aide jobs,heaalth care jobs in oklahoma,health careers, medical field, cma jobs in oklahoma,cma jobs, health care jobs in Oklahoma, health care jobs'},
      {name: "og:locale", content: "en_US"},
      {name: "og:type",content: "website"},
      {name: "og:title",content: "MedNoc Training College Career Services- HHA jobs, CNA, Phlebotomy Technician Jobs, Pharmacy Technician Jobs, Medical Assistant Jobs In Oklahoma OKC "},
      {name: "og:description",content: "Sign Up Into Your MedNoc Training College Career Services, Update Health care Job Profile Are you looking for Qualified/Certified CNA(Certified Nurse Aide). HHA(Home Health Aide). Phlebotomy Technician, Pharmacy Technician, CNA looking for work. Home Health Aide looking for work."},
      {name: "og:url",content: "https://www.careers.mednoctrainingcollege.com/signup"},
      {name: "og:site_name",content: "MedNoc Training College Career Services"},
      {name: "twitter:card",content: "summary_large_image"},
      {name: "twitter:description",content: "Sign Up Into Your MedNoc Training College Career Services, Update Health care Job Profile Are you looking for Qualified/Certified CNA(Certified Nurse Aide). HHA(Home Health Aide). Phlebotomy Technician, Pharmacy Technician, CNA looking for work. Home Health Aide looking for work."},
      {name: "twitter:title",content: "MedNoc Training College Careers - Create Account  HHA jobs, CNA, Phlebotomy Technician Jobs, Pharmacy Technician Jobs, Medical Assistant Jobs In Oklahoma OKC "},
      
    ];
    this.seo.AddTitleAndMeta("Create MedNoc Training College Career Services Account", this.meta);
  }
formNewUser=new FormGroup({
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
  displayName: new FormControl('',[Validators.required]),
  role: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
  confirmPassword: new FormControl('',[Validators.required])

});
get password(){
  return this.formNewUser.get('password') as FormControl;
}
get confirmPassword(){
  return this.formNewUser.get('confirmPassword') as FormControl;
}
registerUser(){
  
  if (this.formNewUser.invalid){
    this.formNewUser.setErrors({
      invalidform:true
    });
  }else{
    if (this.password.value!=this.confirmPassword.value){
       this.formNewUser.setErrors({
         password: true
       });
    }else{
      this.CoursesService.registeruser(this.formNewUser.value).subscribe(response=>{
       this.submitted=true;
      })
    }
  }
}
}
