import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobleService } from '../globle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  data: any;
  cityFilter : any
  constructor(private dataService: GlobleService,private router: Router) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
  ngOnInit() {
    this.dataService.fetchData().subscribe((data: any) => {
      this.data = data;
    });
  }

  ngAfterViewInit() {
    this.initDataTable();
  }
  initDataTable() {
    const dataTable = $('#datatableexample').DataTable({
      paging: true, // Enable pagination
      pageLength: 5, // Number of rows per page
      processing: true,
      lengthMenu: [5, 10, 25],
      responsive: true,
      autoWidth: true,
      dom: 'Blfrtip',
     
      columnDefs: [
        {
          targets: [3], // Adjust the style for the "Name" column
          className: 'dt-body-left',
        },
      ],
    });
  } 
}