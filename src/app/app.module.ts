
import { JsonServiceService } from './json-service.service';
import { SeoService } from './services/seo.service';
import { JobsService } from './services/jobs/jobs.service';
import { UsersService } from './services/users.service';
import { AuthService } from './services/Authorization/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import{RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';

import { HttpClientModule } from '@angular/common/http';
import {environment} from '../environments/environment';

import { CoursesService } from './services/courses/courses.service';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { UsersComponent } from './users/users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { MyUsersComponent } from './my-users/my-users.component';

import { SingleJobApplicationComponent } from './single-job-application/single-job-application.component';
import {Nl2BrPipeModule} from 'nl2br-pipe';




import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { AclsComponent } from './acls/acls.component';

import { NewJobApplicationComponent } from './new-job-application/new-job-application.component';
import { ContactComponent } from './contact/contact.component';
import { StaticJobApplicationsComponent } from './static-job-applications/static-job-applications.component';
import { ViewDocumentsComponent } from './view-documents/view-documents.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
   
    UsersComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent,
   
    MyUsersComponent,
    
    SingleJobApplicationComponent,
   
    
    
    FooterComponent,
    NotFoundComponent,
    
    AclsComponent,
    
    NewJobApplicationComponent,
    ContactComponent,
 
   StaticJobApplicationsComponent,
 
   ViewDocumentsComponent
   
  ],
  imports: [
  DateInputsModule,
   DialogsModule,
   Nl2BrPipeModule,
    FormsModule,
   HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    DropDownsModule,
    LayoutModule,
    BrowserModule,
    InputsModule,
    NgxJsonLdModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'signup', component: UsersComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'static/applications', component: StaticJobApplicationsComponent},
      {path: 'static/documents', component: ViewDocumentsComponent},
      
    
    
      {path: 'forgotpassword', component: ForgotPasswordComponent},
      {path: 'admindashboard', component: AdminDashboardComponent},
      {path: 'new/application', component: NewJobApplicationComponent},
      {path: 'adminusers', component: MyUsersComponent},
      
      
      {path: 'jobapplications/:id',component: SingleJobApplicationComponent},
     
      
      {path: 'ACLS-jobs-and-courses-in-oklahoma',component: AclsComponent},
    
      {path: 'resetpassword/:code', component: ForgotPasswordComponent},
      {path: '404', component: NotFoundComponent},
      {path: '**', redirectTo: '/404'}



    ])
  ],
  providers: [AuthService,CoursesService,UsersService,JobsService,SeoService, JsonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
