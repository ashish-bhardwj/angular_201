import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren: './dashboard/dashboard.module#DashboardModule'  },
  {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'  },
  {path:'login', loadChildren: './login/login.module#LoginModule'  },
  {path:'signup', loadChildren: './signup/signup.module#SignupModule'  },
  {path:'books', loadChildren: './books/books.module#BooksModule'  },
  {path:'admin', loadChildren: './admin/admin.module#AdminModule'  },
  {path:'profile', loadChildren: './profile/profile.module#ProfileModule'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
