import { SeoService } from './../services/seo.service';
import { JobsService } from './../services/jobs/jobs.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  meta:any;
  formError=false;
  postStatus=false;
   contactForm=new FormGroup({
     name: new FormControl("",[Validators.required]),
     email: new FormControl("",[Validators.required]),
     category: new FormControl("",[Validators.required]),
     phone: new FormControl("",[Validators.required]),
     message: new FormControl("",[Validators.required]),
     bestTimeCall: new FormControl("",[Validators.required])
   })
  constructor(private jobService: JobsService, private seo: SeoService) { }

  ngOnInit() {
    this.meta=[
      {name: 'description', content: 'Contact Us- MedNoc Staffing solutions, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more'},
      {name: 'author', content: 'Khansoft Technologies@ Moses Kanja'},
      {name: 'keywords', content: 'HealthCare Jobs, MAT jobs Oklahoma City, MAT jobs Oklahoma City, Pharmacy Technician Jobs,Health care staffing agency in Oklahoma , CNA Staffing agency in Oklahoma City,ACLS renewal OKC,  BLS jobs OKC, medical assistant jobs,home health aide jobs,heaalth care jobs in oklahoma,health careers, medical field, cma jobs in oklahoma,cma jobs, health care jobs in Oklahoma, health care jobs, best staffing agency in oklahoma'},
      {name: "og:locale", content: "en_US"},
      {name: "og:type",content: "website"},
      {name: "og:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      {name: "og:title",content: "Contact MedNoc Staffing Solutions Healthcare Jobs, Healthcare Staffing & Careers | Mednocstaffingsolutions.com"},
      {name: "og:description",content: "Contact MedNoc Staffing Solutions , staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "og:url",content: "https://www.mednocstaffingsolutions.com"},
      {name: "og:site_name",content: "MedNoc Staffing Solutions"},
      {name: "twitter:card",content: "summary_large_image"},
      {name: "twitter:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      
      {name: "twitter:description",content: "MedNoc Staffing solutions, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "twitter:title",content: " Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com"},
      
    ];
    this.seo.AddTitleAndMeta("Contact MedNoc Staffing Solutions -Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com ", this.meta);
  }
  submitContact(){
    if(this.contactForm.invalid){
     this.formError=true;
    }else{
     this.jobService.sendContactInfo(this.contactForm.value).subscribe(
       (response:any)=>{
         console.log(response)
         this.contactForm.reset();
         this.postStatus=true;
       },
       error=>{

       }
     )
    }
  }

}
