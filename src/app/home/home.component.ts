import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobleService } from '../globle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  data: any;
  cityFilter : any
  constructor(private dataService: GlobleService,private router: Router) {}
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 
  ngOnInit() {
    this.dataService.fetchData().subscribe((data: any) => {
      this.data = data;
    });
  }



  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }

  navigate(res : any){
    this.router.navigate(['/'+res]);

  }
}
