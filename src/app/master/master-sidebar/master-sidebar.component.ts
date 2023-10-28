import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobleService } from 'src/app/globle.service';

@Component({
  selector: 'app-master-sidebar',
  templateUrl: './master-sidebar.component.html',
  styleUrls: ['./master-sidebar.component.css']
})
export class MasterSidebarComponent {
  isSidebarOpen: boolean = false;
  constructor(private dataService: GlobleService,private router: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  navigate(res : any){
    this.router.navigate(['/'+res]);

  }
}
