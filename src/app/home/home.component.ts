import { JsonServiceService } from './../json-service.service';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
meta:any;
title:any;
schemaHHA:any;
schemaCNA:any;
schemaCMA:any;
schemaPharmacy:any;
schemaPhlebotomy:any;
schemaBLS:any;
schemaACLS:any;
schemaMA:any;
  constructor(private seo: SeoService, private jsonService: JsonServiceService) { }

  ngOnInit() {
    this.meta=[
      {name: 'description', content: 'MedNoc Staffing solutions, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more'},
      {name: 'author', content: 'Khansoft Technologies@ Moses Kanja'},
      {name: 'keywords', content: 'HealthCare Jobs, MAT jobs Oklahoma City, MAT jobs Oklahoma City, Pharmacy Technician Jobs,Health care staffing agency in Oklahoma , CNA Staffing agency in Oklahoma City,ACLS renewal OKC,  BLS jobs OKC, medical assistant jobs,home health aide jobs,heaalth care jobs in oklahoma,health careers, medical field, cma jobs in oklahoma,cma jobs, health care jobs in Oklahoma, health care jobs, best staffing agency in oklahoma'},
      {name: "og:locale", content: "en_US"},
      {name: "og:type",content: "website"},
      {name: "og:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      {name: "og:title",content: "Healthcare Jobs, Healthcare Staffing & Careers | Mednocstaffingsolutions.com"},
      {name: "og:description",content: "MedNoc Staffing solutions, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "og:url",content: "https://www.mednocstaffingsolutions.com"},
      {name: "og:site_name",content: "MedNoc Staffing Solutions"},
      {name: "twitter:card",content: "summary_large_image"},
      {name: "twitter:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      
      {name: "twitter:description",content: "MedNoc Staffing solutions, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "twitter:title",content: " Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com"},
      
    ];
    this.seo.AddTitleAndMeta("Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com ", this.meta);
     
   
       
       
  }

}
