import { SeoService } from './../services/seo.service';
import { JobsService } from './../services/jobs/jobs.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonServiceService } from './../json-service.service';
import { Component, OnInit } from '@angular/core';
import { VALID } from '@angular/forms/src/model';
import { environment } from '../../environments/environment.prod';
import { storage, initializeApp } from 'firebase';
@Component({
  selector: 'app-new-job-application',
  templateUrl: './new-job-application.component.html',
  styleUrls: ['./new-job-application.component.scss']
})
export class NewJobApplicationComponent implements OnInit {

  //seo

  meta:any;
  //seo
  errorFiles=false;
  errorWorkHistory=false;
  errorQualifications=false;
  errorEmergencyContact=false;
  errorReferences=false;
  formError:boolean=false;
  errorShifts=false;
  postStatus=false;
  shift={
    hour8: false,
    hour12: false,
    night: false,
    day:false,
    weekend: false
  }
  certificationfiles=[
    {
      id:1,
      fileName:"",
      fileUrl: "",
      type: "resume",
      expiryDate: "",
      isUploading:false,
      isUploadComplete:false
      
    },
    {
      id:20,
      fileName:"",
      fileUrl: "",
      type: "ssn",
      expiryDate: "",
      isUploading:false,
      isUploadComplete:false
      
    },
    {
      id: 2,
      fileName:"",
      fileUrl: "",
      type: "photoID",
      expiryDate: "",
      isUploading:false,
      isUploadComplete:false
    },
    {
      id: 3,
      fileName:"",
      fileUrl: "",
      type: "licenses",
      expiryDate: "",
      isUploading:false,
      isUploadComplete:false
    },
    {
      id: 4,
      fileName:"",
      fileUrl: "",
      type: "bls",
      expiryDate: "",
      isUploading:false,
      isUploadComplete:false
    }
  ]
  emergencyContacts=[
    {
      name: "",
      phone: ""
    },
    {
      name: "",
      phone: ""
    }
  ]
  educationHistory=[
    {
      school: "",
      degree: "",
      location: ""

    },
    {
      school: "",
      degree: "",
      location: ""

    }

  ];
  references=[
    {
      name: "",
      location: "",
      phone: "",
      relationship: ""
    },
    {
      name: "",
      location: "",
      phone: "",
      relationship: ""
    }
    
  ];
  employmentHistory=[
    {
      companyName: "",
      startDate: "",
      endDate: "",
      city: "",
      state: "",
      supervisorsName: "",
      phoneNumber: "",
      duties: "",
      reasonForLeaving: "",
      mayWeContact: "",
      startSalary: "",
      endSalary: ""
    },
    {
      companyName: "",
      startDate: "",
      endDate: "",
      city: "",
      state: "",
      supervisorsName: "",
      phoneNumber: "",
      duties: "",
      reasonsForLeaving: "",
      mayWeContact: "",
      startSalary: "",
      endSalary: ""
    }
  ]
  
applyJobForm=new FormGroup(
  {
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    emailAddress: new FormControl("", [Validators.required]),
    jobType: new FormControl("",[Validators.required]),
    phoneNumber: new FormControl("", [Validators.required]),
    address: new FormControl("",[Validators.required]),
    state: new FormControl("",[Validators.required]),
    zip: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    proffession: new FormControl("", [Validators.required]),
    middleInitial: new FormControl("", [Validators.required]),
    ssn: new FormControl("",[Validators.required]),
    dob: new FormControl("", [Validators.required]),
    legibleToWork: new FormControl("",[Validators.required]),
    convictedFelony: new FormControl("",[Validators.required]),
    felonyExplanation: new FormControl(""),
    startWorkingDate: new FormControl("", [Validators.required]),
    desiredEmployment: new FormControl("",[Validators.required]),
    specialSkills: new FormControl("",[Validators.required]),
    initials: new FormControl("",[Validators.required]),
    signingDate: new FormControl("",[Validators.required])
  }
)
  constructor(private jsonService: JsonServiceService, private jobService: JobsService, private seo: SeoService) { }

