import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }
role:any;
userID:any;
  ngOnInit() {
   this.role= localStorage.getItem('role');
   this.userID=localStorage.getItem('uid');
  }
  logOut(){
    localStorage.removeItem('uid');
    localStorage.removeItem('role');
    localStorage.removeItem('displayName');
    localStorage.removeItem('emailAddress');
    localStorage.removeItem('fullName');
    this.route.navigate(['/signin'])
  }

}
