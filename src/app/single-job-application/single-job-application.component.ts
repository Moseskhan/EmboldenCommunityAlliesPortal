import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from './../services/jobs/jobs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-job-application',
  templateUrl: './single-job-application.component.html',
  styleUrls: ['./single-job-application.component.scss']
})
export class SingleJobApplicationComponent implements OnInit {
   applicationInfo:any;
   applicationID:any;
  constructor(private JobsService: JobsService,private router: ActivatedRoute) { }

  ngOnInit() {
this.router.paramMap.subscribe(params=>{
this.applicationID=params.get('id');
this.applicationInfo=this.JobsService.getSingleApplicationInfo(this.applicationID);
})
    
  }

}
