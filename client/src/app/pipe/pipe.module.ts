import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from '../sharedModule/pipes/search-filter';
import { SortByPipe } from '../sharedModule/pipes/sort-by';

@NgModule({
  declarations: [SearchPipe,SortByPipe],
  imports: [
    CommonModule
  ],
  exports:[SearchPipe,SortByPipe]
})
export class PipeModule { }
