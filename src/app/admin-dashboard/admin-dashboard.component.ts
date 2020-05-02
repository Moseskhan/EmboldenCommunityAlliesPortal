import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }
displayName:any;
  ngOnInit() {
    this.displayName=localStorage.getItem('displayName');
    if(localStorage.getItem("uid") && localStorage.getItem('role')=="admin"){

    }else if(localStorage.getItem("uid") && localStorage.getItem('role')=="student"){
      this.router.navigate(['studentdashboard'])
    }else if(localStorage.getItem("uid") && localStorage.getItem('role')=="hirer"){
      this.router.navigate(['hirerdashboard'])
    }else{
      this.router.navigate(['signin'])
    }
  }


}
