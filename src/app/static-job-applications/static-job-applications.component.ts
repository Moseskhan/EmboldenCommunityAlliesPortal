import { JobsService } from './../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-static-job-applications',
  templateUrl: './static-job-applications.component.html',
  styleUrls: ['./static-job-applications.component.scss']
})
export class StaticJobApplicationsComponent implements OnInit {

  applications=[];

  constructor(private jobService: JobsService, private router: Router) { }

  ngOnInit() {
this.getApplications();
  }

  getApplications(){
    this.jobService.getAllStaticApplications().subscribe(
      (response:any)=>{
       console.log(response);
       this.applications=response.data;
       
      }
    )
  }
  viewDocuments(documents){
    localStorage.setItem("application", JSON.stringify(documents));
    this.router.navigate(['static/documents'])
  }

  
}
