import { SeoService } from './../services/seo.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './../services/courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public loginOptions  : Array<string> = ["student", "Hirers", "Admin"];
  public displayName:any;
  meta:any;
  schemaHHA:any;
  schemaCNA: any;
  schemaCMA:any;
  schemaPharmacy:any;
  constructor(private CoursesService: CoursesService,private route: Router, private activatedRoute: ActivatedRoute, private seo: SeoService) { }
formSignIn=new FormGroup({
  username: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required])
})
  ngOnInit() {
    this.meta=[
      {name: 'description', content: 'Sign In Into Your MedNoc Training College Career Services, Update Health care Job Profile Are you looking for Qualified/Certified CNA(Certified Nurse Aide). HHA(Home Health Aide). Phlebotomy Technician, Pharmacy Technician, CNA looking for work. Home Health Aide looking for work.'},
      {name: 'author', content: 'Khansoft Technologies@ Moses Kanja'},
      {name: 'keywords', content: 'Log In MedNoc Training College, Create job Profile, HealthCare Jobs, Pharmacy Technician Jobs,medical assistant jobs,home health aide jobs,heaalth care jobs in oklahoma,health careers, medical field, cma jobs in oklahoma,cma jobs, health care jobs in Oklahoma, health care jobs'},
      {name: "og:locale", content: "en_US"},
      {name: "og:type",content: "website"},
      {name: "og:title",content: "MedNoc Training College Career Services- HHA jobs, CNA, Phlebotomy Technician Jobs, Pharmacy Technician Jobs, Medical Assistant Jobs In Oklahoma OKC "},
      {name: "og:description",content: "Welcome to MedNoc Training College Career Services.Are you looking for proffessionally trained CNAs, HHA ,CMA, Phlebotomy Technicians and Medical Assistants in Oklahoma OKC. Are you looking for a CNA jobs, HHA jobs, CMA jobs, Pharmacy Technician Jobs And Medical Assistant Jobs in Oklahoma."},
      {name: "og:url",content: "https://www.careers.mednoctrainingcollege.com"},
      {name: "og:site_name",content: "MedNoc Training College Career Services"},
      {name: "twitter:card",content: "summary_large_image"},
      {name: "twitter:description",content: "Welcome to MedNoc Training College Career Services.Are you looking for proffessionally trained CNAs, HHA ,CMA, Phlebotomy Technicians and Medical Assistants in Oklahoma OKC. Are you looking for a CNA jobs, HHA jobs, CMA jobs, Pharmacy Technician Jobs And Medical Assistant Jobs in Oklahoma."},
      {name: "twitter:title",content: "MedNoc Training College Career Services- HHA jobs, CNA, Phlebotomy Technician Jobs, Pharmacy Technician Jobs, Medical Assistant Jobs In Oklahoma OKC "},
      
    ];
    this.seo.AddTitleAndMeta("Sign In- MedNoc Training College Career Services", this.meta);
     this.schemaHHA=
     
      {
        "@context" : "http://schema.org",
        "@type" : "JobPosting",
        "title" : "Home Health Aide Jobs",
        "hiringOrganization" : "MedNoc Training College Career Services",
        "jobLocation" : {
          "@type" : "Place",
          "address" : "Oklahoma, united States"
        },
        "datePosted" : "2018-07-27T02:59",
        "baseSalary" : {
          "@type" : "MonetaryAmount",
          "currency" : "$",
          "value" : "22600-25000 /Year"
        },
        "description" : "Open HHA Positions in Oklahoma",
        "employmentType" : "any"
      }
      this.schemaCNA=
     
      {
        "@context" : "http://schema.org",
        "@type" : "JobPosting",
        "title" : "cna Jobs",
        "hiringOrganization" : "MedNoc Training College Career Services",
        "jobLocation" : {
          "@type" : "Place",
          "address" : "Oklahoma, united States"
        },
        "datePosted" : "2018-07-27T02:59",
        "baseSalary" : {
          "@type" : "MonetaryAmount",
          "currency" : "$",
          "value" : "20000-35000/Year"
        },
        "description" : "Open CNA jobs in Oklahoma, are you looking to hire a CNA, Are you looking for CNA Jobs",
        "employmentType" : "any"
      }
      this.schemaCMA={
        "@context" : "http://schema.org",
        "@type" : "JobPosting",
        "title" : "Medical Assistant Jobs",
        "hiringOrganization" : "MedNoc Training College Career Services",
        "jobLocation" : {
          "@type" : "Place",
          "address" : "Oklahoma, united States"
        },
        "datePosted" : "2018-07-27T02:59",
        "baseSalary" : {
          "@type" : "MonetaryAmount",
          "currency" : "$",
          "value" : "23000-39000/Year"
        },
        "description" : "Open Certified Medical Assistant Jobs in Oklahoma, Hire Medical Assistants",
        "employmentType" : "any"
      }
      this.schemaPharmacy={
        "@context" : "http://schema.org",
        "@type" : "JobPosting",
        "title" : "Pharmacy Tech Jobs",
        "hiringOrganization" : "MedNoc Training College Career Services",
        "jobLocation" : {
          "@type" : "Place",
          "address" : "Oklahoma, united States"
        },
        "datePosted" : "2018-07-27T02:59",
        "baseSalary" : {
          "@type" : "MonetaryAmount",
          "currency" : "$",
          "value" : "30-40000/Year"
        },
        "description" : "Open Medical Assistants Jobs in Oklahoma, are you looking to hire a Pharmacy Tech, Are you looking for Pharmacy Tech Jobs",
        "employmentType" : "any"
      }
   
  }

signIn(){
  if(this.formSignIn.invalid){
console.log(this.formSignIn.value)
this.formSignIn.setErrors({
  invalidform: true
});
  }else{
    this.CoursesService.signIn(this.formSignIn.value).subscribe((response:any)=>{
      if(response.data.loginStatus==false){
        this.formSignIn.setErrors({
          invalidcredentials: true
        });
      }else{
        this.displayName=response.data.displayName;
        if(response.data.role=="admin"){
          localStorage.setItem('uid',response.data.uid);
          localStorage.setItem('displayName',response.data.displayName);
          localStorage.setItem('role',response.data.role);
          localStorage.setItem('emailAddress',response.data.emailAddress);
          localStorage.setItem('fullName',response.data.fullName);
          this.route.navigate(['admindashboard']);
            //console.log(response);
        }else if(response.data.role=="student"){
          localStorage.setItem('uid',response.data.uid);
          
          localStorage.setItem('displayName',response.data.displayName);
          localStorage.setItem('role',response.data.role);
          localStorage.setItem('emailAddress',response.data.emailAddress);
          localStorage.setItem('fullName',response.data.fullName);
          this.route.navigate(['studentdashboard'])
           // console.log(response);
        }else if(response.data.role=="hirer"){
          localStorage.setItem('uid',response.data.uid);
          localStorage.setItem('displayName',response.data.displayName);
          localStorage.setItem('role',response.data.role);
          localStorage.setItem('emailAddress',response.data.emailAddress);
          localStorage.setItem('fullName',response.data.fullName);
          this.route.navigate(['hirerdashboard'])
           //console.log(response)
        }
      }
    });
  }
}
}
