import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  {
    path:'application',component:CrudComponent
  },
  {
    path:'material',loadChildren:(()=>import('../app/material/material.module').then((m)=>m.MaterialModule))
  },
  { path: 'code', component: CodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
