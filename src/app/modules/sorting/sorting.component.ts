import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { IUser } from 'src/app/shared/types/model';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-sorting',
  imports: [MatTableModule, MatSortModule, CommonModule],
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  standalone: true,
})
export class SortingComponent implements OnInit {
  users: IUser[] = [];
  isLoading: Boolean = false;
  columnsToDisplay: string[] = ['id', 'name', 'username', 'email' , 'website'];
  dataSource = new MatTableDataSource<IUser>([]);

  constructor(
    private apiService: ApiService,
    private _announcer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private readonly userData$: Observable<IUser[]> =  this.apiService.fetchUsersDetails();

  ngOnInit(): void {
    this.userData$.subscribe({
      next: (users) => {
        this.isLoading = true;
        this.users = users;
        this.dataSource.data = users;
      },
      error: (error) => console.error('Error fetching user data:', error),
      complete: () => {
        console.log('User data fetch complete');
        this.isLoading = false;
      },
    });
  }


  

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    let announcement: string;

    if (sortState.direction) {
      announcement = ``;
    } else {
      announcement = ``;
    }

    this._announcer.announce(announcement);
  }
}
