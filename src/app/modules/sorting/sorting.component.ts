import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { IUser } from 'src/app/shared/types/model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
 

@Component({
  selector: 'app-sorting',
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    CommonModule,
  ],
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  standalone: true,
})
export class SortingComponent implements OnInit {
  isLoading: Boolean = false;
  users : IUser[] = [];

  constructor(private apiService: ApiService) {}

  private readonly userData$: Observable<IUser[]> = this.apiService.fetchUsersDetails();

  ngOnInit(): void {
    this.userData$.subscribe((users: IUser[]) => {
      this.users = users;
    });
  }
}
