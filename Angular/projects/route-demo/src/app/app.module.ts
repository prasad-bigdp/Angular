import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { DataArrayService } from './data-array.service';
import { HeaderComponent } from './header/header.component';
import {  HttpClientModule } from '@angular/common/http';// import router module
import { authGuard } from './auth.guard';
//configure routes/paths

const anything:Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'home', component: HomeComponent,
    children: [ { path: 'hero', component: AboutComponent }, { path: 'villan', component: ContactComponent } ],
    canDeactivate:[authGuard]
  },
   
  { path: 'contact', component: ContactComponent },
  { path:'**',redirectTo:'/home',pathMatch:'full'}
];
// routes to be imported and loaded
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, [RouterModule.forRoot(anything)],HttpClientModule],
  providers: [DataArrayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
