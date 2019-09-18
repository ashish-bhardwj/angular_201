import { Component, OnInit } from '@angular/core';
import { IIssue } from '../../model/issue';
import { Router } from '@angular/router';
import { AdminService } from '../../sharedModule/service/admin.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {

  pageTitle = 'Issued Books';
  errorMessage = '';
  sortByKey: string='firstName';
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredList = this.listFilter ? this.performFilter(this.listFilter) : this.list;
  }

  filteredList: IIssue[]=[];
  list: IIssue[] =[];

  constructor(private adminService:AdminService,
    private router: Router) {

  }

  performFilter(filterBy: string): IIssue[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.list.filter((issue: IIssue) =>
      issue.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }   

         
  ngOnInit() {
    this.getMyList();
  }

  getMyList(){
    this.adminService.getIssuedList().subscribe((res)=>{
      console.log(res);
      this.list=res as IIssue[];
      this.filteredList=this.list;
    });
  }

  goBack(): void {
    this.router.navigate(['/adminBooks']);
  }


}
