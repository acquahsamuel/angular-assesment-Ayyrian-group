import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingRoutingModule } from './sorting-routing.module';
import { SortingComponent } from './sorting.component';


@NgModule({
    imports: [
        CommonModule,
        SortingRoutingModule,
        SortingComponent
    ]
})
export class SortingModule { }