  ngOnInit() {
    this.meta=[
      {name: 'description', content: 'MedNoc Staffing solutions, apply a health care job ,  staffing agency in oklahoma, apply jobs like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more'},
      {name: 'author', content: 'Khansoft Technologies@ Moses Kanja'},
      {name: 'keywords', content: 'HealthCare Jobs, MAT jobs Oklahoma City, MAT jobs Oklahoma City, Pharmacy Technician Jobs,Health care staffing agency in Oklahoma , CNA Staffing agency in Oklahoma City,ACLS renewal OKC,  BLS jobs OKC, medical assistant jobs,home health aide jobs,heaalth care jobs in oklahoma,health careers, medical field, cma jobs in oklahoma,cma jobs, health care jobs in Oklahoma, health care jobs, best staffing agency in oklahoma'},
      {name: "og:locale", content: "en_US"},
      {name: "og:type",content: "website"},
      {name: "og:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      {name: "og:title",content: "Healthcare Jobs, Healthcare Staffing & Careers | Mednocstaffingsolutions.com"},
      {name: "og:description",content: "MedNoc Staffing solutions, apply a health care job,staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "og:url",content: "https://www.mednocstaffingsolutions.com"},
      {name: "og:site_name",content: "MedNoc Staffing Solutions"},
      {name: "twitter:card",content: "summary_large_image"},
      {name: "twitter:image",content: "http://mednocstaffingsolutions.com/assets/MTC-Logo.jpg"},
      
      {name: "twitter:description",content: "MedNoc Staffing solutions,apply a health care job, staffing agency in oklahoma, staffing health care proffessions like Nurses, CNA, HHA, Doctors, Hospital administrative Officers and many more"},
      {name: "twitter:title",content: " Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com"},
      
    ];
    this.seo.AddTitleAndMeta("Apply Healthcare Jobs, Healthcare Staffing & Careers,staffing agency in oklahoma | Mednocstaffingsolutions.com ", this.meta);
  }
  addCertification(){
    this.certificationfiles.push(
      {
        id: this.certificationfiles.length+2,
        fileName:"",
        fileUrl: "",
        type: "licenses",
        expiryDate: "",
        isUploading:false,
        isUploadComplete:false
      }
      
    );
    console.log(this.certificationfiles);
  }
  handleFileInput(files: FileList, certification) {
    console.log(files.item(0));
    this.uploadFilesToFirebase(certification,files.item(0))

    
}
uploadFilesToFirebase(thecertification, file){
  let progress;
  console.log("uploading files")
  for(let certification of this.certificationfiles){
    if(certification.id==thecertification.id){
      certification.isUploading=true;
      let uploadTask=this.jobService.uploadFiles(file);
      uploadTask.on(storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          // upload in progress
      
        },
        (error) => {
          // upload failed
         // this.toast.showErrorAlert("There was an error uploading your certicate. Please try again later.");
        },
        () => {
          // upload success
         
           uploadTask.snapshot.ref.getDownloadURL().then(url=>{
             certification.isUploadComplete=true;
            certification.fileUrl=url;
            certification.isUploading=false;
           certification.fileName=file.name;
          
          });
          
        }
      );
    }
  }

}
  applyJob(){
    this.markFormGroupTouched(this.applyJobForm);
    console.log(this.applyJobForm.value);
    console.log(this.certificationfiles);
    console.log(this.checkFiles());
    let applicationForm=this.applyJobForm.value;
applicationForm.dob=this.convertDate(applicationForm.dob);
applicationForm.startWorkingDate=this.convertDate(applicationForm.startWorkingDate);
applicationForm.signingDate=this.convertDate(applicationForm.signingDate);
console.log(applicationForm)
    console.log(this.checkWorkHistory());
    console.log(this.checkEmergency());
    console.log(this.checkQualifications());
    console.log(this.checkReferences());
    
    if(this.applyJobForm.invalid  || this.checkFiles() || this.checkEmergency() || this.checkWorkHistory() || this.checkQualifications() || this.checkReferences()){
  this.formError=true
    }else{
      console.log(this.applyJobForm.value);

      
      this.formError=false;
      let postObject={
        form: this.applyJobForm.value,
        references: this.references,
        qualifications: this.educationHistory,
        shifts: this.shift,
        workHistory: this.employmentHistory,
        emergency: this.emergencyContacts,
        baseUrl: environment.httpUrl,
        files: this.certificationfiles
      }
      console.log(JSON.stringify(postObject));
      this.jobService.applyJob(postObject).subscribe(
      (response)=>{
  console.log(response);
       this.postStatus=true;
      },
      error=>{
        console.log(error)
      }
      )
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  addSchool(){
    this.educationHistory.push(
      {
        school: "",
        degree: "",
        location: ""
      }
    )
  }
  removeSchool(education){
    let index=this.educationHistory.indexOf(education);
    this.educationHistory.splice(index,1)
  }
  addRef(){
    this.references.push(
      {
        name: "",
        location: "",
        phone: "",
        relationship: ""
      }
    )
  }
  removeRef(ref){
    let index=this.references.indexOf(ref);
    this.references.splice(index,1)
  }
  addWorkHistory(){
    this.employmentHistory.push(
      {
        companyName: "",
        startDate: "",
        endDate: "",
        city: "",
        state: "",
        supervisorsName: "",
        phoneNumber: "",
        duties: "",
        reasonForLeaving: "",
        mayWeContact: "",
        startSalary: "",
        endSalary: ""
      }
    )
  }
  removeWorkHistory(history){
    let index=this.employmentHistory.indexOf(history);
    this.employmentHistory.splice(index,1)
  }
  checkWorkHistory(){
    let error=false;
    console.log(this.employmentHistory);
    for(let history of this.employmentHistory){
      let isEmpty = Object.values(history).every(x => (x === null || x === ''));
       if(isEmpty){
         error=true;
       }
    }
    this.errorWorkHistory=error;
    return error;
  }
  checkQualifications(){
    let error=false;
    //console.log(this.employmentHistory);
    for(let history of this.educationHistory){
      let isEmpty = Object.values(history).every(x => (x === null || x === ''));
       if(isEmpty){
         error=true;
       }
    }
    this.errorQualifications=error;
    return error;
  }
  checkReferences(){
    let error=false;
    //console.log(this.employmentHistory);
    for(let history of this.references){
      let isEmpty = Object.values(history).every(x => (x === null || x === ''));
       if(isEmpty){
         error=true;
       }
    }
    this.errorReferences=error;
    return error;
  }
  checkEmergency(){
    let error=false;
    //console.log(this.employmentHistory);
    for(let history of this.emergencyContacts){
      let isEmpty = Object.values(history).every(x => (x === null || x === ''));
       if(isEmpty){
         error=true;
       }
    }
    this.errorEmergencyContact=error;
    return error;
  }
  checkShifts(){
    let error=false;
    let isEmpty = Object.values(history).every(x => (x === null || x === ''));
    if(isEmpty){
      error=true;
    }
    this.errorShifts=error;
    return error;
  }
  get convictedFelony(){
    return this.applyJobForm.get("convictedFelony");
  }
  get legibleToWork(){
    return this.applyJobForm.get("legibleToWork");
  }
  get state(){
    return this.applyJobForm.get("state");
  }
  get jobType(){
    return this.applyJobForm.get("jobType");
  }
  get proffession(){
    return this.applyJobForm.get("proffession");
  }
  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getMonth()+1),pad(d.getDate()), d.getFullYear()].join('/');
  }
  checkFiles(){
    let error=false;
    //console.log(this.employmentHistory);
    for(let history of this.certificationfiles){
      if(history.fileUrl=="" || !history.isUploadComplete && history.type!="ssn" ){
         error=true;
      }
      if(history.type=="licenses" && history.expiryDate==""){
        error=true;
      }
      if(history.type=="photoID" && history.expiryDate==""){
        error=true;
      }
      if(history.type=="bls" && history.expiryDate==""){
        error=true;
      }
     
    }
    
    this.errorFiles=error;
    return error;
  }
  

}
