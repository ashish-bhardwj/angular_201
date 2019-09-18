import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'adminBooks',component:AdminBooksComponent},
  {path:'issuedBooks',component:IssuedBooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
